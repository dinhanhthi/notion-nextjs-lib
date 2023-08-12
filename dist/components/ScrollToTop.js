"use client";
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

// src/components/ScrollToTop.tsx
var ScrollToTop_exports = {};
__export(ScrollToTop_exports, {
  default: () => ScrollToTop
});
module.exports = __toCommonJS(ScrollToTop_exports);
var import_classnames = __toESM(require("classnames"));
var import_image = __toESM(require("next/image"));
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function ScrollToTop(props) {
  const buttonRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const button = buttonRef.current;
    if (!button)
      return;
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        button.classList.remove("opacity-0");
        button.classList.add("opacity-100");
      } else {
        button.classList.add("opacity-0");
        button.classList.remove("opacity-100");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      onClick: scrollToTop,
      ref: buttonRef,
      className: (0, import_classnames.default)(
        "fixed right-10 bottom-8 rounded-full p-2 opacity-0 transition-all duration-300",
        "z-50 group bg-[#c0c0c066] hover:bg-[#c0c0c099]"
      ),
      children: [
        props.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_image.default,
          {
            className: "group-hover:animate-toTop",
            src: props.image,
            alt: "To top",
            width: 32,
            height: 32
          }
        ),
        !props.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u261D" })
      ]
    }
  );
}
//# sourceMappingURL=ScrollToTop.js.map