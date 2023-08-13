"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
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

// src/helpers/block-helpers.ts
function generateTextAnnotationClasses(annotations, ignore) {
  return (0, import_classnames.default)({
    "font-semibold": annotations.bold && !(ignore == null ? void 0 : ignore.includes("bold")),
    italic: annotations.italic && !(ignore == null ? void 0 : ignore.includes("italic")),
    "underline underline-offset-4": annotations.underline && !(ignore == null ? void 0 : ignore.includes("underline")),
    "line-through": annotations.strikethrough && !(ignore == null ? void 0 : ignore.includes("strikethrough")),
    "font-mono text-[85%] bg-slate-200 text-rose-500 px-1 py-0 rounded": annotations.code && !(ignore == null ? void 0 : ignore.includes("code")),
    [mapColorClass(annotations.color)]: !(ignore == null ? void 0 : ignore.includes("color"))
  });
}
function mapColorClass(color) {
  switch (color) {
    case "gray":
      return "text-gray-500";
    case "brown":
      return "text-brown-500";
    case "orange":
      return "text-orange-500";
    case "yellow":
      return "text-yellow-500";
    case "green":
      return "text-emerald-600";
    case "blue":
      return "text-blue-500";
    case "purple":
      return "text-purple-500";
    case "pink":
      return "text-pink-500";
    case "red":
      return "text-red-500";
    case "gray_background":
      return "bg-gray-100";
    case "brown_background":
      return "bg-brown-100";
    case "orange_background":
      return "bg-orange-100";
    case "yellow_background":
      return "bg-amber-100";
    case "green_background":
      return "bg-[#deffdb]";
    case "blue_background":
      return "bg-blue-100";
    case "purple_background":
      return "bg-purple-100";
    case "pink_background":
      return "bg-pink-100";
    case "red_background":
      return "bg-red-100";
    default:
      return "";
  }
}
var import_classnames;
var init_block_helpers = __esm({
  "src/helpers/block-helpers.ts"() {
    import_classnames = __toESM(require("classnames"));
  }
});

// src/notion-blocks/BlockEquation.tsx
var import_react_katex, import_classnames3, import_jsx_runtime3, mathFontSize;
var init_BlockEquation = __esm({
  "src/notion-blocks/BlockEquation.tsx"() {
    "use client";
    import_react_katex = __toESM(require("@matejmazur/react-katex"));
    import_classnames3 = __toESM(require("classnames"));
    import_jsx_runtime3 = require("react/jsx-runtime");
    mathFontSize = "text-base";
  }
});

// src/notion-blocks/BlockInlineEquation.tsx
var BlockInlineEquation_exports = {};
__export(BlockInlineEquation_exports, {
  default: () => BlockInlineEquation
});
function BlockInlineEquation(props) {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_react_katex2.default,
    {
      className: (_a = props.fontSize) != null ? _a : mathFontSize,
      math: props.equation.plain_text,
      settings: {
        throwOnError: false,
        strict: false
      }
    }
  ) });
}
var import_react_katex2, import_jsx_runtime4;
var init_BlockInlineEquation = __esm({
  "src/notion-blocks/BlockInlineEquation.tsx"() {
    "use client";
    import_react_katex2 = __toESM(require("@matejmazur/react-katex"));
    init_block_helpers();
    init_BlockEquation();
    import_jsx_runtime4 = require("react/jsx-runtime");
  }
});

// src/components/SkeletonPostList.tsx
var SkeletonPostList_exports = {};
__export(SkeletonPostList_exports, {
  default: () => SkeletonPostList
});
module.exports = __toCommonJS(SkeletonPostList_exports);
var import_classnames12 = __toESM(require("classnames"));

// src/post-types/PostCardWhiteBgBig.tsx
var import_classnames5 = __toESM(require("classnames"));
var import_link2 = __toESM(require("next/link"));

// src/components/Date.tsx
var import_moment = __toESM(require("moment"));
var import_jsx_runtime = require("react/jsx-runtime");

// src/notion-blocks/BlockRichText.tsx
var import_dynamic = __toESM(require("next/dynamic"));

// src/notion-blocks/BlockText.tsx
var import_classnames2 = __toESM(require("classnames"));
var import_lodash = require("lodash");
var import_link = __toESM(require("next/link"));
init_block_helpers();
var import_jsx_runtime2 = require("react/jsx-runtime");

// src/notion-blocks/BlockRichText.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var DynamicInlineEquation = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));

// src/components/Excerpt.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");

// src/components/PostFeaturedImage.tsx
var import_classnames4 = __toESM(require("classnames"));

