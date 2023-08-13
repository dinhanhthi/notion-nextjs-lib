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
function getIndentLevelClass(level, isList, isInsideList) {
  switch (level) {
    case 0:
      return (0, import_classnames.default)("pl-0", {
        "my-4": !isList,
        "my-1.5": isList
      });
    case 1:
      return isInsideList ? "pl-4 my-1.5" : "pl-4 my-3";
    case 2:
      return isInsideList ? "pl-8 my-1.5" : "pl-8 my-3";
    default:
      return (0, import_classnames.default)("pl-0", {
        "my-4": !isList,
        "my-1.5": isList
      });
  }
}
function convertHeadingIdToSlug(headingId, richTextArr) {
  const plainText = getJoinedRichText(richTextArr);
  return plainText.split(" ").join("-").toLowerCase() + `-${headingId.slice(0, 3)}`;
}
function getYoutubeVideoId(url) {
  if (!url)
    return null;
  let videoId = null;
  const patterns = [
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/watch\?(?:.*&)?v=([^&#]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/embed\/([^/?]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/v\/([^/?]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/user\/[^/?]+\/?\?v=([^&]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtu\.be\/([^/?]+)/i
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = url.match(patterns[i]);
    if (match && match[1]) {
      videoId = match[1];
      break;
    }
  }
  return videoId;
}
var import_classnames;
var init_block_helpers = __esm({
  "src/helpers/block-helpers.ts"() {
    import_classnames = __toESM(require("classnames"));
  }
});

// src/notion-blocks/BlockText.tsx
function BlockText(props) {
  var _a, _b, _c, _d;
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !((_a = props.ignore) == null ? void 0 : _a.includes("hyperlink")) && props.richText.href) {
    if (props.richText.href.includes("math2it.com") && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "a",
        {
          className: (0, import_classnames3.default)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_classnames3, import_lodash, import_link, import_jsx_runtime2;
var init_BlockText = __esm({
  "src/notion-blocks/BlockText.tsx"() {
    import_classnames3 = __toESM(require("classnames"));
    import_lodash = require("lodash");
    import_link = __toESM(require("next/link"));
    init_block_helpers();
    import_jsx_runtime2 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockEquation.tsx
var BlockEquation_exports = {};
__export(BlockEquation_exports, {
  default: () => BlockEquation,
  mathFontSize: () => mathFontSize
});
function BlockEquation(props) {
  var _a;
  const { block, className } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: (0, import_classnames4.default)(className, "text-center overflow-auto md:overflow-visible"), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react_katex.default,
    {
      className: mathFontSize,
      math: (_a = block == null ? void 0 : block.equation) == null ? void 0 : _a.expression,
      settings: {
        throwOnError: false,
        strict: false
      },
      block: true
    }
  ) });
}
var import_react_katex, import_classnames4, import_jsx_runtime3, mathFontSize;
var init_BlockEquation = __esm({
  "src/notion-blocks/BlockEquation.tsx"() {
    "use client";
    import_react_katex = __toESM(require("@matejmazur/react-katex"));
    import_classnames4 = __toESM(require("classnames"));
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

// src/notion-blocks/BlockRichText.tsx
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BlockText, { richText: props.richText });
  }
}
var import_dynamic, import_jsx_runtime5, DynamicInlineEquation;
var init_BlockRichText = __esm({
  "src/notion-blocks/BlockRichText.tsx"() {
    import_dynamic = __toESM(require("next/dynamic"));
    init_BlockText();
    import_jsx_runtime5 = require("react/jsx-runtime");
    DynamicInlineEquation = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
  }
});

// src/lib/config.ts
var defaultBlurDataURL, defaultCodeLanguage;
var init_config = __esm({
  "src/lib/config.ts"() {
    defaultBlurDataURL = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8XA8AAksBZG7LpHYAAAAASUVORK5CYII=";
    defaultCodeLanguage = "typescript";
  }
});

// src/notion-blocks/BlockImage.tsx
var BlockImage_exports = {};
__export(BlockImage_exports, {
  default: () => BlockImage
});
function BlockImage(props) {
  var _a, _b;
  const [isImageReady, setIsImageReady] = (0, import_react5.useState)(false);
  const { block, className } = props;
  const width = Math.min((0, import_lodash4.get)(block, "imageInfo.width", 1e3), 1e3);
  const height = Math.min((0, import_lodash4.get)(block, "imageInfo.height", 700), 700);
  const blurDataURL = (0, import_lodash4.get)(block, "imageInfo.base64", defaultBlurDataURL);
  const caption = (_a = block == null ? void 0 : block.image) == null ? void 0 : _a.caption;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: (0, import_classnames15.default)(className, "flex flex-col justify-center items-center gap-2"), children: [
    block.imgUrl && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_medium_image_zoom.default, { zoomMargin: 30, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_image.default,
      {
        className: (0, import_classnames15.default)({
          "blur-lg": !isImageReady,
          "blur-0": isImageReady
        }),
        src: block.imgUrl,
        alt: getJoinedRichText((_b = block == null ? void 0 : block.image) == null ? void 0 : _b.caption),
        width,
        height,
        blurDataURL,
        placeholder: "blur",
        onLoadingComplete: () => setIsImageReady(true),
        "data-zoomable": true
      }
    ) }) }),
    caption && caption.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(BlockRichText, { richText }, index)) })
  ] });
}
var import_classnames15, import_lodash4, import_image, import_react5, import_react_medium_image_zoom, import_jsx_runtime16;
var init_BlockImage = __esm({
  "src/notion-blocks/BlockImage.tsx"() {
    "use client";
    import_classnames15 = __toESM(require("classnames"));
    import_lodash4 = require("lodash");
    import_image = __toESM(require("next/image"));
    import_react5 = require("react");
    import_react_medium_image_zoom = __toESM(require("react-medium-image-zoom"));
    init_block_helpers();
    init_config();
    init_BlockRichText();
    import_jsx_runtime16 = require("react/jsx-runtime");
  }
});

