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

// src/helpers/helpers.ts
var helpers_exports = {};
__export(helpers_exports, {
  cleanText: () => cleanText,
  getStartCursorForCurrentPage: () => getStartCursorForCurrentPage,
  idToUuid: () => idToUuid,
  makeSlugText: () => makeSlugText
});
module.exports = __toCommonJS(helpers_exports);
function cleanText(text) {
  if (!text)
    return void 0;
  return text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
}
function idToUuid(id) {
  if (!id) {
    return null;
  }
  id = id.split("?")[0];
  const match = id.match(/\b([a-f0-9]{32})\b/);
  if (match) {
    return `${id.slice(0, 8)}-${id.slice(8, 4 + 8)}-${id.slice(12, 4 + 12)}-${id.slice(
      16,
      4 + 16
    )}-${id.slice(20)}`;
  }
  const match2 = id.match(/\b([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\b/);
  if (match2) {
    return match2[1];
  }
  return null;
}
function makeSlugText(text) {
  if (!text)
    return void 0;
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").replace(":", "").split(" ").join("-").replace(/^\/|\/$/g, "");
}
function getStartCursorForCurrentPage(currentPage, posts, postsPerPage) {
  var _a;
  if ((posts == null ? void 0 : posts.length) === 0)
    return void 0;
  if (currentPage === 1)
    return void 0;
  const numPages = Math.ceil(posts.length / postsPerPage);
  if (currentPage > numPages)
    return void 0;
  return (_a = posts[(currentPage - 1) * postsPerPage]) == null ? void 0 : _a.id;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cleanText,
  getStartCursorForCurrentPage,
  idToUuid,
  makeSlugText
});
//# sourceMappingURL=helpers.js.map