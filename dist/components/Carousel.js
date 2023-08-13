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

// src/components/Carousel.tsx
var Carousel_exports = {};
__export(Carousel_exports, {
  Carousel: () => Carousel,
  CarouselItem: () => CarouselItem
});
module.exports = __toCommonJS(Carousel_exports);
var import_classnames = __toESM(require("classnames"));
var import_fa = require("react-icons/fa");
var import_react_snap_carousel = require("react-snap-carousel");
var import_jsx_runtime = require("react/jsx-runtime");
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = (0, import_react_snap_carousel.useSnapCarousel)();
  const arrowBtnClasses = (0, import_classnames.default)(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = (0, import_classnames.default)(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        ref: scrollRef,
        className: (0, import_classnames.default)("no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4"),
        children: items.map(
          (item, i) => renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i
          })
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        onClick: () => prev(),
        className: (0, import_classnames.default)("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_fa.FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        onClick: () => next(),
        className: (0, import_classnames.default)("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_fa.FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        className: (0, import_classnames.default)("h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60", {
          "opacity-40 w-2.5 hover:w-3.5": activePageIndex !== i,
          "w-5 opacity-70": activePageIndex === i
        }),
        onClick: () => goTo(i)
      },
      i
    )) })
  ] });
};
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    className: (0, import_classnames.default)(
      "shrink-0",
      {
        "snap-start": isSnapPoint
      },
      widthClass != null ? widthClass : "w-64"
    ),
    children
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Carousel,
  CarouselItem
});
//# sourceMappingURL=Carousel.js.map