// src/components/Mermaid.tsx
var import_mermaid, import_react6, import_jsx_runtime17, Mermaid;
var init_Mermaid = __esm({
  "src/components/Mermaid.tsx"() {
    "use client";
    import_mermaid = __toESM(require("mermaid"));
    import_react6 = __toESM(require("react"));
    import_jsx_runtime17 = require("react/jsx-runtime");
    import_mermaid.default.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose"
    });
    Mermaid = class extends import_react6.default.Component {
      componentDidMount() {
        import_mermaid.default.contentLoaded();
      }
      render() {
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "mermaid flex justify-center", children: this.props.chart });
      }
    };
  }
});

// src/notion-blocks/BlockCode.tsx
var BlockCode_exports = {};
__export(BlockCode_exports, {
  default: () => BlockCode
});
function BlockCode(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const { block, className } = props;
  const language = ((_b = (_a = block == null ? void 0 : block.code) == null ? void 0 : _a.language) == null ? void 0 : _b.toLowerCase()) || defaultCodeLanguage;
  const [copied, setCopied] = (0, import_react8.useState)(false);
  const onSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: (0, import_classnames16.default)(className, "group"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: `language-${formatCodeLang(language)} syntax-highlighter relative`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        import_react_syntax_highlighter.Prism,
        {
          language: formatCodeLang(language),
          style: import_prism.dracula,
          className: "syntax-highlighter-pre text-sm",
          showLineNumbers: true,
          children: getJoinedRichText((_c = block == null ? void 0 : block.code) == null ? void 0 : _c.rich_text)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        import_react7.default,
        {
          content: copied ? "\u0110\xE3 sao ch\xE9p" : "Sao ch\xE9p \u0111o\u1EA1n code",
          arrow: false,
          placement: "top",
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "div",
            {
              className: (0, import_classnames16.default)(
                "absolute right-2 top-2 duration-100 hover:cursor-pointer",
                {
                  "opacity-0": !copied
                },
                "group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                import_react_clipboard.default,
                {
                  "data-clipboard-text": getJoinedRichText((_d = block == null ? void 0 : block.code) == null ? void 0 : _d.rich_text),
                  onSuccess,
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
                    !copied && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_rx2.RxCopy, { className: "text-lg text-slate-200 hover:text-pink-300" }),
                    copied && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_fi.FiCheck, { className: "text-lg text-green-300" })
                  ] })
                }
              )
            }
          )
        }
      )
    ] }),
    ((_e = block == null ? void 0 : block.code) == null ? void 0 : _e.caption) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "italic opacity-60", children: (_g = (_f = block == null ? void 0 : block.code) == null ? void 0 : _f.caption) == null ? void 0 : _g.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(BlockRichText, { richText }, index)) }),
    ((_h = block == null ? void 0 : block.code) == null ? void 0 : _h.language) === "mermaid" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Mermaid, { chart: getJoinedRichText((_i = block == null ? void 0 : block.code) == null ? void 0 : _i.rich_text) })
  ] });
}
var import_react7, import_classnames16, import_react8, import_react_clipboard, import_fi, import_rx2, import_react_syntax_highlighter, import_prism, import_jsx_runtime18, formatCodeLang;
var init_BlockCode = __esm({
  "src/notion-blocks/BlockCode.tsx"() {
    "use client";
    import_react7 = __toESM(require("@tippyjs/react"));
    import_classnames16 = __toESM(require("classnames"));
    import_react8 = require("react");
    import_react_clipboard = __toESM(require("react-clipboard.js"));
    import_fi = require("react-icons/fi");
    import_rx2 = require("react-icons/rx");
    import_react_syntax_highlighter = require("react-syntax-highlighter");
    import_prism = require("react-syntax-highlighter/dist/esm/styles/prism");
    init_Mermaid();
    init_block_helpers();
    init_config();
    init_BlockRichText();
    import_jsx_runtime18 = require("react/jsx-runtime");
    formatCodeLang = (lang) => {
      switch (lang) {
        case "plain text":
          return "plaintext";
        case "objective-c":
          return "objectivec";
        default:
          return lang;
      }
    };
  }
});