// src/components/ImageComponent.tsx
var import_image = __toESM(require("next/image"));
var import_jsx_runtime7 = require("react/jsx-runtime");

// src/components/PostFeaturedImage.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");

// src/post-types/PostCardWhiteBgBig.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var CWBBHeightClass = "h-36";

// src/post-types/PostImageBackground.tsx
var import_classnames6 = __toESM(require("classnames"));
var import_link3 = __toESM(require("next/link"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var PIBHeightClass = "h-36";

// src/post-types/PostTitleCateDate.tsx
var import_classnames7 = __toESM(require("classnames"));
var import_link4 = __toESM(require("next/link"));
var import_io5 = require("react-icons/io5");
var import_jsx_runtime11 = require("react/jsx-runtime");
var TCDFIHeightClass = "h-28";

// src/components/Carousel.tsx
var import_classnames8 = __toESM(require("classnames"));
var import_fa = require("react-icons/fa");
var import_react_snap_carousel = require("react-snap-carousel");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = (0, import_react_snap_carousel.useSnapCarousel)();
  const arrowBtnClasses = (0, import_classnames8.default)(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = (0, import_classnames8.default)(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        ref: scrollRef,
        className: (0, import_classnames8.default)("no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4"),
        children: items.map(
          (item, i) => renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i
          })
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        onClick: () => prev(),
        className: (0, import_classnames8.default)("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_fa.FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        onClick: () => next(),
        className: (0, import_classnames8.default)("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_fa.FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        className: (0, import_classnames8.default)("h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60", {
          "opacity-40 w-2.5 hover:w-3.5": activePageIndex !== i,
          "w-5 opacity-70": activePageIndex === i
        }),
        onClick: () => goTo(i)
      },
      i
    )) })
  ] });
};
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  "div",
  {
    className: (0, import_classnames8.default)(
      "shrink-0",
      {
        "snap-start": isSnapPoint
      },
      widthClass != null ? widthClass : "w-64"
    ),
    children
  }
);

// src/components/PostsList.tsx
var import_classnames11 = __toESM(require("classnames"));
var import_react = __toESM(require("react"));

// src/post-types/PostCardWave.tsx
var import_classnames9 = __toESM(require("classnames"));
var import_link5 = __toESM(require("next/link"));
var import_jsx_runtime13 = require("react/jsx-runtime");

// src/post-types/PostCardWhiteBg.tsx
var import_classnames10 = __toESM(require("classnames"));
var import_link6 = __toESM(require("next/link"));
var import_jsx_runtime14 = require("react/jsx-runtime");

// src/components/PostsList.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var postListGridCLass = (0, import_classnames11.default)(
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-4"
);

// src/components/SkeletonPostList.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function SkeletonPostList(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    (!props.listStyle || props.listStyle === "default") && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: (0, import_classnames12.default)(postListGridCLass, "animate-pulse"), children: Array.from({ length: props.count }).map((_, i) => getSkeleton(i, props.postType)) }),
    props.listStyle === "carousel" && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Carousel,
      {
        items: Array.from({ length: props.count }).map((_, i) => ({ id: i })),
        renderItem: ({ item, isSnapPoint }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CarouselItem, { isSnapPoint, widthClass: "w-80", children: getSkeleton(item.id, props.postType) }, item.id)
      }
    )
  ] });
}
function getSkeleton(key, postType) {
  switch (postType) {
    case "PostTitleCateDate":
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PostTitleCateDateSkeleton, {}, key);
    case "PostCardWhiteBgBig":
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PostCardWhiteBgBigSkeleton, {}, key);
    case "PostImageBackground":
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PostImageBackgroundSkeleton, {}, key);
    case "PostCardWave":
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PostCardWaveSkeleton, {}, key);
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PostTitleCateDateSkeleton, {}, key);
  }
}
var PostCardWaveSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: (0, import_classnames12.default)("flex items-center justify-center w-full rounded-md bg-slate-200", "h-32"), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
var PostTitleCateDateSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: (0, import_classnames12.default)("w-full rounded-md bg-slate-200", TCDFIHeightClass) }),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4 w-3/4 rounded-md bg-slate-200" })
  ] })
] });
var PostCardWhiteBgBigSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: (0, import_classnames12.default)("w-full rounded-md bg-slate-200", CWBBHeightClass) }),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "w-full mt-2 px-2 flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-2 w-3/4 rounded-md bg-slate-200" })
    ] })
  ] })
] });
var PostImageBackgroundSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: (0, import_classnames12.default)("relative w-full rounded-md bg-slate-200", PIBHeightClass), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "absolute bottom-0 left-0 w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
//# sourceMappingURL=SkeletonPostList.js.map