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

// src/components/BadgeInfos.tsx
var BadgeInfos_exports = {};
__export(BadgeInfos_exports, {
  default: () => BadgeInfos
});
module.exports = __toCommonJS(BadgeInfos_exports);
var import_link = __toESM(require("next/link"));
var import_jsx_runtime = require("react/jsx-runtime");
function BadgeInfos(props) {
  const aLinkClass = `
    block py-2.5 bg-transparent text-main-dark rounded-3xl border-gray-600 text-sm
    uppercase font-bold tracking-widest${(props == null ? void 0 : props.className) ? ` ${props.className}` : " px-5 hover:bg-gray-700"} transition duration-300 shadow-md md:shadow-none`;
  if (props.external || props.url.includes("//")) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "a",
      {
        className: aLinkClass,
        href: props.url,
        target: props.targetSelf ? "_self" : "_blank",
        rel: "noopener noreferrer",
        children: [
          props.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3", children: props.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: props.title })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_link.default, { className: aLinkClass, href: props.url, target: "_blank", rel: "noopener noreferrer", children: [
    props.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3", children: props.icon }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: props.title })
  ] });
}
//# sourceMappingURL=BadgeInfos.js.map