// src/notion-blocks/BlockTable.tsx
var BlockTable_exports = {};
__export(BlockTable_exports, {
  default: () => BlockTable
});
function BlockTable(props) {
  var _a, _b, _c, _d;
  const { block, className } = props;
  const bodyRows = (block == null ? void 0 : block.table.has_row_header) ? (_a = block == null ? void 0 : block["children"]) == null ? void 0 : _a.slice(1) : block == null ? void 0 : block["children"];
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: (0, import_classnames17.default)(className, "w-full overflow-auto md:overflow-visible"), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("table", { className: "table-auto", children: [
    ((_b = block == null ? void 0 : block.table) == null ? void 0 : _b.has_row_header) && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("thead", { children: trBlock({
      cells: (_d = (_c = block == null ? void 0 : block["children"]) == null ? void 0 : _c[0].table_row) == null ? void 0 : _d.cells,
      isRowHeader: true,
      key: 0
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tbody", { children: bodyRows == null ? void 0 : bodyRows.map(
      (row, index) => {
        var _a2, _b2;
        return trBlock({
          cells: (_a2 = row.table_row) == null ? void 0 : _a2.cells,
          isRowHeader: false,
          key: index,
          hasColumnHeader: (_b2 = block == null ? void 0 : block.table) == null ? void 0 : _b2.has_column_header
        });
      }
    ) })
  ] }) });
}
function trBlock(options) {
  const { cells, isRowHeader, key, hasColumnHeader } = options;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: cells.map((cell, index, _cells) => {
    if (hasColumnHeader && index === 0) {
      return cellBlock({
        cell,
        key: index,
        isHeader: true,
        headerType: "column"
        // hideBorder: index + 1 === cells.length
      });
    } else {
      return cellBlock({
        cell,
        key: index,
        isHeader: isRowHeader,
        headerType: "row"
        // hideBorder: index + 1 === cells.length
      });
    }
  }) }, key);
}
function cellBlock(options) {
  const { cell, isHeader, key, headerType, hideBorder } = options;
  const cellClass = { "px-4 py-2": true, "border border-slate-300": !hideBorder };
  if (isHeader) {
    const headerClass = {
      "bg-sky-100": headerType === "row",
      "bg-gray-100": headerType === "column"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("th", { className: (0, import_classnames17.default)(cellClass, headerClass), children: cell.map((richText, index2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(BlockRichText, { richText }, index2)) }, key);
  } else {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { className: (0, import_classnames17.default)(cellClass), children: cell.map((richText, index2) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(BlockRichText, { richText }, index2)) }, key);
  }
}
var import_classnames17, import_jsx_runtime19;
var init_BlockTable = __esm({
  "src/notion-blocks/BlockTable.tsx"() {
    import_classnames17 = __toESM(require("classnames"));
    init_BlockRichText();
    import_jsx_runtime19 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockVideo.tsx
var BlockVideo_exports = {};
__export(BlockVideo_exports, {
  default: () => BlockVideo
});
function BlockVideo(props) {
  const videoUrl = (0, import_lodash5.get)(props.block, "video.external.url");
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId)
    return null;
  const caption = (0, import_lodash5.get)(props.block, "video.caption");
  const title = caption ? getJoinedRichText(caption) : "";
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: (0, import_classnames18.default)(props.className, "flex flex-col justify-center items-center gap-2"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_youtube.default, { videoId, title, className: "aspect-video w-full" }) }),
    caption && caption.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(BlockRichText, { richText }, index)) })
  ] });
}
var import_classnames18, import_lodash5, import_react_youtube, import_jsx_runtime20;
var init_BlockVideo = __esm({
  "src/notion-blocks/BlockVideo.tsx"() {
    "use client";
    import_classnames18 = __toESM(require("classnames"));
    import_lodash5 = require("lodash");
    import_react_youtube = __toESM(require("react-youtube"));
    init_block_helpers();
    init_BlockRichText();
    import_jsx_runtime20 = require("react/jsx-runtime");
  }
});

