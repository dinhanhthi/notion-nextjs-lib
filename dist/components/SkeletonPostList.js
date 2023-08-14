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

// src/notion-blocks/BlockBookmark.tsx
var import_classnames2, import_jsx_runtime2;
var init_BlockBookmark = __esm({
  "src/notion-blocks/BlockBookmark.tsx"() {
    "use client";
    import_classnames2 = __toESM(require("classnames"));
    import_jsx_runtime2 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockBulletedListItem.tsx
var import_classnames3, import_go, import_rx, import_jsx_runtime3;
var init_BlockBulletedListItem = __esm({
  "src/notion-blocks/BlockBulletedListItem.tsx"() {
    import_classnames3 = __toESM(require("classnames"));
    import_go = require("react-icons/go");
    import_rx = require("react-icons/rx");
    init_BlockRichText();
    import_jsx_runtime3 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockCallout.tsx
var import_classnames4, import_lodash, import_jsx_runtime4;
var init_BlockCallout = __esm({
  "src/notion-blocks/BlockCallout.tsx"() {
    import_classnames4 = __toESM(require("classnames"));
    import_lodash = require("lodash");
    init_block_helpers();
    init_BlockRichText();
    import_jsx_runtime4 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockColumnList.tsx
var import_classnames5, import_jsx_runtime5;
var init_BlockColumnList = __esm({
  "src/notion-blocks/BlockColumnList.tsx"() {
    import_classnames5 = __toESM(require("classnames"));
    init_BlockRender();
    import_jsx_runtime5 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockHeadingToggle.tsx
var import_react, import_classnames6, import_bs, import_jsx_runtime6;
var init_BlockHeadingToggle = __esm({
  "src/notion-blocks/BlockHeadingToggle.tsx"() {
    "use client";
    import_react = require("@headlessui/react");
    import_classnames6 = __toESM(require("classnames"));
    import_bs = require("react-icons/bs");
    import_jsx_runtime6 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockHeading.tsx
var import_classnames7, import_lodash2, import_react2, import_jsx_runtime7;
var init_BlockHeading = __esm({
  "src/notion-blocks/BlockHeading.tsx"() {
    "use client";
    import_classnames7 = __toESM(require("classnames"));
    import_lodash2 = require("lodash");
    import_react2 = require("react");
    init_BlockRender();
    init_block_helpers();
    init_BlockHeadingToggle();
    init_BlockRichText();
    import_jsx_runtime7 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockNumberedListItem.tsx
var import_classnames8, import_jsx_runtime8;
var init_BlockNumberedListItem = __esm({
  "src/notion-blocks/BlockNumberedListItem.tsx"() {
    import_classnames8 = __toESM(require("classnames"));
    init_BlockRichText();
    import_jsx_runtime8 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockParagraph.tsx
var import_classnames9, import_jsx_runtime9;
var init_BlockParagraph = __esm({
  "src/notion-blocks/BlockParagraph.tsx"() {
    import_classnames9 = __toESM(require("classnames"));
    init_block_helpers();
    init_BlockRichText();
    // We don't use <p> here because there may be other not-supported tags in the <p> tag.
    import_jsx_runtime9 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockQuote.tsx
var import_classnames10, import_jsx_runtime10;
var init_BlockQuote = __esm({
  "src/notion-blocks/BlockQuote.tsx"() {
    import_classnames10 = __toESM(require("classnames"));
    init_block_helpers();
    init_BlockRichText();
    import_jsx_runtime10 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockToDo.tsx
var import_classnames11, import_bs2, import_jsx_runtime11;
var init_BlockToDo = __esm({
  "src/notion-blocks/BlockToDo.tsx"() {
    import_classnames11 = __toESM(require("classnames"));
    import_bs2 = require("react-icons/bs");
    init_BlockRichText();
    import_jsx_runtime11 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockToggle.tsx
var import_react3, import_classnames12, import_bs3, import_jsx_runtime12;
var init_BlockToggle = __esm({
  "src/notion-blocks/BlockToggle.tsx"() {
    "use client";
    import_react3 = require("@headlessui/react");
    import_classnames12 = __toESM(require("classnames"));
    import_bs3 = require("react-icons/bs");
    init_block_helpers();
    init_BlockRichText();
    import_jsx_runtime12 = require("react/jsx-runtime");
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
  const [isImageReady, setIsImageReady] = (0, import_react4.useState)(false);
  const { block, className } = props;
  const width = Math.min((0, import_lodash3.get)(block, "imageInfo.width", 1e3), 1e3);
  const height = Math.min((0, import_lodash3.get)(block, "imageInfo.height", 700), 700);
  const blurDataURL = (0, import_lodash3.get)(block, "imageInfo.base64", defaultBlurDataURL);
  const caption = (_a = block == null ? void 0 : block.image) == null ? void 0 : _a.caption;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: (0, import_classnames13.default)(className, "flex flex-col justify-center items-center gap-2"), children: [
    block.imgUrl && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_medium_image_zoom.default, { zoomMargin: 30, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      import_image.default,
      {
        className: (0, import_classnames13.default)({
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
    caption && caption.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BlockRichText, { richText }, index)) })
  ] });
}
var import_classnames13, import_lodash3, import_image, import_react4, import_react_medium_image_zoom, import_jsx_runtime13;
var init_BlockImage = __esm({
  "src/notion-blocks/BlockImage.tsx"() {
    "use client";
    import_classnames13 = __toESM(require("classnames"));
    import_lodash3 = require("lodash");
    import_image = __toESM(require("next/image"));
    import_react4 = require("react");
    import_react_medium_image_zoom = __toESM(require("react-medium-image-zoom"));
    init_block_helpers();
    init_config();
    init_BlockRichText();
    import_jsx_runtime13 = require("react/jsx-runtime");
  }
});

// src/components/Mermaid.tsx
var import_mermaid, import_react5, import_jsx_runtime14, Mermaid;
var init_Mermaid = __esm({
  "src/components/Mermaid.tsx"() {
    "use client";
    import_mermaid = __toESM(require("mermaid"));
    import_react5 = __toESM(require("react"));
    import_jsx_runtime14 = require("react/jsx-runtime");
    import_mermaid.default.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose"
    });
    Mermaid = class extends import_react5.default.Component {
      componentDidMount() {
        import_mermaid.default.contentLoaded();
      }
      render() {
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mermaid flex justify-center", children: this.props.chart });
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
  const [copied, setCopied] = (0, import_react7.useState)(false);
  const onSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: (0, import_classnames14.default)(className, "group"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: `language-${formatCodeLang(language)} syntax-highlighter relative`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_react_syntax_highlighter.Prism,
        {
          language: formatCodeLang(language),
          style: import_prism.dracula,
          className: "syntax-highlighter-pre text-sm",
          showLineNumbers: true,
          children: getJoinedRichText((_c = block == null ? void 0 : block.code) == null ? void 0 : _c.rich_text)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_react6.default,
        {
          content: copied ? "\u0110\xE3 sao ch\xE9p" : "Sao ch\xE9p \u0111o\u1EA1n code",
          arrow: false,
          placement: "top",
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "div",
            {
              className: (0, import_classnames14.default)(
                "absolute right-2 top-2 duration-100 hover:cursor-pointer",
                {
                  "opacity-0": !copied
                },
                "group-hover:opacity-100"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                import_react_clipboard.default,
                {
                  "data-clipboard-text": getJoinedRichText((_d = block == null ? void 0 : block.code) == null ? void 0 : _d.rich_text),
                  onSuccess,
                  children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
                    !copied && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_rx2.RxCopy, { className: "text-lg text-slate-200 hover:text-pink-300" }),
                    copied && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_fi.FiCheck, { className: "text-lg text-green-300" })
                  ] })
                }
              )
            }
          )
        }
      )
    ] }),
    ((_e = block == null ? void 0 : block.code) == null ? void 0 : _e.caption) && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "italic opacity-60", children: (_g = (_f = block == null ? void 0 : block.code) == null ? void 0 : _f.caption) == null ? void 0 : _g.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BlockRichText, { richText }, index)) }),
    ((_h = block == null ? void 0 : block.code) == null ? void 0 : _h.language) === "mermaid" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Mermaid, { chart: getJoinedRichText((_i = block == null ? void 0 : block.code) == null ? void 0 : _i.rich_text) })
  ] });
}
var import_react6, import_classnames14, import_react7, import_react_clipboard, import_fi, import_rx2, import_react_syntax_highlighter, import_prism, import_jsx_runtime15, formatCodeLang;
var init_BlockCode = __esm({
  "src/notion-blocks/BlockCode.tsx"() {
    "use client";
    import_react6 = __toESM(require("@tippyjs/react"));
    import_classnames14 = __toESM(require("classnames"));
    import_react7 = require("react");
    import_react_clipboard = __toESM(require("react-clipboard.js"));
    import_fi = require("react-icons/fi");
    import_rx2 = require("react-icons/rx");
    import_react_syntax_highlighter = require("react-syntax-highlighter");
    import_prism = require("react-syntax-highlighter/dist/esm/styles/prism");
    init_Mermaid();
    init_block_helpers();
    init_config();
    init_BlockRichText();
    import_jsx_runtime15 = require("react/jsx-runtime");
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

// src/notion-blocks/BlockEquation.tsx
var BlockEquation_exports = {};
__export(BlockEquation_exports, {
  default: () => BlockEquation,
  mathFontSize: () => mathFontSize
});
function BlockEquation(props) {
  var _a;
  const { block, className } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: (0, import_classnames15.default)(className, "text-center overflow-auto md:overflow-visible"), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_react_katex, import_classnames15, import_jsx_runtime16, mathFontSize;
var init_BlockEquation = __esm({
  "src/notion-blocks/BlockEquation.tsx"() {
    "use client";
    import_react_katex = __toESM(require("@matejmazur/react-katex"));
    import_classnames15 = __toESM(require("classnames"));
    import_jsx_runtime16 = require("react/jsx-runtime");
    mathFontSize = "text-base";
  }
});

// src/notion-blocks/BlockTable.tsx
var BlockTable_exports = {};
__export(BlockTable_exports, {
  default: () => BlockTable
});
function BlockTable(props) {
  var _a, _b, _c, _d, _e;
  const { block, className } = props;
  const bodyRows = (block == null ? void 0 : block.table.has_row_header) ? (_a = block == null ? void 0 : block["children"]) == null ? void 0 : _a.slice(1) : block == null ? void 0 : block["children"];
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: (0, import_classnames16.default)(className, "w-full overflow-auto md:overflow-visible"), children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("table", { className: "table-auto", children: [
    ((_b = block == null ? void 0 : block.table) == null ? void 0 : _b.has_row_header) && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", { children: trBlock({
      cells: (_e = (_d = (_c = block == null ? void 0 : block["children"]) == null ? void 0 : _c[0]) == null ? void 0 : _d.table_row) == null ? void 0 : _e.cells,
      isRowHeader: true,
      key: 0
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { children: bodyRows == null ? void 0 : bodyRows.map(
      (row, index) => {
        var _a2, _b2;
        return trBlock({
          cells: (_a2 = row == null ? void 0 : row.table_row) == null ? void 0 : _a2.cells,
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
  if (!cells)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", { children: cells.map((cell, index, _cells) => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { className: (0, import_classnames16.default)(cellClass, headerClass), children: cell.map((richText, index2) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BlockRichText, { richText }, index2)) }, key);
  } else {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { className: (0, import_classnames16.default)(cellClass), children: cell.map((richText, index2) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BlockRichText, { richText }, index2)) }, key);
  }
}
var import_classnames16, import_jsx_runtime17;
var init_BlockTable = __esm({
  "src/notion-blocks/BlockTable.tsx"() {
    import_classnames16 = __toESM(require("classnames"));
    init_BlockRichText();
    import_jsx_runtime17 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockVideo.tsx
var BlockVideo_exports = {};
__export(BlockVideo_exports, {
  default: () => BlockVideo
});
function BlockVideo(props) {
  const videoUrl = (0, import_lodash4.get)(props.block, "video.external.url");
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId)
    return null;
  const caption = (0, import_lodash4.get)(props.block, "video.caption");
  const title = caption ? getJoinedRichText(caption) : "";
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: (0, import_classnames17.default)(props.className, "flex flex-col justify-center items-center gap-2"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_youtube.default, { videoId, title, className: "aspect-video w-full" }) }),
    caption && caption.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(BlockRichText, { richText }, index)) })
  ] });
}
var import_classnames17, import_lodash4, import_react_youtube, import_jsx_runtime18;
var init_BlockVideo = __esm({
  "src/notion-blocks/BlockVideo.tsx"() {
    "use client";
    import_classnames17 = __toESM(require("classnames"));
    import_lodash4 = require("lodash");
    import_react_youtube = __toESM(require("react-youtube"));
    init_block_helpers();
    init_BlockRichText();
    import_jsx_runtime18 = require("react/jsx-runtime");
  }
});

// src/components/Renderer.tsx
var import_classnames18, import_lodash5, import_dynamic, import_jsx_runtime19, DynamicImage, DynamicCode, DynamicEquation, DynamicTable, DynamicVideo;
var init_Renderer = __esm({
  "src/components/Renderer.tsx"() {
    "use client";
    import_classnames18 = __toESM(require("classnames"));
    import_lodash5 = require("lodash");
    import_dynamic = __toESM(require("next/dynamic"));
    init_block_helpers();
    init_BlockBookmark();
    init_BlockBulletedListItem();
    init_BlockCallout();
    init_BlockColumnList();
    init_BlockHeading();
    init_BlockNumberedListItem();
    init_BlockParagraph();
    init_BlockQuote();
    init_BlockToDo();
    init_BlockToggle();
    import_jsx_runtime19 = require("react/jsx-runtime");
    DynamicImage = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockImage(), BlockImage_exports)));
    DynamicCode = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockCode(), BlockCode_exports)));
    DynamicEquation = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockEquation(), BlockEquation_exports)));
    DynamicTable = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockTable(), BlockTable_exports)));
    DynamicVideo = (0, import_dynamic.default)(() => Promise.resolve().then(() => (init_BlockVideo(), BlockVideo_exports)));
  }
});

// src/components/BlockRender.tsx
var import_react8, import_jsx_runtime20, defaultBlockOptionContext, BlockOptionContext;
var init_BlockRender = __esm({
  "src/components/BlockRender.tsx"() {
    "use client";
    import_react8 = require("react");
    init_Renderer();
    import_jsx_runtime20 = require("react/jsx-runtime");
    defaultBlockOptionContext = {
      disableAnchorHeading: false,
      siteDomain: "dinhanhthi.com"
    };
    BlockOptionContext = (0, import_react8.createContext)(defaultBlockOptionContext);
  }
});

// src/notion-blocks/BlockText.tsx
function BlockText(props) {
  var _a, _b, _c, _d;
  const ctx = (0, import_react9.useContext)(BlockOptionContext);
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !((_a = props.ignore) == null ? void 0 : _a.includes("hyperlink")) && props.richText.href) {
    if (props.richText.href.includes(ctx == null ? void 0 : ctx.siteDomain) && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href);
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "a",
        {
          className: (0, import_classnames19.default)(
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
  if (!((_b = props.ignore) == null ? void 0 : _b.includes("hyperlink")) && props.richText.type === "mention" && ((_c = props.richText.mention) == null ? void 0 : _c.type) === "page" && (0, import_lodash6.get)(props.richText, "mention.page.uri")) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      import_link.default,
      {
        className: generateTextAnnotationClasses(
          props.richText.annotations,
          props.ignore
        ),
        href: (0, import_lodash6.get)(props.richText, "mention.page.uri", "/"),
        children: props.richText.plain_text
      }
    );
  }
  if (props.richText.type === "mention" && ((_d = props.richText.mention) == null ? void 0 : _d.type) === "date") {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_classnames19, import_lodash6, import_link, import_react9, import_jsx_runtime21;
var init_BlockText = __esm({
  "src/notion-blocks/BlockText.tsx"() {
    import_classnames19 = __toESM(require("classnames"));
    import_lodash6 = require("lodash");
    import_link = __toESM(require("next/link"));
    import_react9 = require("react");
    init_BlockRender();
    init_block_helpers();
    import_jsx_runtime21 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockInlineEquation.tsx
var BlockInlineEquation_exports = {};
__export(BlockInlineEquation_exports, {
  default: () => BlockInlineEquation
});
function BlockInlineEquation(props) {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
var import_react_katex2, import_jsx_runtime22;
var init_BlockInlineEquation = __esm({
  "src/notion-blocks/BlockInlineEquation.tsx"() {
    "use client";
    import_react_katex2 = __toESM(require("@matejmazur/react-katex"));
    init_block_helpers();
    init_BlockEquation();
    import_jsx_runtime22 = require("react/jsx-runtime");
  }
});

// src/notion-blocks/BlockRichText.tsx
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(BlockText, { richText: props.richText });
  }
}
var import_dynamic2, import_jsx_runtime23, DynamicInlineEquation;
var init_BlockRichText = __esm({
  "src/notion-blocks/BlockRichText.tsx"() {
    import_dynamic2 = __toESM(require("next/dynamic"));
    init_BlockText();
    import_jsx_runtime23 = require("react/jsx-runtime");
    DynamicInlineEquation = (0, import_dynamic2.default)(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
  }
});

// src/components/SkeletonPostList.tsx
var SkeletonPostList_exports = {};
__export(SkeletonPostList_exports, {
  default: () => SkeletonPostList
});
module.exports = __toCommonJS(SkeletonPostList_exports);
var import_classnames28 = __toESM(require("classnames"));

// src/post-types/PostCardWhiteBgBig.tsx
var import_classnames21 = __toESM(require("classnames"));
var import_link2 = __toESM(require("next/link"));

// src/components/Date.tsx
var import_moment = __toESM(require("moment"));
var import_jsx_runtime = require("react/jsx-runtime");

// src/components/Excerpt.tsx
init_BlockRichText();
var import_jsx_runtime24 = require("react/jsx-runtime");

// src/components/PostFeaturedImage.tsx
var import_classnames20 = __toESM(require("classnames"));

// src/components/ImageComponent.tsx
var import_image2 = __toESM(require("next/image"));
var import_jsx_runtime25 = require("react/jsx-runtime");

// src/components/PostFeaturedImage.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");

// src/post-types/PostCardWhiteBgBig.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var CWBBHeightClass = "h-36";

// src/post-types/PostImageBackground.tsx
var import_classnames22 = __toESM(require("classnames"));
var import_link3 = __toESM(require("next/link"));
var import_jsx_runtime28 = require("react/jsx-runtime");
var PIBHeightClass = "h-36";

// src/post-types/PostTitleCateDate.tsx
var import_classnames23 = __toESM(require("classnames"));
var import_link4 = __toESM(require("next/link"));
var import_io5 = require("react-icons/io5");
var import_jsx_runtime29 = require("react/jsx-runtime");
var TCDFIHeightClass = "h-28";

// src/components/Carousel.tsx
var import_classnames24 = __toESM(require("classnames"));
var import_fa = require("react-icons/fa");
var import_react_snap_carousel = require("react-snap-carousel");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = (0, import_react_snap_carousel.useSnapCarousel)();
  const arrowBtnClasses = (0, import_classnames24.default)(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = (0, import_classnames24.default)(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      {
        ref: scrollRef,
        className: (0, import_classnames24.default)("no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4"),
        children: items.map(
          (item, i) => renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i
          })
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "button",
      {
        onClick: () => prev(),
        className: (0, import_classnames24.default)("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_fa.FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "button",
      {
        onClick: () => next(),
        className: (0, import_classnames24.default)("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_fa.FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "button",
      {
        className: (0, import_classnames24.default)("h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60", {
          "opacity-40 w-2.5 hover:w-3.5": activePageIndex !== i,
          "w-5 opacity-70": activePageIndex === i
        }),
        onClick: () => goTo(i)
      },
      i
    )) })
  ] });
};
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  "div",
  {
    className: (0, import_classnames24.default)(
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
var import_classnames27 = __toESM(require("classnames"));
var import_react10 = __toESM(require("react"));

// src/post-types/PostCardWave.tsx
var import_classnames25 = __toESM(require("classnames"));
var import_link5 = __toESM(require("next/link"));
var import_jsx_runtime31 = require("react/jsx-runtime");

// src/post-types/PostCardWhiteBg.tsx
var import_classnames26 = __toESM(require("classnames"));
var import_link6 = __toESM(require("next/link"));
var import_jsx_runtime32 = require("react/jsx-runtime");

// src/components/PostsList.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var postListGridCLass = (0, import_classnames27.default)(
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-4"
);

// src/components/SkeletonPostList.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function SkeletonPostList(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
    (!props.listStyle || props.listStyle === "default") && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: (0, import_classnames28.default)(postListGridCLass, "animate-pulse"), children: Array.from({ length: props.count }).map((_, i) => getSkeleton(i, props.postType)) }),
    props.listStyle === "carousel" && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      Carousel,
      {
        items: Array.from({ length: props.count }).map((_, i) => ({ id: i })),
        renderItem: ({ item, isSnapPoint }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CarouselItem, { isSnapPoint, widthClass: "w-80", children: getSkeleton(item.id, props.postType) }, item.id)
      }
    )
  ] });
}
function getSkeleton(key, postType) {
  switch (postType) {
    case "PostTitleCateDate":
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PostTitleCateDateSkeleton, {}, key);
    case "PostCardWhiteBgBig":
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PostCardWhiteBgBigSkeleton, {}, key);
    case "PostImageBackground":
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PostImageBackgroundSkeleton, {}, key);
    case "PostCardWave":
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PostCardWaveSkeleton, {}, key);
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(PostTitleCateDateSkeleton, {}, key);
  }
}
var PostCardWaveSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: (0, import_classnames28.default)("flex items-center justify-center w-full rounded-md bg-slate-200", "h-32"), children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
var PostTitleCateDateSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: (0, import_classnames28.default)("w-full rounded-md bg-slate-200", TCDFIHeightClass) }),
  /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 w-3/4 rounded-md bg-slate-200" })
  ] })
] });
var PostCardWhiteBgBigSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: (0, import_classnames28.default)("w-full rounded-md bg-slate-200", CWBBHeightClass) }),
  /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "w-full mt-2 px-2 flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-2 w-3/4 rounded-md bg-slate-200" })
    ] })
  ] })
] });
var PostImageBackgroundSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: (0, import_classnames28.default)("relative w-full rounded-md bg-slate-200", PIBHeightClass), children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "absolute bottom-0 left-0 w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
//# sourceMappingURL=SkeletonPostList.js.map