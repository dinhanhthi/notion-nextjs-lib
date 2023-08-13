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
function getJoinedRichText(richTextArr) {
  if (!richTextArr || !richTextArr.length)
    return "";
  const textArr = richTextArr.map((richText) => richText.plain_text);
  return textArr.join("");
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
function convertHeadingIdToSlug(headingId, richTextArr) {
  const plainText = getJoinedRichText(richTextArr);
  return plainText.split(" ").join("-").toLowerCase() + `-${headingId.slice(0, 3)}`;
}
var import_classnames;
var init_block_helpers = __esm({
  "src/helpers/block-helpers.ts"() {
    import_classnames = __toESM(require("classnames"));
  }
});

// src/notion-blocks/BlockEquation.tsx
var import_react_katex, import_classnames3, import_jsx_runtime2, mathFontSize;
var init_BlockEquation = __esm({
  "src/notion-blocks/BlockEquation.tsx"() {
    "use client";
    import_react_katex = __toESM(require("@matejmazur/react-katex"));
    import_classnames3 = __toESM(require("classnames"));
    import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_react_katex2, import_jsx_runtime3;
var init_BlockInlineEquation = __esm({
  "src/notion-blocks/BlockInlineEquation.tsx"() {
    "use client";
    import_react_katex2 = __toESM(require("@matejmazur/react-katex"));
    init_block_helpers();
    init_BlockEquation();
    import_jsx_runtime3 = require("react/jsx-runtime");
  }
});

// src/components/PostToc.tsx
var PostToc_exports = {};
__export(PostToc_exports, {
  default: () => PostToc
});
module.exports = __toCommonJS(PostToc_exports);
var import_classnames4 = __toESM(require("classnames"));
var import_react2 = require("react");
var import_io = require("react-icons/io");
init_block_helpers();

// src/lib/hooks.ts
var import_react = require("react");
function useHeadsObserver() {
  const observer = (0, import_react.useRef)(null);
  const [activeId, setActiveId] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const handleObsever = (entries) => {
      entries.forEach((entry) => {
        if (entry == null ? void 0 : entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-100px 0% -80% 0px"
    });
    const elements = document.querySelectorAll("h2, h3");
    elements.forEach((elem) => {
      var _a;
      return (_a = observer == null ? void 0 : observer.current) == null ? void 0 : _a.observe(elem);
    });
    return () => {
      var _a;
      return (_a = observer.current) == null ? void 0 : _a.disconnect();
    };
  }, []);
  return { activeId };
}

// src/notion-blocks/BlockRichText.tsx
var import_dynamic = __toESM(require("next/dynamic"));

// src/notion-blocks/BlockText.tsx
var import_classnames2 = __toESM(require("classnames"));
var import_lodash = require("lodash");
var import_link = __toESM(require("next/link"));
init_block_helpers();
var import_jsx_runtime = require("react/jsx-runtime");
function BlockText(props) {
  var _a, _b, _c, _d;
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !((_a = props.ignore) == null ? void 0 : _a.includes("hyperlink")) && props.richText.href) {
    if (props.richText.href.includes("math2it.com") && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_link.default,
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "a",
        {
          className: (0, import_classnames2.default)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_link.default,
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var DynamicInlineEquation = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BlockText, { richText: props.richText });
  }
}

// src/components/PostToc.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function PostToc(props) {
  const [showContent, setShowContent] = (0, import_react2.useState)(true);
  const headingBlocks = props.contentBlocks.filter(
    (block) => block.type === "heading_2" || block.type === "heading_3"
  );
  const showToc = props.showToc && headingBlocks.length >= (props.minNumHeadingsToShowToc || 4);
  const { activeId } = useHeadsObserver();
  if (!showToc)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "nav",
    {
      className: (0, import_classnames4.default)("h-fit w-full flex gap-2 flex-col px-4 py-3", {
        "2xl:hidden": props.inPost,
        // hide on large screens
        "max-h-full p-3": !props.inPost,
        "bg-gray-100 rounded-xl m2it-box-shadow border-[0.5px]": !props.inPost,
        "max-h-[350px] bg-slate-50 rounded-xl mt-8 mb-10 m2it-box-shadow": props.inPost,
        border: props.inPost
      }),
      "aria-label": "Table of contents",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "button",
          {
            className: (0, import_classnames4.default)(
              "flex items-center justify-between text-md font-semibold text-slate-700 pb-0"
            ),
            onClick: () => setShowContent(!showContent),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: "Trong b\xE0i n\xE0y" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                import_io.IoIosArrowDown,
                {
                  className: (0, import_classnames4.default)("text-2xl ease-in-out transition-all duration-[400ms]", {
                    "rotate-0": showContent,
                    "rotate-[-90deg]": !showContent
                  })
                }
              ) })
            ]
          }
        ),
        showContent && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "div",
          {
            className: (0, import_classnames4.default)("pt-3 pl-1 overflow-auto m2it-scrollbar m2it-scrollbar-small border-t", {
              "columns-1 md:columns-2": props.inPost
            }),
            children: headingBlocks.map((block) => {
              var _a;
              const anchor = convertHeadingIdToSlug(
                block.id,
                (_a = block[`${block.type}`]) == null ? void 0 : _a.rich_text
              );
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                "a",
                {
                  href: `#${anchor}`,
                  className: (0, import_classnames4.default)("flex items-baseline gap-2 hover:m2it-link text-sm py-1", {
                    "pl-4 border-l": block.type === "heading_3",
                    "-ml-1": block.type === "heading_2",
                    "m2it-link-hover": activeId === anchor && !props.inPost,
                    "text-slate-700": activeId !== anchor || props.inPost
                  }),
                  children: [
                    block.type === "heading_2" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-[0.7rem] text-slate-400", children: "\u25C6" }),
                    block.type === "heading_3" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-[0.6rem] text-slate-400", children: "\u25CB" }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "block", children: block[`${block.type}`].rich_text.map(
                      (richText, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                        BlockRichText,
                        {
                          richText,
                          ignore: ["hyperlink", "color", "underline", "bold", "italic"],
                          mathFontSize: "text-[0.83rem]"
                        },
                        index
                      )
                    ) })
                  ]
                },
                block.id
              );
            })
          }
        )
      ]
    }
  );
}
//# sourceMappingURL=PostToc.js.map