// src/components/BlockRender.tsx
var BlockRender_exports = {};
__export(BlockRender_exports, {
  default: () => BlockRender
});
module.exports = __toCommonJS(BlockRender_exports);
var import_classnames19 = __toESM(require("classnames"));
var import_lodash6 = require("lodash");
var import_dynamic2 = __toESM(require("next/dynamic"));
init_block_helpers();

// src/notion-blocks/BlockBookmark.tsx
var import_classnames2 = __toESM(require("classnames"));
var import_jsx_runtime = require("react/jsx-runtime");
function BlockBookmark(props) {
  const data = props.block.bookmark;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "a",
    {
      className: (0, import_classnames2.default)(
        "flex w-full overflow-hidden rounded-md border border-slate-200 p-3",
        "hover:cursor-pointer hover:border-sky-300 hover:shadow-sm"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-[4_1_180px] flex-col justify-between gap-4 overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "truncate font-normal", children: data.title }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "truncate text-sm font-normal text-slate-600", children: data.description })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative h-4 w-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "h-full w-full", src: data.favicon, alt: data.title }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm font-normal text-slate-500", children: data.url })
          ] })
        ] }),
        data.imageSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative hidden flex-[1_1_100px] sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "h-full w-full", src: data.imageSrc, alt: data.title }) })
      ]
    }
  ) });
}

// src/notion-blocks/BlockBulletedListItem.tsx
var import_classnames5 = __toESM(require("classnames"));
var import_go = require("react-icons/go");
var import_rx = require("react-icons/rx");
init_BlockRichText();
var import_jsx_runtime6 = require("react/jsx-runtime");
function BlockBulletedListItem(props) {
  var _a;
  const { block, className, children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: (0, import_classnames5.default)(className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-start gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex items-center justify-center", children: bulletType(block["list_item"]) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "block", children: (_a = block == null ? void 0 : block.bulleted_list_item) == null ? void 0 : _a.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BlockRichText, { richText }, index)) })
    ] }),
    children
  ] });
}
function bulletType(level) {
  switch (level) {
    case "1":
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_rx.RxDotFilled, { className: "mt-0.5 text-xl text-slate-600" });
    case "2":
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_rx.RxDot, { className: "mt-1 text-lg" });
    case "3":
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_go.GoSquareFill, { className: "mr-1 mt-1.5 text-xs" });
  }
}

// src/notion-blocks/BlockCallout.tsx
var import_classnames6 = __toESM(require("classnames"));
var import_lodash2 = require("lodash");
init_block_helpers();
init_BlockRichText();
var import_jsx_runtime7 = require("react/jsx-runtime");
function BlockCallout(props) {
  var _a, _b;
  const { block, children, className } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: (0, import_classnames6.default)(className), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: (0, import_classnames6.default)("flex rounded-md", mapColorClass((_a = block == null ? void 0 : block.callout) == null ? void 0 : _a.color)), children: [
    (0, import_lodash2.get)(block, "callout.icon.emoji") && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-2xl pl-4 pr-2 py-3", children: (0, import_lodash2.get)(block, "callout.icon.emoji") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "py-4 pl-2 pr-4 w-full", children: [
      (_b = block == null ? void 0 : block.callout) == null ? void 0 : _b.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BlockRichText, { richText }, index)),
      !!children && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "-ml-4 pt-3 m2it-inside-box", children })
    ] })
  ] }) });
}

