"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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

// src/components/BadgeSocial.tsx
var BadgeSocial_exports = {};
__export(BadgeSocial_exports, {
  default: () => BadgeSocial
});
module.exports = __toCommonJS(BadgeSocial_exports);
var import_react = __toESM(require("@tippyjs/react"));

// src/components/ImageComponent.tsx
var import_image = __toESM(require("next/image"));
var import_jsx_runtime = require("react/jsx-runtime");
function ImageComponent(props) {
  var _a, _b, _c;
  const image = ((_a = props.image) == null ? void 0 : _a.staticImageData) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_image.default,
    __spreadValues({
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.staticImageData,
      className: props.className
    }, props.imageProps)
  ) : ((_b = props.image) == null ? void 0 : _b.sourceUrl) && ((_c = props.image) == null ? void 0 : _c.blurDataURL) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_image.default,
    __spreadValues({
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.sourceUrl,
      className: props.className,
      placeholder: "blur",
      blurDataURL: props.image.blurDataURL
    }, props.imageProps)
  ) : props.defaultImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_image.default,
    __spreadValues({
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.defaultImage,
      className: props.className
    }, props.imageProps)
  ) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: image });
}

// src/components/BadgeSocial.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function BadgeSocial(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.default, { content: props.title, placement: "bottom", arrow: false, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "a",
    {
      className: `
          group block h-12 w-12 rounded-2xl bg-gray-700 p-2
          shadow-none md:h-10 md:w-10 md:p-1.5
        `,
      href: props.url,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        ImageComponent,
        {
          image: props.icon,
          alt: props.title,
          className: "w-16 h-16 rounded-full bg-slate-100",
          imageProps: { width: 64, height: 64 }
        }
      )
    }
  ) });
}
//# sourceMappingURL=BadgeSocial.js.map