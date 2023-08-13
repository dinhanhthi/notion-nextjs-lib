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
  return (0, import_classnames4.default)({
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
var import_classnames4;
var init_block_helpers = __esm({
  "src/helpers/block-helpers.ts"() {
    import_classnames4 = __toESM(require("classnames"));
  }
});

// src/notion-blocks/BlockEquation.tsx
var import_react_katex, import_classnames6, import_jsx_runtime7, mathFontSize;
var init_BlockEquation = __esm({
  "src/notion-blocks/BlockEquation.tsx"() {
    "use client";
    import_react_katex = __toESM(require("@matejmazur/react-katex"));
    import_classnames6 = __toESM(require("classnames"));
    import_jsx_runtime7 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_react_katex2, import_jsx_runtime8;
var init_BlockInlineEquation = __esm({
  "src/notion-blocks/BlockInlineEquation.tsx"() {
    "use client";
    import_react_katex2 = __toESM(require("@matejmazur/react-katex"));
    init_block_helpers();
    init_BlockEquation();
    import_jsx_runtime8 = require("react/jsx-runtime");
  }
});

// src/components/PostsList.tsx
var PostsList_exports = {};
__export(PostsList_exports, {
  default: () => PostList,
  postListGridCLass: () => postListGridCLass
});
module.exports = __toCommonJS(PostsList_exports);
var import_classnames11 = __toESM(require("classnames"));
var import_react = __toESM(require("react"));

// src/post-types/PostCardWave.tsx
var import_classnames = __toESM(require("classnames"));
var import_link = __toESM(require("next/link"));
var import_jsx_runtime = require("react/jsx-runtime");
function PostCardWave(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: props.post.uri || "/", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "post-card-wave group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        className: (0, import_classnames.default)(
          props.fontClassName,
          "card-title font-semibold group-hover:m2it-link-hover text-slate-800",
          "leading-[1.35] text-[0.95rem]"
        ),
        children: props.post.title
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bottom-wave", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "svg",
      {
        className: "waves",
        preserveAspectRatio: "none",
        shapeRendering: "auto",
        viewBox: "0 24 150 28",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
              id: "gentle-wave"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { className: "parallax", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "use",
              {
                fill: `rgba(${waveColors[props.colorIndex || 0]}, 0.1)`,
                x: "48",
                xlinkHref: "#gentle-wave",
                y: "0"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "use",
              {
                fill: `rgba(${waveColors[props.colorIndex || 0]}, 0.05)`,
                x: "48",
                xlinkHref: "#gentle-wave",
                y: "3"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "use",
              {
                fill: `rgba(${waveColors[props.colorIndex || 0]}, 0.01)`,
                x: "48",
                xlinkHref: "#gentle-wave",
                y: "5"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "use",
              {
                fill: `rgba(${waveColors[props.colorIndex || 0]}, 0.005)`,
                x: "48",
                xlinkHref: "#gentle-wave",
                y: "7"
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
}
var waveColors = [
  "0, 0, 255",
  "255, 0, 166",
  "0, 0, 0",
  "166, 82, 0",
  "0, 120, 0",
  "166, 0, 82",
  "166, 0, 255",
  "0, 139, 139",
  "0, 255, 255",
  "0, 255, 166",
  "166, 255, 0"
];

// src/post-types/PostCardWhiteBg.tsx
var import_classnames3 = __toESM(require("classnames"));
var import_link2 = __toESM(require("next/link"));

// src/components/Date.tsx
var import_moment = __toESM(require("moment"));
var import_jsx_runtime2 = require("react/jsx-runtime");
function Date({ dateString }) {
  const date = (0, import_moment.default)(dateString).format("DD/MM/YYYY");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: date });
}

// src/components/PostFeaturedImage.tsx
var import_classnames2 = __toESM(require("classnames"));

// src/components/ImageComponent.tsx
var import_image = __toESM(require("next/image"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function ImageComponent(props) {
  var _a, _b, _c;
  const image = ((_a = props.image) == null ? void 0 : _a.staticImageData) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_image.default,
    __spreadValues({
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.staticImageData,
      className: props.className
    }, props.imageProps)
  ) : ((_b = props.image) == null ? void 0 : _b.sourceUrl) && ((_c = props.image) == null ? void 0 : _c.blurDataURL) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_image.default,
    __spreadValues({
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.sourceUrl,
      className: props.className,
      placeholder: "blur",
      blurDataURL: props.image.blurDataURL
    }, props.imageProps)
  ) : props.defaultImage ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_image.default,
    __spreadValues({
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.defaultImage,
      className: props.className
    }, props.imageProps)
  ) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: image });
}

// src/components/PostFeaturedImage.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function PostFeaturedImage(props) {
  const { title, featuredImage } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    ImageComponent,
    {
      defaultImage: props.defaultImage,
      image: featuredImage,
      alt: `H\xECnh \u0111\u1EA1i di\u1EC7n cho b\xE0i vi\u1EBFt "${title}"`,
      className: (0, import_classnames2.default)("object-cover", props.className),
      imageProps: {
        fill: true
      }
    }
  ) }) });
}

