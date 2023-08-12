var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Pagination.tsx
var Pagination_exports = {};
__export(Pagination_exports, {
  default: () => Pagination
});
module.exports = __toCommonJS(Pagination_exports);
var import_classnames = __toESM(require("classnames"));
var import_link = __toESM(require("next/link"));
var import_cg = require("react-icons/cg");
var import_jsx_runtime = require("react/jsx-runtime");
function Pagination(props) {
  const { path, total, current, className, pageAlias } = props;
  const iconSize = "h-6 w-6";
  const hClass = "h-9";
  const wClass = "w-9";
  const sizeCurrentClass = "h-12 w-12";
  const classNumber = `${hClass} ${wClass} hidden cursor-pointer items-center
    justify-center rounded-full leading-5 transition duration-150 ease-in !flex`;
  const classCurrent = `${sizeCurrentClass} rounded-full bg-main text-white shadow-md
    items-center justify-center leading-5 transition duration-150 ease-in !flex`;
  const classSeparated = `h-10 w-10 flex cursor-pointer items-center
    justify-center rounded-full bg-gray-200 hover:shadow-md`;
  const classArrow = classSeparated + " opacity-80 hover:opacity-100";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)("my-12 flex flex-col items-center", className), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center text-gray-700", children: [
    current > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(current - 1, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classArrow, "mr-2"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_cg.CgChevronLeft, { className: iconSize }) }) }),
    current > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(1, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classSeparated, "mr-2"), children: "1" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: `absolute -z-10 flex ${hClass} w-full rounded-full bg-gray-200 font-medium shadow-md`
        }
      ),
      current === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(1, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classNumber, "ml-2"), children: "1" }) }),
      current > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(current - 2, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classNumber, { "ml-2": current !== 4 }), children: current - 2 }) }),
      current > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(current - 1, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classNumber, { "ml-2": current <= 2 }), children: current - 1 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: (0, import_classnames.default)(classCurrent, {
            "mx-1": current !== 1 && current !== total,
            "mr-2": current === 1,
            "ml-2": current === total
          }),
          children: current
        }
      ),
      total - current > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(current + 1, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classNumber, { "mr-2": total - current <= 1 }), children: current + 1 }) }),
      total - current > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(current + 2, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classNumber, { "mr-2": current !== total - 3 }), children: current + 2 }) }),
      current === total - 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(total, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classNumber, "mr-2"), children: total }) })
    ] }),
    total - current > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(total, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classSeparated, "ml-2"), children: total }) }),
    total - current > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: getPagePath(current + 1, path, pageAlias), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_classnames.default)(classArrow, "ml-2"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_cg.CgChevronRight, { className: iconSize }) }) })
  ] }) });
}
var getPagePath = (pageNumber, path, pageAlias) => {
  const alias = pageAlias || "page";
  return pageNumber === 1 ? path : `${path}${alias}/${pageNumber}/`;
};
//# sourceMappingURL=Pagination.js.map