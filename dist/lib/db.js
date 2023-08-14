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
  getNotionBlocksWithoutCache: () => getNotionBlocksWithoutCache,
  getNotionDatabaseWithoutCache: () => getNotionDatabaseWithoutCache,
  getNotionPageWithoutCache: () => getNotionPageWithoutCache,
  retrieveNotionDatabaseWithoutCache: () => retrieveNotionDatabaseWithoutCache
});
module.exports = __toCommonJS(db_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getNotionBlocksWithoutCache,
  getNotionDatabaseWithoutCache,
  getNotionPageWithoutCache,
  retrieveNotionDatabaseWithoutCache
});
//# sourceMappingURL=db.js.map