"use client";
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/helpers/block-helpers.ts
import cn from "classnames";
function generateTextAnnotationClasses(annotations, ignore) {
  return cn({
    "font-semibold": annotations.bold && !ignore?.includes("bold"),
    italic: annotations.italic && !ignore?.includes("italic"),
    "underline underline-offset-4": annotations.underline && !ignore?.includes("underline"),
    "line-through": annotations.strikethrough && !ignore?.includes("strikethrough"),
    "font-mono text-[85%] bg-slate-200 text-rose-500 px-1 py-0 rounded": annotations.code && !ignore?.includes("code"),
    [mapColorClass(annotations.color)]: !ignore?.includes("color")
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
var init_block_helpers = __esm({
  "src/helpers/block-helpers.ts"() {
  }
});

// src/notion-blocks/BlockBookmark.tsx
import cn2 from "classnames";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var init_BlockBookmark = __esm({
  "src/notion-blocks/BlockBookmark.tsx"() {
    "use client";
  }
});

// src/notion-blocks/BlockBulletedListItem.tsx
import cn3 from "classnames";
import { GoSquareFill } from "react-icons/go";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var init_BlockBulletedListItem = __esm({
  "src/notion-blocks/BlockBulletedListItem.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockCallout.tsx
import cn4 from "classnames";
import { get } from "lodash";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var init_BlockCallout = __esm({
  "src/notion-blocks/BlockCallout.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockColumnList.tsx
import cn5 from "classnames";
import { jsx as jsx5 } from "react/jsx-runtime";
var init_BlockColumnList = __esm({
  "src/notion-blocks/BlockColumnList.tsx"() {
    init_BlockRender();
  }
});

// src/notion-blocks/BlockHeadingToggle.tsx
import { Disclosure } from "@headlessui/react";
import cn6 from "classnames";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Fragment as Fragment2, jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var init_BlockHeadingToggle = __esm({
  "src/notion-blocks/BlockHeadingToggle.tsx"() {
    "use client";
  }
});

// src/notion-blocks/BlockHeading.tsx
import cn7 from "classnames";
import { get as get2 } from "lodash";
import { useContext } from "react";
import { Fragment as Fragment3, jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var init_BlockHeading = __esm({
  "src/notion-blocks/BlockHeading.tsx"() {
    "use client";
    init_BlockRender();
    init_block_helpers();
    init_BlockHeadingToggle();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockNumberedListItem.tsx
import cn8 from "classnames";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var init_BlockNumberedListItem = __esm({
  "src/notion-blocks/BlockNumberedListItem.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockParagraph.tsx
import cn9 from "classnames";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var init_BlockParagraph = __esm({
  "src/notion-blocks/BlockParagraph.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockQuote.tsx
import cn10 from "classnames";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var init_BlockQuote = __esm({
  "src/notion-blocks/BlockQuote.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockToDo.tsx
import cn11 from "classnames";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var init_BlockToDo = __esm({
  "src/notion-blocks/BlockToDo.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockToggle.tsx
import { Disclosure as Disclosure2 } from "@headlessui/react";
import cn12 from "classnames";
import { BsFillCaretRightFill as BsFillCaretRightFill2 } from "react-icons/bs";
import { Fragment as Fragment4, jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var init_BlockToggle = __esm({
  "src/notion-blocks/BlockToggle.tsx"() {
    "use client";
    init_block_helpers();
    init_BlockRichText();
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
import cn13 from "classnames";
import { get as get3 } from "lodash";
import mediumZoom from "medium-zoom";
import Image from "next/image";
import { useRef, useState } from "react";
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function BlockImage(props) {
  const [isImageReady, setIsImageReady] = useState(false);
  const { block, className } = props;
  const width = Math.min(get3(block, "imageInfo.width", 1e3), 1e3);
  const height = Math.min(get3(block, "imageInfo.height", 700), 700);
  const blurDataURL = get3(block, "imageInfo.base64", defaultBlurDataURL);
  const caption = block?.image?.caption;
  const zoomRef = useRef(null);
  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom({
        background: "#00000080"
      });
    }
    return zoomRef.current;
  }
  function attachZoom(image) {
    const zoom = getZoom();
    if (image) {
      zoom.attach(image);
    } else {
      zoom.detach();
    }
  }
  return /* @__PURE__ */ jsxs11("div", { className: cn13(className, "flex flex-col justify-center items-center gap-2"), children: [
    block.imgUrl && /* @__PURE__ */ jsx13("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx13(
      Image,
      {
        className: cn13({
          "blur-lg": !isImageReady,
          "blur-0": isImageReady
        }),
        src: block.imgUrl,
        alt: getJoinedRichText(block?.image?.caption),
        width,
        height,
        blurDataURL,
        placeholder: "blur",
        onLoadingComplete: () => setIsImageReady(true),
        "data-zoomable": true,
        ref: attachZoom
      }
    ) }),
    caption && caption.length > 0 && /* @__PURE__ */ jsx13("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx13(BlockRichText, { richText }, index)) })
  ] });
}
var init_BlockImage = __esm({
  "src/notion-blocks/BlockImage.tsx"() {
    "use client";
    init_block_helpers();
    init_config();
    init_BlockRichText();
  }
});

// src/components/Mermaid.tsx
import mermaid from "mermaid";
import React from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var Mermaid;
var init_Mermaid = __esm({
  "src/components/Mermaid.tsx"() {
    "use client";
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose"
    });
    Mermaid = class extends React.Component {
      componentDidMount() {
        mermaid.contentLoaded();
      }
      render() {
        return /* @__PURE__ */ jsx14("div", { className: "mermaid flex justify-center", children: this.props.chart });
      }
    };
  }
});

// src/notion-blocks/BlockCode.tsx
var BlockCode_exports = {};
__export(BlockCode_exports, {
  default: () => BlockCode
});
import cn14 from "classnames";
import { useContext as useContext2, useState as useState2 } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCheck } from "react-icons/fi";
import { RxCopy } from "react-icons/rx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tooltip } from "react-tooltip";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
function BlockCode(props) {
  const ctx = useContext2(BlockOptionContext);
  const { block, className } = props;
  const language = block?.code?.language?.toLowerCase() || defaultCodeLanguage;
  const [copied, setCopied] = useState2(false);
  const onSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1e3);
  };
  return /* @__PURE__ */ jsxs12("div", { className: cn14(className, "group"), children: [
    /* @__PURE__ */ jsxs12("div", { className: `language-${formatCodeLang(language)} syntax-highlighter relative`, children: [
      /* @__PURE__ */ jsx15(
        SyntaxHighlighter,
        {
          language: formatCodeLang(language),
          style: dracula,
          className: "syntax-highlighter-pre text-sm",
          showLineNumbers: true,
          children: getJoinedRichText(block?.code?.rich_text)
        }
      ),
      /* @__PURE__ */ jsx15(
        "div",
        {
          className: cn14(
            "absolute right-2 top-2 duration-100 hover:cursor-pointer",
            {
              "opacity-0": !copied
            },
            "group-hover:opacity-100"
          ),
          "data-tooltip-id": "block-code-tooltip",
          "data-tooltip-content": copied ? ctx?.blockCodeCopiedText || "Copied" : ctx?.blockCodeCopyText || "Copy",
          "data-tooltip-place": "top",
          children: /* @__PURE__ */ jsx15(CopyToClipboard, { text: getJoinedRichText(block?.code?.rich_text), onCopy: onSuccess, children: /* @__PURE__ */ jsxs12("button", { children: [
            !copied && /* @__PURE__ */ jsx15(RxCopy, { className: "text-lg text-slate-200 hover:text-pink-300" }),
            copied && /* @__PURE__ */ jsx15(FiCheck, { className: "text-lg text-green-300" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx15(Tooltip, { id: "block-code-tooltip", noArrow: true })
    ] }),
    block?.code?.caption && /* @__PURE__ */ jsx15("div", { className: "italic opacity-60", children: block?.code?.caption?.map((richText, index) => /* @__PURE__ */ jsx15(BlockRichText, { richText }, index)) }),
    block?.code?.language === "mermaid" && /* @__PURE__ */ jsx15(Mermaid, { chart: getJoinedRichText(block?.code?.rich_text) })
  ] });
}
var formatCodeLang;
var init_BlockCode = __esm({
  "src/notion-blocks/BlockCode.tsx"() {
    "use client";
    init_BlockRender();
    init_Mermaid();
    init_block_helpers();
    init_config();
    init_BlockRichText();
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
import Katex from "@matejmazur/react-katex";
import cn15 from "classnames";
import { jsx as jsx16 } from "react/jsx-runtime";
function BlockEquation(props) {
  const { block, className } = props;
  return /* @__PURE__ */ jsx16("div", { className: cn15(className, "text-center overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsx16(
    Katex,
    {
      className: mathFontSize,
      math: block?.equation?.expression,
      settings: {
        throwOnError: false,
        strict: false
      },
      block: true
    }
  ) });
}
var mathFontSize;
var init_BlockEquation = __esm({
  "src/notion-blocks/BlockEquation.tsx"() {
    "use client";
    mathFontSize = "text-base";
  }
});

// src/notion-blocks/BlockTable.tsx
var BlockTable_exports = {};
__export(BlockTable_exports, {
  default: () => BlockTable
});
import cn16 from "classnames";
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
function BlockTable(props) {
  const { block, className } = props;
  const bodyRows = block?.table.has_row_header ? block?.["children"]?.slice(1) : block?.["children"];
  return /* @__PURE__ */ jsx17("div", { className: cn16(className, "w-full overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsxs13("table", { className: "table-auto", children: [
    block?.table?.has_row_header && /* @__PURE__ */ jsx17("thead", { children: trBlock({
      cells: block?.["children"]?.[0]?.table_row?.cells,
      isRowHeader: true,
      key: 0
    }) }),
    /* @__PURE__ */ jsx17("tbody", { children: bodyRows?.map(
      (row, index) => trBlock({
        cells: row?.table_row?.cells,
        isRowHeader: false,
        key: index,
        hasColumnHeader: block?.table?.has_column_header
      })
    ) })
  ] }) });
}
function trBlock(options) {
  const { cells, isRowHeader, key, hasColumnHeader } = options;
  if (!cells)
    return null;
  return /* @__PURE__ */ jsx17("tr", { children: cells.map((cell, index, _cells) => {
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
    return /* @__PURE__ */ jsx17("th", { className: cn16(cellClass, headerClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx17(BlockRichText, { richText }, index2)) }, key);
  } else {
    return /* @__PURE__ */ jsx17("td", { className: cn16(cellClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx17(BlockRichText, { richText }, index2)) }, key);
  }
}
var init_BlockTable = __esm({
  "src/notion-blocks/BlockTable.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockVideo.tsx
var BlockVideo_exports = {};
__export(BlockVideo_exports, {
  default: () => BlockVideo
});
import cn17 from "classnames";
import { get as get4 } from "lodash";
import YouTube from "react-youtube";
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
function BlockVideo(props) {
  const videoUrl = get4(props.block, "video.external.url");
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId)
    return null;
  const caption = get4(props.block, "video.caption");
  const title = caption ? getJoinedRichText(caption) : "";
  return /* @__PURE__ */ jsxs14("div", { className: cn17(props.className, "flex flex-col justify-center items-center gap-2"), children: [
    /* @__PURE__ */ jsx18("div", { className: "w-full", children: /* @__PURE__ */ jsx18(YouTube, { videoId, title, className: "aspect-video w-full" }) }),
    caption && caption.length > 0 && /* @__PURE__ */ jsx18("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx18(BlockRichText, { richText }, index)) })
  ] });
}
var init_BlockVideo = __esm({
  "src/notion-blocks/BlockVideo.tsx"() {
    "use client";
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/components/Renderer.tsx
import cn18 from "classnames";
import { get as get5 } from "lodash";
import dynamic from "next/dynamic";
import { Fragment as Fragment5, jsx as jsx19 } from "react/jsx-runtime";
var DynamicImage, DynamicCode, DynamicEquation, DynamicTable, DynamicVideo;
var init_Renderer = __esm({
  "src/components/Renderer.tsx"() {
    "use client";
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
    DynamicImage = dynamic(() => Promise.resolve().then(() => (init_BlockImage(), BlockImage_exports)));
    DynamicCode = dynamic(() => Promise.resolve().then(() => (init_BlockCode(), BlockCode_exports)));
    DynamicEquation = dynamic(() => Promise.resolve().then(() => (init_BlockEquation(), BlockEquation_exports)));
    DynamicTable = dynamic(() => Promise.resolve().then(() => (init_BlockTable(), BlockTable_exports)));
    DynamicVideo = dynamic(() => Promise.resolve().then(() => (init_BlockVideo(), BlockVideo_exports)));
  }
});

// src/components/BlockRender.tsx
import { createContext } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var defaultBlockOptionContext, BlockOptionContext;
var init_BlockRender = __esm({
  "src/components/BlockRender.tsx"() {
    "use client";
    init_Renderer();
    defaultBlockOptionContext = {
      disableAnchorHeading: false,
      siteDomain: "dinhanhthi.com"
    };
    BlockOptionContext = createContext(defaultBlockOptionContext);
  }
});

// src/notion-blocks/BlockText.tsx
import cn19 from "classnames";
import { get as get6 } from "lodash";
import Link from "next/link";
import { useContext as useContext3 } from "react";
import { Fragment as Fragment6, jsx as jsx21, jsxs as jsxs15 } from "react/jsx-runtime";
function BlockText(props) {
  const ctx = useContext3(BlockOptionContext);
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ jsx21(Fragment6, { children: lines.map((line, index) => /* @__PURE__ */ jsxs15("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ jsx21("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !props.ignore?.includes("hyperlink") && props.richText.href) {
    if (props.richText.href.includes(ctx?.siteDomain) && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href);
      return /* @__PURE__ */ jsx21(
        Link,
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
      return /* @__PURE__ */ jsx21(
        "a",
        {
          className: cn19(
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
  if (!props.ignore?.includes("hyperlink") && props.richText.type === "mention" && props.richText.mention?.type === "page" && get6(props.richText, "mention.page.uri")) {
    return /* @__PURE__ */ jsx21(
      Link,
      {
        className: generateTextAnnotationClasses(
          props.richText.annotations,
          props.ignore
        ),
        href: get6(props.richText, "mention.page.uri", "/"),
        children: props.richText.plain_text
      }
    );
  }
  if (props.richText.type === "mention" && props.richText.mention?.type === "date") {
    return /* @__PURE__ */ jsx21(
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
  return /* @__PURE__ */ jsx21(
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
var init_BlockText = __esm({
  "src/notion-blocks/BlockText.tsx"() {
    init_BlockRender();
    init_block_helpers();
  }
});

// src/notion-blocks/BlockInlineEquation.tsx
var BlockInlineEquation_exports = {};
__export(BlockInlineEquation_exports, {
  default: () => BlockInlineEquation
});
import Katex2 from "@matejmazur/react-katex";
import { jsx as jsx22 } from "react/jsx-runtime";
function BlockInlineEquation(props) {
  return /* @__PURE__ */ jsx22("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ jsx22(
    Katex2,
    {
      className: props.fontSize ?? mathFontSize,
      math: props.equation.plain_text,
      settings: {
        throwOnError: false,
        strict: false
      }
    }
  ) });
}
var init_BlockInlineEquation = __esm({
  "src/notion-blocks/BlockInlineEquation.tsx"() {
    "use client";
    init_block_helpers();
    init_BlockEquation();
  }
});

// src/notion-blocks/BlockRichText.tsx
import dynamic2 from "next/dynamic";
import { jsx as jsx23 } from "react/jsx-runtime";
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ jsx23(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ jsx23(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ jsx23(BlockText, { richText: props.richText });
  }
}
var DynamicInlineEquation;
var init_BlockRichText = __esm({
  "src/notion-blocks/BlockRichText.tsx"() {
    init_BlockText();
    DynamicInlineEquation = dynamic2(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
  }
});

// src/components/SkeletonPostList.tsx
import cn28 from "classnames";

// src/post-types/PostCardWhiteBgBig.tsx
import cn21 from "classnames";
import Link2 from "next/link";

// src/components/Date.tsx
import Moment from "moment";
import { jsx } from "react/jsx-runtime";

// src/components/Excerpt.tsx
init_BlockRichText();
import { jsx as jsx24 } from "react/jsx-runtime";

// src/components/PostFeaturedImage.tsx
import cn20 from "classnames";

// src/components/ImageComponent.tsx
import Image2 from "next/image";
import { Fragment as Fragment7, jsx as jsx25 } from "react/jsx-runtime";

// src/components/PostFeaturedImage.tsx
import { Fragment as Fragment8, jsx as jsx26 } from "react/jsx-runtime";

// src/post-types/PostCardWhiteBgBig.tsx
import { Fragment as Fragment9, jsx as jsx27, jsxs as jsxs16 } from "react/jsx-runtime";
var CWBBHeightClass = "h-36";

// src/post-types/PostImageBackground.tsx
import cn22 from "classnames";
import Link3 from "next/link";
import { jsx as jsx28, jsxs as jsxs17 } from "react/jsx-runtime";
var PIBHeightClass = "h-36";

// src/post-types/PostTitleCateDate.tsx
import cn23 from "classnames";
import Link4 from "next/link";
import { IoBookOutline } from "react-icons/io5";
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var TCDFIHeightClass = "h-28";

// src/components/Carousel.tsx
import cn24 from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSnapCarousel } from "react-snap-carousel";
import { jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = useSnapCarousel();
  const arrowBtnClasses = cn24(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = cn24(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ jsxs19("div", { className: "relative", children: [
    /* @__PURE__ */ jsx30(
      "div",
      {
        ref: scrollRef,
        className: cn24("no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4"),
        children: items.map(
          (item, i) => renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i
          })
        )
      }
    ),
    /* @__PURE__ */ jsx30(
      "button",
      {
        onClick: () => prev(),
        className: cn24("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ jsx30(FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx30(
      "button",
      {
        onClick: () => next(),
        className: cn24("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ jsx30(FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx30("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ jsx30(
      "button",
      {
        className: cn24("h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60", {
          "opacity-40 w-2.5 hover:w-3.5": activePageIndex !== i,
          "w-5 opacity-70": activePageIndex === i
        }),
        onClick: () => goTo(i)
      },
      i
    )) })
  ] });
};
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ jsx30(
  "div",
  {
    className: cn24(
      "shrink-0",
      {
        "snap-start": isSnapPoint
      },
      widthClass ?? "w-64"
    ),
    children
  }
);

// src/components/PostsList.tsx
import cn27 from "classnames";
import React2 from "react";

// src/post-types/PostCardWave.tsx
import cn25 from "classnames";
import Link5 from "next/link";
import { jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";

// src/post-types/PostCardWhiteBg.tsx
import cn26 from "classnames";
import Link6 from "next/link";
import { jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";

// src/components/PostsList.tsx
import { jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
var postListGridCLass = cn27(
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-4"
);

// src/components/SkeletonPostList.tsx
import { Fragment as Fragment10, jsx as jsx34, jsxs as jsxs23 } from "react/jsx-runtime";
function SkeletonPostList(props) {
  return /* @__PURE__ */ jsxs23(Fragment10, { children: [
    (!props.listStyle || props.listStyle === "default") && /* @__PURE__ */ jsx34("div", { className: cn28(postListGridCLass, "animate-pulse"), children: Array.from({ length: props.count }).map((_, i) => getSkeleton(i, props.postType)) }),
    props.listStyle === "carousel" && /* @__PURE__ */ jsx34(
      Carousel,
      {
        items: Array.from({ length: props.count }).map((_, i) => ({ id: i })),
        renderItem: ({ item, isSnapPoint }) => /* @__PURE__ */ jsx34(CarouselItem, { isSnapPoint, widthClass: "w-80", children: getSkeleton(item.id, props.postType) }, item.id)
      }
    )
  ] });
}
function getSkeleton(key, postType) {
  switch (postType) {
    case "PostTitleCateDate":
      return /* @__PURE__ */ jsx34(PostTitleCateDateSkeleton, {}, key);
    case "PostCardWhiteBgBig":
      return /* @__PURE__ */ jsx34(PostCardWhiteBgBigSkeleton, {}, key);
    case "PostImageBackground":
      return /* @__PURE__ */ jsx34(PostImageBackgroundSkeleton, {}, key);
    case "PostCardWave":
      return /* @__PURE__ */ jsx34(PostCardWaveSkeleton, {}, key);
    default:
      return /* @__PURE__ */ jsx34(PostTitleCateDateSkeleton, {}, key);
  }
}
var PostCardWaveSkeleton = () => /* @__PURE__ */ jsx34("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx34("div", { className: cn28("flex items-center justify-center w-full rounded-md bg-slate-200", "h-32"), children: /* @__PURE__ */ jsxs23("div", { className: "w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ jsx34("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ jsx34("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
var PostTitleCateDateSkeleton = () => /* @__PURE__ */ jsxs23("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ jsx34("div", { className: cn28("w-full rounded-md bg-slate-200", TCDFIHeightClass) }),
  /* @__PURE__ */ jsxs23("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ jsx34("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ jsx34("div", { className: "h-4 w-3/4 rounded-md bg-slate-200" })
  ] })
] });
var PostCardWhiteBgBigSkeleton = () => /* @__PURE__ */ jsxs23("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ jsx34("div", { className: cn28("w-full rounded-md bg-slate-200", CWBBHeightClass) }),
  /* @__PURE__ */ jsxs23("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ jsx34("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ jsxs23("div", { className: "w-full mt-2 px-2 flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ jsx34("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ jsx34("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ jsx34("div", { className: "h-2 w-3/4 rounded-md bg-slate-200" })
    ] })
  ] })
] });
var PostImageBackgroundSkeleton = () => /* @__PURE__ */ jsx34("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx34("div", { className: cn28("relative w-full rounded-md bg-slate-200", PIBHeightClass), children: /* @__PURE__ */ jsxs23("div", { className: "absolute bottom-0 left-0 w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ jsx34("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ jsx34("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
export {
  SkeletonPostList as default
};
//# sourceMappingURL=SkeletonPostList.js.map