// src/notion-blocks/BlockColumnList.tsx
var import_classnames7 = __toESM(require("classnames"));
var import_jsx_runtime8 = require("react/jsx-runtime");
function BlockColumnList(props) {
  const { block, className } = props;
  const children = block["children"];
  if ((children == null ? void 0 : children.length) === 0)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: (0, import_classnames7.default)("w-full grid gap-3", parseColumnClasses(children.length), className), children: children.map((col, index1) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: (0, import_classnames7.default)("w-full flex flex-col"), children: col["children"].map((child, index2) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(BlockRender, { block: child, level: 0 }, index2)) }, index1);
  }) });
}
function parseColumnClasses(numCols) {
  switch (numCols) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-1 md:grid-cols-2";
    case 3:
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    case 4:
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    default:
      return "grid-cols-1";
  }
}

// src/notion-blocks/BlockHeading.tsx
var import_classnames9 = __toESM(require("classnames"));
var import_lodash3 = require("lodash");
var import_react3 = require("react");
init_block_helpers();

// src/lib/context.ts
var import_react = require("react");
var defaultBlockOptionContext = {
  disableAnchorHeading: false
};
var BlockOptionContext = (0, import_react.createContext)(defaultBlockOptionContext);

// src/notion-blocks/BlockHeadingToggle.tsx
var import_react2 = require("@headlessui/react");
var import_classnames8 = __toESM(require("classnames"));
var import_bs = require("react-icons/bs");
var import_jsx_runtime9 = require("react/jsx-runtime");
function BlockHeadingToggle(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react2.Disclosure, { defaultOpen: false, children: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex w-full items-center py-1 ml-[-10px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react2.Disclosure.Button, { className: "rounded-md p-1 hover:bg-[#99989824]", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_bs.BsFillCaretRightFill,
        {
          className: (0, import_classnames8.default)("transform ease-in-out transition-all duration-[400ms] text-lg", {
            "rotate-90": open,
            "rotate-0": !open
          })
        }
      ) }),
      props.headingElement
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react2.Disclosure.Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: props.children }) })
  ] }) });
}

// src/notion-blocks/BlockHeading.tsx
init_BlockRichText();
var import_jsx_runtime10 = require("react/jsx-runtime");
function BlockHeading(props) {
  var _a;
  const ctx = (0, import_react3.useContext)(BlockOptionContext);
  const { type, block, className, children } = props;
  let heading;
  let headingElement;
  let anchorElement;
  const h1Size = "text-3xl";
  const h2Size = "text-2xl";
  const h3Size = "text-xl";
  const headingClass = "scroll-mt-[70px] mt-0";
  const id = convertHeadingIdToSlug(block.id, (_a = block[`${block.type}`]) == null ? void 0 : _a.rich_text);
  switch (type) {
    case "h1":
      heading = block == null ? void 0 : block.heading_1;
      headingElement = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { id, className: (0, import_classnames9.default)(h1Size, headingClass), children: insideHeading(heading) });
      anchorElement = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: `#${id}`, className: (0, import_classnames9.default)("text-sky-600 lg:-ml-6", h1Size), children: "#" });
      break;
    case "h2":
      heading = block == null ? void 0 : block.heading_2;
      headingElement = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { id, className: (0, import_classnames9.default)(h2Size, headingClass), children: insideHeading(heading) });
      anchorElement = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: `#${id}`, className: (0, import_classnames9.default)("text-sky-600 lg:-ml-6", h2Size), children: "#" });
      break;
    case "h3":
      heading = block == null ? void 0 : block.heading_3;
      headingElement = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { id, className: (0, import_classnames9.default)(h3Size, headingClass), children: insideHeading(heading) });
      anchorElement = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: `#${id}`, className: (0, import_classnames9.default)("text-orange-700 lg:-ml-8", h3Size), children: "##" });
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: props.outerClassName, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      className: (0, import_classnames9.default)(mapColorClass(heading == null ? void 0 : heading.color), className, {
        "flex items-start gap-2": !(0, import_lodash3.get)(heading, "is_toggleable") && !ctx.disableAnchorHeading
      }),
      children: [
        (0, import_lodash3.get)(heading, "is_toggleable") && children && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BlockHeadingToggle, { headingElement, children }),
        !(0, import_lodash3.get)(heading, "is_toggleable") && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
          !ctx.disableAnchorHeading && anchorElement,
          headingElement
        ] })
      ]
    }
  ) });
}
function insideHeading(heading) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: heading == null ? void 0 : heading.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BlockRichText, { richText }, index)) });
}