// src/post-types/PostCardWhiteBg.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function PostCardWhiteBg(props) {
  var _a, _b;
  const { title, featuredImage, date, uri } = props.post;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "group overflow-hidden rounded-md bg-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_link2.default, { className: (0, import_classnames3.default)((_a = props.options) == null ? void 0 : _a.fontClassName, "text-center"), href: uri || "/", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex flex-col justify-center ", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "relative h-28 w-full overflow-hidden ", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PostFeaturedImage, { featuredImage, title }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "group-hover:m2it-link-hover px-4 py-3 text-base font-bold", children: title }),
    !((_b = props.options) == null ? void 0 : _b.hideDate) && date && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "px-2 pb-4 text-sm opacity-80", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Date, { dateString: date }) })
  ] }) });
}

// src/post-types/PostCardWhiteBgBig.tsx
var import_classnames7 = __toESM(require("classnames"));
var import_link4 = __toESM(require("next/link"));

// src/notion-blocks/BlockRichText.tsx
var import_dynamic = __toESM(require("next/dynamic"));

// src/notion-blocks/BlockText.tsx
var import_classnames5 = __toESM(require("classnames"));
var import_lodash = require("lodash");
var import_link3 = __toESM(require("next/link"));
init_block_helpers();
var import_jsx_runtime6 = require("react/jsx-runtime");
function BlockText(props) {
  var _a, _b, _c, _d;
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !((_a = props.ignore) == null ? void 0 : _a.includes("hyperlink")) && props.richText.href) {
    if (props.richText.href.includes("math2it.com") && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_link3.default,
        {
          className: generateTextAnnotationClasses(
            props.richText.annotations,
            props.ignore
          ),
          href: uri,
          children: props.richText.plain_text
        }
      );
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "a",
        {
          className: (0, import_classnames5.default)(
            "m2it-link",
            generateTextAnnotationClasses(
              props.richText.annotations,
              props.ignore
            )
          ),
          href: props.richText.href,
          target: "_blank",
          rel: "noreferrer",
          children: props.richText.plain_text
        }
      );
    }
  }
  if (!((_b = props.ignore) == null ? void 0 : _b.includes("hyperlink")) && props.richText.type === "mention" && ((_c = props.richText.mention) == null ? void 0 : _c.type) === "page" && (0, import_lodash.get)(props.richText, "mention.page.uri")) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_link3.default,
      {
        className: generateTextAnnotationClasses(
          props.richText.annotations,
          props.ignore
        ),
        href: (0, import_lodash.get)(props.richText, "mention.page.uri", "/"),
        children: props.richText.plain_text
      }
    );
  }
  if (props.richText.type === "mention" && ((_d = props.richText.mention) == null ? void 0 : _d.type) === "date") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "span",
      {
        className: generateTextAnnotationClasses(
          props.richText.annotations,
          props.ignore
        ),
        children: formatDate(props.richText.plain_text)
      }
    );
  }
  const noDecoration = !props.richText.annotations.bold && !props.richText.annotations.italic && !props.richText.annotations.underline && !props.richText.annotations.strikethrough && !props.richText.annotations.code && props.richText.annotations.color === "default" && !props.richText.href;
  if (noDecoration)
    return props.richText.plain_text;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "span",
    {
      className: generateTextAnnotationClasses(
        props.richText.annotations,
        props.ignore
      ),
      children: props.richText.plain_text
    }
  );
}
function getUriFromUrl(url) {
  const withoutProtocol = url.replace(/^(https?:\/\/)/, "");
  const withoutWWW = withoutProtocol.replace(/^www\./, "");
  const withoutTrailingSlashes = withoutWWW.replace(/\/+$/, "");
  const withoutDomain = withoutTrailingSlashes.replace(/math2it.com/, "");
  const slug = `${withoutDomain}/`;
  return slug;
}
function formatDate(inputString) {
  const [year, month, day] = inputString.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

// src/notion-blocks/BlockRichText.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var DynamicInlineEquation = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BlockText, { richText: props.richText });
  }
}

