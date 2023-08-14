var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/db.ts
var db_exports = {};
__export(db_exports, {
  getBlocks: () => getBlocks,
  getNotionBlocksWithoutCache: () => getNotionBlocksWithoutCache,
  getNotionDatabaseWithoutCache: () => getNotionDatabaseWithoutCache,
  getNotionPageWithoutCache: () => getNotionPageWithoutCache,
  getPlaceholderImage: () => getPlaceholderImage,
  retrieveNotionDatabaseWithoutCache: () => retrieveNotionDatabaseWithoutCache
});
module.exports = __toCommonJS(db_exports);
var import_lodash = require("lodash");
var import_plaiceholder = require("plaiceholder");
var import_unfurl = require("unfurl.js");

// src/helpers/helpers.ts
function cleanText(text) {
  if (!text)
    return void 0;
  return text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
}

// src/lib/db.ts
async function getNotionDatabaseWithoutCache(dataId, notionToken, notionVersion, filter, startCursor, pageSize, sorts) {
  var _a;
  try {
    const url = `https://api.notion.com/v1/databases/${dataId}/query`;
    const requestBody = {
      filter,
      sorts,
      start_cursor: startCursor,
      page_size: pageSize != null ? pageSize : 50
    };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Notion-Version": notionVersion,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    return res.json();
  } catch (error) {
    console.error(error);
    const retryAfter = ((_a = error == null ? void 0 : error.response) == null ? void 0 : _a.headers["retry-after"]) || error["retry-after"];
    if (retryAfter) {
      console.log(`Retrying after ${retryAfter} seconds`);
      await new Promise((resolve) => setTimeout(resolve, retryAfter * 1e3 + 500));
      return await getNotionDatabaseWithoutCache(
        dataId,
        notionToken,
        notionVersion,
        filter,
        startCursor,
        pageSize,
        sorts
      );
    }
    return;
  }
}
var getNotionPageWithoutCache = async (pageId, notionToken, notionVersion) => {
  const url = `https://api.notion.com/v1/pages/${pageId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${notionToken}`,
      "Notion-Version": notionVersion
    }
  });
  return res.json();
};
var getNotionBlocksWithoutCache = async (pageId, notionToken, notionVersion, pageSize, startCursor) => {
  let url = `https://api.notion.com/v1/blocks/${pageId}/children`;
  if (pageSize)
    url += `?page_size=${pageSize}`;
  if (startCursor)
    url += `&start_cursor=${startCursor}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${notionToken}`,
      "Notion-Version": notionVersion
    }
  });
  return res.json();
};
async function retrieveNotionDatabaseWithoutCache(dataId, notionToken, notionVersion) {
  const url = `https://api.notion.com/v1/databases/${dataId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${notionToken}`,
      "Notion-Version": notionVersion
    }
  });
  return res.json();
}
async function getBlocks(blockId, notionToken, notionVersion, initNumbering, getPageUri, parseImgurUrl) {
  var _a, _b, _c, _d, _e;
  let data = await getNotionBlocksWithoutCache(blockId, notionToken, notionVersion);
  let blocks = data == null ? void 0 : data.results;
  if (!(blocks == null ? void 0 : blocks.length))
    return [];
  if (data && data["has_more"]) {
    while (data["has_more"]) {
      const startCursor = data["next_cursor"];
      data = await getNotionBlocksWithoutCache(
        blockId,
        notionToken,
        notionVersion,
        void 0,
        startCursor
      );
      if ((0, import_lodash.get)(data, "results") && (0, import_lodash.get)(data, "results").length) {
        const lst = data["results"];
        blocks = [...blocks, ...lst];
      }
    }
  }
  let number = 1;
  for (const block of blocks) {
    if (block.type === "numbered_list_item") {
      if (initNumbering && ["1", "2", "3"].includes(initNumbering))
        initNumbering = void 0;
      block["list_item"] = (initNumbering != null ? initNumbering : "") + `${number}.`;
      number++;
    } else {
      number = 1;
    }
    if (block.type === "bulleted_list_item") {
      block["list_item"] = !initNumbering ? "1" : initNumbering === "1" ? "2" : "3";
    }
    if ((0, import_lodash.get)(block, `${block.type}.rich_text`) && !!getPageUri) {
      const parsedMention = await parseMention(
        (0, import_lodash.get)(block, `${block.type}.rich_text`),
        getPageUri
      );
      (0, import_lodash.set)(block, `${block.type}.rich_text`, parsedMention);
    }
    if (block.has_children) {
      const children = await getBlocks(
        block.id,
        notionToken,
        notionVersion,
        block["list_item"],
        getPageUri,
        parseImgurUrl
      );
      block["children"] = children;
    }
    if (block.type === "image") {
      const url = (0, import_lodash.get)(block, "image.file.url") || (0, import_lodash.get)(block, "image.external.url");
      if (url) {
        if (parseImgurUrl)
          block["imgUrl"] = parseImgurUrl(url);
        block["imageInfo"] = await getPlaceholderImage(url);
      }
    }
    if (block.type === "bookmark") {
      const url = (0, import_lodash.get)(block, "bookmark.url");
      if (url) {
        const unfurled = await (0, import_unfurl.unfurl)(url);
        const bookmark = {
          url,
          title: cleanText(unfurled.title),
          description: (_a = cleanText(unfurled.description)) != null ? _a : null,
          favicon: unfurled.favicon,
          imageSrc: (_e = (_d = (_c = (_b = unfurled.open_graph) == null ? void 0 : _b.images) == null ? void 0 : _c[0]) == null ? void 0 : _d.url) != null ? _e : null
        };
        block["bookmark"] = bookmark;
      }
    }
  }
  return blocks;
}
async function parseMention(richText, getPageUri) {
  var _a;
  if (!(richText == null ? void 0 : richText.length))
    return [];
  const newRichText = [];
  for (const block of richText) {
    if (block.type === "mention" && ((_a = block.mention) == null ? void 0 : _a.type) === "page") {
      const pageId = (0, import_lodash.get)(block, "mention.page.id");
      if (pageId) {
        const pageUri = await getPageUri(pageId);
        (0, import_lodash.set)(block, "mention.page.uri", pageUri);
      }
      newRichText.push(block);
    } else {
      newRichText.push(block);
    }
  }
  return newRichText;
}
var getPlaceholderImage = async function getPlaceholderImage2(src) {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
  const { base64, metadata } = await (0, import_plaiceholder.getPlaiceholder)(buffer);
  return { base64, width: metadata.width, height: metadata.height };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBlocks,
  getNotionBlocksWithoutCache,
  getNotionDatabaseWithoutCache,
  getNotionPageWithoutCache,
  getPlaceholderImage,
  retrieveNotionDatabaseWithoutCache
});
//# sourceMappingURL=db.js.map