// src/notion-blocks/BlockNumberedListItem.tsx
var import_classnames10 = __toESM(require("classnames"));
init_BlockRichText();
var import_jsx_runtime11 = require("react/jsx-runtime");
function BlockNumberedListItem(props) {
  var _a;
  const { block, className, children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: (0, import_classnames10.default)(className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-baseline gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex items-center justify-center", children: block["list_item"] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "block", children: (_a = block == null ? void 0 : block.numbered_list_item) == null ? void 0 : _a.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BlockRichText, { richText }, index)) })
    ] }),
    children
  ] });
}

// src/notion-blocks/BlockParagraph.tsx
var import_classnames11 = __toESM(require("classnames"));
init_block_helpers();
init_BlockRichText();
var import_jsx_runtime12 = (
  // We don't use <p> here because there may be other not-supported tags in the <p> tag.
  require("react/jsx-runtime")
);
function BlockParagraph(props) {
  var _a, _b;
  const { block, children, className } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: (0, import_classnames11.default)(mapColorClass((_a = block == null ? void 0 : block.paragraph) == null ? void 0 : _a.color), className), children: [
    (_b = block == null ? void 0 : block.paragraph) == null ? void 0 : _b.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BlockRichText, { richText }, index)),
    children
  ] });
}

// src/notion-blocks/BlockQuote.tsx
var import_classnames12 = __toESM(require("classnames"));
init_block_helpers();
init_BlockRichText();
var import_jsx_runtime13 = require("react/jsx-runtime");
function BlockQuote(props) {
  var _a, _b;
  const { block, children, className } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: (0, import_classnames12.default)(className), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      className: (0, import_classnames12.default)(
        mapColorClass((_a = block == null ? void 0 : block.quote) == null ? void 0 : _a.color),
        "border border-y-0 border-r-0 border-l-4 border-slate-500"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: (0, import_classnames12.default)("py-1 pl-4"), children: (_b = block == null ? void 0 : block.quote) == null ? void 0 : _b.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BlockRichText, { richText }, index)) }),
        children
      ]
    }
  ) });
}

// src/notion-blocks/BlockToDo.tsx
var import_classnames13 = __toESM(require("classnames"));
var import_bs2 = require("react-icons/bs");
init_BlockRichText();
var import_jsx_runtime14 = require("react/jsx-runtime");
function BlockToDo(props) {
  var _a, _b, _c;
  const { block, className, children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: (0, import_classnames13.default)(className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-2", children: [
      ((_a = block == null ? void 0 : block.to_do) == null ? void 0 : _a.checked) && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_bs2.BsCheckSquare, {}),
      !((_b = block == null ? void 0 : block.to_do) == null ? void 0 : _b.checked) && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_bs2.BsSquare, {}),
      (_c = block == null ? void 0 : block.to_do) == null ? void 0 : _c.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(BlockRichText, { richText }, index))
    ] }),
    children
  ] });
}

// src/notion-blocks/BlockToggle.tsx
var import_react4 = require("@headlessui/react");
var import_classnames14 = __toESM(require("classnames"));
var import_bs3 = require("react-icons/bs");
init_block_helpers();
init_BlockRichText();
var import_jsx_runtime15 = require("react/jsx-runtime");
function BlockToggle(props) {
  var _a;
  const { block, children, className } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    {
      className: (0, import_classnames14.default)(
        mapColorClass((_a = block == null ? void 0 : block.toggle) == null ? void 0 : _a.color),
        "rounded-md border-[0.5px] border-slate-200",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react4.Disclosure, { defaultOpen: false, children: ({ open }) => {
        var _a2;
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            import_react4.Disclosure.Button,
            {
              className: (0, import_classnames14.default)("flex gap-2 w-full items-start p-2 rounded-md", {
                "bg-gray-100 hover:bg-gray-200": open,
                "bg-gray-50 hover:bg-gray-100": !open
              }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                  import_bs3.BsFillCaretRightFill,
                  {
                    className: (0, import_classnames14.default)(
                      "text-base transform ease-in-out transition-all duration-[400ms] mt-[4px]",
                      {
                        "rotate-90": open,
                        "rotate-0": !open
                      }
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "text-start", children: (_a2 = block == null ? void 0 : block.toggle) == null ? void 0 : _a2.rich_text.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BlockRichText, { richText }, index)) })
              ]
            }
          ),
          !!children && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react4.Disclosure.Panel, { className: "rounded-b-md py-4 pr-4 m2it-inside-box", children })
        ] });
      } })
    }
  );
}