// src/components/Excerpt.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Excerpt(props) {
  if (!props.excerpt || !props.excerpt.length) {
    if (props.defaultExcerpt)
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: props.defaultExcerpt });
    return "Undefined excerpt";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: props.excerpt.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BlockRichText, { richText, ignore: ["hyperlink"] }, index)) });
}

// src/post-types/PostCardWhiteBgBig.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var CWBBHeightClass = "h-36";
function PostCardWhiteBgBig(props) {
  const { title, featuredImage, date, uri, excerpt, authors } = props.post;
  const options = props.options;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "group overflow-hidden rounded-md bg-white shadow-lg h-full", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_link4.default, { className: (0, import_classnames7.default)(options == null ? void 0 : options.fontClassName, "text-center"), href: uri || "/", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: (0, import_classnames7.default)("relative w-full overflow-hidden", CWBBHeightClass), children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PostFeaturedImage, { featuredImage, title }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "group-hover:m2it-link-hover text-base font-bold leading-[1.35]", children: title }),
      (!(options == null ? void 0 : options.hideDate) || !(options == null ? void 0 : options.hideAuthor)) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex justify-center gap-2 p-2", children: [
        !(options == null ? void 0 : options.hideDate) && date && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "text-sm opacity-80", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("i", { className: "icon-clock mr-1" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Date, { dateString: date })
        ] }),
        !(options == null ? void 0 : options.hideAuthor) && (authors == null ? void 0 : authors.length) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex gap-1 text-sm opacity-80", children: [
          (authors == null ? void 0 : authors.length) > 1 && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("i", { className: "icon-users-outline" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "Nhi\u1EC1u t\xE1c gi\u1EA3" })
          ] }),
          (authors == null ? void 0 : authors.length) <= 1 && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("i", { className: "icon-user-outline -mr-1" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: authors[0].name })
          ] })
        ] })
      ] }),
      !(options == null ? void 0 : options.hideExcerpt) && excerpt && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "pt-2 text-[0.8rem] opacity-80 group-hover:opacity-100", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Excerpt, { excerpt, defaultExcerpt: "M\u1ED9t b\xE0i vi\u1EBFt tr\xEAn Math2IT" }) })
    ] })
  ] }) });
}

// src/post-types/PostImageBackground.tsx
var import_classnames8 = __toESM(require("classnames"));
var import_link5 = __toESM(require("next/link"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var PIBHeightClass = "h-36";
function PostImageBackground(props) {
  var _a;
  const { title, featuredImage, uri } = props.post;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "group overflow-hidden rounded-md shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_link5.default, { className: (0, import_classnames8.default)((_a = props.options) == null ? void 0 : _a.fontClassName, "text-center"), href: uri || "/", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: (0, import_classnames8.default)("relative w-full overflow-hidden mix-blend-overlay", PIBHeightClass), children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PostFeaturedImage, { featuredImage, title }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        className: (0, import_classnames8.default)(
          "absolute bottom-0 left-0 flex h-fit w-full flex-col justify-end",
          "bg-gradient-to-t from-gray-900 to-transparent p-4 pt-6 text-sm font-bold",
          "leading-5 text-white duration-300 hover:from-black hover:to-transparent"
        ),
        children: title
      }
    )
  ] }) }) }) });
}

