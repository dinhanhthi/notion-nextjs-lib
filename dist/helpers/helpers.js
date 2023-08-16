// src/helpers/helpers.ts
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
  if (posts?.length === 0)
    return void 0;
  if (currentPage === 1)
    return void 0;
  const numPages = Math.ceil(posts.length / postsPerPage);
  if (currentPage > numPages)
    return void 0;
  return posts[(currentPage - 1) * postsPerPage]?.id;
}
export {
  cleanText,
  getStartCursorForCurrentPage,
  idToUuid,
  makeSlugText
};
//# sourceMappingURL=helpers.js.map