// src/components/BlockRender.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var DynamicImage = (0, import_dynamic2.default)(() => Promise.resolve().then(() => (init_BlockImage(), BlockImage_exports)));
var DynamicCode = (0, import_dynamic2.default)(() => Promise.resolve().then(() => (init_BlockCode(), BlockCode_exports)));
var DynamicEquation = (0, import_dynamic2.default)(() => Promise.resolve().then(() => (init_BlockEquation(), BlockEquation_exports)));
var DynamicTable = (0, import_dynamic2.default)(() => Promise.resolve().then(() => (init_BlockTable(), BlockTable_exports)));
var DynamicVideo = (0, import_dynamic2.default)(() => Promise.resolve().then(() => (init_BlockVideo(), BlockVideo_exports)));
function BlockRender(props) {
  var _a;
  const { block, level } = props;
  let children;
  const isList = block.type === "bulleted_list_item" || block.type === "numbered_list_item";
  if (block.has_children) {
    children = (_a = (0, import_lodash6.get)(block, "children", [])) == null ? void 0 : _a.map((childBlock) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      BlockRender,
      {
        block: childBlock,
        level: block.type === "synced_block" ? level : level + 1,
        isInsideList: isList
      },
      childBlock.id
    ));
  }
  const basicBlockGap = (0, import_classnames19.default)(getIndentLevelClass(level, isList, props.isInsideList));
  const basicBlockGapHeading = "mt-6";
  switch (block.type) {
    case "synced_block":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children });
    case "divider":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("hr", { className: basicBlockGap });
    case "paragraph":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BlockParagraph, { block, className: (0, import_classnames19.default)(basicBlockGap), children });
    case "numbered_list_item":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        BlockNumberedListItem,
        {
          block,
          className: (0, import_classnames19.default)(basicBlockGap),
          children
        }
      );
    case "bulleted_list_item":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        BlockBulletedListItem,
        {
          block,
          className: (0, import_classnames19.default)(basicBlockGap),
          children
        }
      );
    case "to_do":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BlockToDo, { block, className: (0, import_classnames19.default)(basicBlockGap), children });
    case "heading_1":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        BlockHeading,
        {
          type: "h1",
          block,
          outerClassName: getIndentLevelClass(level, false, props.isInsideList),
          className: (0, import_classnames19.default)(basicBlockGap, basicBlockGapHeading),
          children
        }
      );
    case "heading_2":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        BlockHeading,
        {
          type: "h2",
          block,
          outerClassName: getIndentLevelClass(level, false, props.isInsideList),
          className: (0, import_classnames19.default)(basicBlockGap, basicBlockGapHeading),
          children
        }
      );
    case "heading_3":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        BlockHeading,
        {
          type: "h3",
          block,
          outerClassName: getIndentLevelClass(level, false, props.isInsideList),
          className: (0, import_classnames19.default)(basicBlockGap, basicBlockGapHeading),
          children
        }
      );
    case "quote":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BlockQuote, { block, className: (0, import_classnames19.default)(basicBlockGap), children });
    case "code":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DynamicCode, { block, className: (0, import_classnames19.default)(basicBlockGap) });
    case "equation":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DynamicEquation, { block, className: (0, import_classnames19.default)(basicBlockGap) });
    case "column_list":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BlockColumnList, { block, className: (0, import_classnames19.default)(basicBlockGap) });
    case "table":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DynamicTable, { block, className: (0, import_classnames19.default)(basicBlockGap) });
    case "toggle":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BlockToggle, { block, className: (0, import_classnames19.default)(basicBlockGap), children });
    case "callout":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BlockCallout, { block, className: (0, import_classnames19.default)(basicBlockGap), children });
    case "image":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DynamicImage, { block, className: (0, import_classnames19.default)(basicBlockGap) });
    case "video":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DynamicVideo, { block, className: (0, import_classnames19.default)(basicBlockGap) });
    case "bookmark":
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        BlockBookmark,
        {
          block,
          className: (0, import_classnames19.default)(basicBlockGap)
        }
      );
    default:
      return null;
  }
}
//# sourceMappingURL=BlockRender.js.map