// src/post-types/PostTitleCateDate.tsx
var import_classnames9 = __toESM(require("classnames"));
var import_link6 = __toESM(require("next/link"));
var import_io5 = require("react-icons/io5");
var import_jsx_runtime13 = require("react/jsx-runtime");
var TCDFIHeightClass = "h-28";
function PostTitleCateDate(props) {
  var _a, _b;
  const { title, featuredImage, date, categories, uri } = props.post;
  const options = props.options;
  const category = categories ? categories[0] : null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "group", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_link6.default, { className: (0, import_classnames9.default)(options == null ? void 0 : options.fontClassName, "text-center"), href: uri || "/", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      "div",
      {
        className: (0, import_classnames9.default)("flex flex-col justify-center overflow-hidden rounded-t-md shadow-sm", {
          "rounded-b-md": !category || (options == null ? void 0 : options.hideCategory)
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: (0, import_classnames9.default)("relative w-full overflow-hidden", TCDFIHeightClass), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            PostFeaturedImage,
            {
              className: "duration-300 group-hover:scale-110",
              featuredImage,
              title
            }
          ) }),
          !(options == null ? void 0 : options.hideCategory) && category && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "div",
            {
              style: {
                backgroundColor: `${((_a = category.style) == null ? void 0 : _a.bgColor) || props.defaultCategoryBgColor || "#eee"}`,
                color: `${((_b = category.style) == null ? void 0 : _b.textColor) || props.defaultCategoryTextColor || "#222"}`
              },
              className: (0, import_classnames9.default)("rounded-b-md px-2 py-1 text-xs font-semibold"),
              children: category == null ? void 0 : category.name
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      "div",
      {
        className: (0, import_classnames9.default)(
          "group-hover:m2it-link-hover p-2 text-[0.95rem] font-semibold leading-[1.35]"
        ),
        children: [
          title,
          !!props.post.bookCover && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_io5.IoBookOutline, { className: "group-hover:m2it-link-hover mb-[2px] ml-2 inline text-sm text-slate-700" })
        ]
      }
    ),
    !(options == null ? void 0 : options.hideDate) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "text-sm opacity-80", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("i", { className: "icon-clock mr-1" }),
      date && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Date, { dateString: date })
    ] })
  ] }) });
}

// src/components/Carousel.tsx
var import_classnames10 = __toESM(require("classnames"));
var import_fa = require("react-icons/fa");
var import_react_snap_carousel = require("react-snap-carousel");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = (0, import_react_snap_carousel.useSnapCarousel)();
  const arrowBtnClasses = (0, import_classnames10.default)(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = (0, import_classnames10.default)(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        ref: scrollRef,
        className: (0, import_classnames10.default)("no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4"),
        children: items.map(
          (item, i) => renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i
          })
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "button",
      {
        onClick: () => prev(),
        className: (0, import_classnames10.default)("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_fa.FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "button",
      {
        onClick: () => next(),
        className: (0, import_classnames10.default)("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_fa.FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "button",
      {
        className: (0, import_classnames10.default)("h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60", {
          "opacity-40 w-2.5 hover:w-3.5": activePageIndex !== i,
          "w-5 opacity-70": activePageIndex === i
        }),
        onClick: () => goTo(i)
      },
      i
    )) })
  ] });
};
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  "div",
  {
    className: (0, import_classnames10.default)(
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
var import_jsx_runtime15 = require("react/jsx-runtime");
var postListGridCLass = (0, import_classnames11.default)(
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-4"
);
function PostList(props) {
  var _a;
  const className = ((_a = props.options) == null ? void 0 : _a.className) ? props.options.className : postListGridCLass;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { children: [
    (!props.listStyle || props.listStyle === "default") && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className, children: props.posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react.default.Fragment, { children: getPostTypeElement(props.postType, post, props.postTypeOpts, index) }, post.uri)) }),
    props.listStyle === "carousel" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      Carousel,
      {
        items: props.posts,
        renderItem: ({ item, isSnapPoint, index }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CarouselItem, { isSnapPoint, widthClass: "w-80", children: getPostTypeElement(props.postType, item, props.postTypeOpts, index) }, item.id)
      }
    )
  ] });
}
function getPostTypeElement(postType, post, postTypeOpts, index) {
  switch (postType) {
    case "PostTitleCateDate":
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PostTitleCateDate, { post, options: postTypeOpts });
    case "PostCardWhiteBg":
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PostCardWhiteBg, { post, options: postTypeOpts });
    case "PostCardWhiteBgBig":
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PostCardWhiteBgBig, { post, options: postTypeOpts });
    case "PostImageBackground":
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PostImageBackground, { post });
    case "PostCardWave":
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PostCardWave, { post, colorIndex: index });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  postListGridCLass
});
//# sourceMappingURL=PostsList.js.map