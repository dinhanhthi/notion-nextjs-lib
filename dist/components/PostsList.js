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
import cn4 from "classnames";
function generateTextAnnotationClasses(annotations, ignore) {
  return cn4({
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
import cn5 from "classnames";
import { Fragment as Fragment3, jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var init_BlockBookmark = __esm({
  "src/notion-blocks/BlockBookmark.tsx"() {
    "use client";
  }
});

// src/notion-blocks/BlockBulletedListItem.tsx
import cn6 from "classnames";
import { GoSquareFill } from "react-icons/go";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var init_BlockBulletedListItem = __esm({
  "src/notion-blocks/BlockBulletedListItem.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockCallout.tsx
import cn7 from "classnames";
import { get } from "lodash";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var init_BlockCallout = __esm({
  "src/notion-blocks/BlockCallout.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockColumnList.tsx
import cn8 from "classnames";
import { jsx as jsx9 } from "react/jsx-runtime";
var init_BlockColumnList = __esm({
  "src/notion-blocks/BlockColumnList.tsx"() {
    init_BlockRender();
  }
});

// src/notion-blocks/BlockHeadingToggle.tsx
import { Disclosure } from "@headlessui/react";
import cn9 from "classnames";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Fragment as Fragment4, jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var init_BlockHeadingToggle = __esm({
  "src/notion-blocks/BlockHeadingToggle.tsx"() {
    "use client";
  }
});

// src/notion-blocks/BlockHeading.tsx
import cn10 from "classnames";
import { get as get2 } from "lodash";
import { useContext } from "react";
import { Fragment as Fragment5, jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
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
import cn11 from "classnames";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var init_BlockNumberedListItem = __esm({
  "src/notion-blocks/BlockNumberedListItem.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockParagraph.tsx
import cn12 from "classnames";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var init_BlockParagraph = __esm({
  "src/notion-blocks/BlockParagraph.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockQuote.tsx
import cn13 from "classnames";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
var init_BlockQuote = __esm({
  "src/notion-blocks/BlockQuote.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockToDo.tsx
import cn14 from "classnames";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var init_BlockToDo = __esm({
  "src/notion-blocks/BlockToDo.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockToggle.tsx
import { Disclosure as Disclosure2 } from "@headlessui/react";
import cn15 from "classnames";
import { BsFillCaretRightFill as BsFillCaretRightFill2 } from "react-icons/bs";
import { Fragment as Fragment6, jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
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
import cn16 from "classnames";
import { get as get3 } from "lodash";
import mediumZoom from "medium-zoom";
import Image2 from "next/image";
import { useRef, useState } from "react";
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs13("div", { className: cn16(className, "flex flex-col justify-center items-center gap-2"), children: [
    block.imgUrl && /* @__PURE__ */ jsx17("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx17(
      Image2,
      {
        className: cn16({
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
    caption && caption.length > 0 && /* @__PURE__ */ jsx17("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx17(BlockRichText, { richText }, index)) })
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
import { jsx as jsx18 } from "react/jsx-runtime";
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
        return /* @__PURE__ */ jsx18("div", { className: "mermaid flex justify-center", children: this.props.chart });
      }
    };
  }
});

// src/notion-blocks/BlockCode.tsx
var BlockCode_exports = {};
__export(BlockCode_exports, {
  default: () => BlockCode
});
import cn17 from "classnames";
import { useContext as useContext2, useState as useState2 } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCheck } from "react-icons/fi";
import { RxCopy } from "react-icons/rx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
function BlockCode(props) {
  const ctx = useContext2(BlockOptionContext);
  const { block, className } = props;
  const language = block?.code?.language?.toLowerCase() || defaultCodeLanguage;
  const [copied, setCopied] = useState2(false);
  const onSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1e3);
  };
  return /* @__PURE__ */ jsxs14("div", { className: cn17(className, "group"), children: [
    /* @__PURE__ */ jsxs14("div", { className: `language-${formatCodeLang(language)} syntax-highlighter relative`, children: [
      /* @__PURE__ */ jsx19(
        SyntaxHighlighter,
        {
          language: formatCodeLang(language),
          style: dracula,
          className: "syntax-highlighter-pre text-sm",
          showLineNumbers: true,
          children: getJoinedRichText(block?.code?.rich_text)
        }
      ),
      /* @__PURE__ */ jsx19(
        "div",
        {
          className: cn17(
            "absolute right-2 top-2 duration-100 hover:cursor-pointer group-hover:opacity-100",
            {
              "opacity-0": !copied
            },
            "tooltip-auto"
          ),
          "data-title": copied ? ctx?.blockCodeCopiedText || "Copied" : ctx?.blockCodeCopyText || "Copy",
          children: /* @__PURE__ */ jsx19(CopyToClipboard, { text: getJoinedRichText(block?.code?.rich_text), onCopy: onSuccess, children: /* @__PURE__ */ jsxs14("button", { children: [
            !copied && /* @__PURE__ */ jsx19(RxCopy, { className: "text-lg text-slate-200 hover:text-pink-300" }),
            copied && /* @__PURE__ */ jsx19(FiCheck, { className: "text-lg text-green-300" })
          ] }) })
        }
      )
    ] }),
    block?.code?.caption && /* @__PURE__ */ jsx19("div", { className: "italic opacity-60", children: block?.code?.caption?.map((richText, index) => /* @__PURE__ */ jsx19(BlockRichText, { richText }, index)) }),
    block?.code?.language === "mermaid" && /* @__PURE__ */ jsx19(Mermaid, { chart: getJoinedRichText(block?.code?.rich_text) })
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
import cn18 from "classnames";
import { jsx as jsx20 } from "react/jsx-runtime";
function BlockEquation(props) {
  const { block, className } = props;
  return /* @__PURE__ */ jsx20("div", { className: cn18(className, "text-center overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsx20(
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
import cn19 from "classnames";
import { jsx as jsx21, jsxs as jsxs15 } from "react/jsx-runtime";
function BlockTable(props) {
  const { block, className } = props;
  const bodyRows = block?.table.has_row_header ? block?.["children"]?.slice(1) : block?.["children"];
  return /* @__PURE__ */ jsx21("div", { className: cn19(className, "w-full overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsxs15("table", { className: "table-auto", children: [
    block?.table?.has_row_header && /* @__PURE__ */ jsx21("thead", { children: trBlock({
      cells: block?.["children"]?.[0]?.table_row?.cells,
      isRowHeader: true,
      key: 0
    }) }),
    /* @__PURE__ */ jsx21("tbody", { children: bodyRows?.map(
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
  return /* @__PURE__ */ jsx21("tr", { children: cells.map((cell, index, _cells) => {
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
    return /* @__PURE__ */ jsx21("th", { className: cn19(cellClass, headerClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx21(BlockRichText, { richText }, index2)) }, key);
  } else {
    return /* @__PURE__ */ jsx21("td", { className: cn19(cellClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx21(BlockRichText, { richText }, index2)) }, key);
  }
}
var init_BlockTable = __esm({
  "src/notion-blocks/BlockTable.tsx"() {
    init_BlockRichText();
  }
});

// src/components/YoutubeEmbed.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function YoutubeEmbed(props) {
  return /* @__PURE__ */ jsx22("div", { className: props.className, children: /* @__PURE__ */ jsx22(
    "iframe",
    {
      width: props.width || 853,
      height: props.height || 480,
      src: `https://www.youtube.com/embed/${props.id}`,
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      title: props.title || "A video from YouTube",
      className: "border-0"
    }
  ) });
}
var init_YoutubeEmbed = __esm({
  "src/components/YoutubeEmbed.tsx"() {
  }
});

// src/notion-blocks/BlockVideo.tsx
var BlockVideo_exports = {};
__export(BlockVideo_exports, {
  default: () => BlockVideo
});
import cn20 from "classnames";
import { get as get4 } from "lodash";
import { jsx as jsx23, jsxs as jsxs16 } from "react/jsx-runtime";
function BlockVideo(props) {
  const videoUrl = get4(props.block, "video.external.url");
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId)
    return null;
  const caption = get4(props.block, "video.caption");
  const title = caption ? getJoinedRichText(caption) : "";
  return /* @__PURE__ */ jsxs16("div", { className: cn20(props.className, "flex flex-col justify-center items-center gap-2"), children: [
    /* @__PURE__ */ jsx23("div", { className: "w-full", children: /* @__PURE__ */ jsx23(YoutubeEmbed, { id: videoId, title, className: "aspect-video w-full" }) }),
    caption && caption.length > 0 && /* @__PURE__ */ jsx23("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx23(BlockRichText, { richText }, index)) })
  ] });
}
var init_BlockVideo = __esm({
  "src/notion-blocks/BlockVideo.tsx"() {
    "use client";
    init_block_helpers();
    init_BlockRichText();
    init_YoutubeEmbed();
  }
});

// src/components/Renderer.tsx
import cn21 from "classnames";
import { get as get5 } from "lodash";
import dynamic from "next/dynamic";
import { Fragment as Fragment7, jsx as jsx24 } from "react/jsx-runtime";
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
import { jsx as jsx25 } from "react/jsx-runtime";
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
import cn22 from "classnames";
import { get as get6 } from "lodash";
import Link3 from "next/link";
import { useContext as useContext3 } from "react";
import { Fragment as Fragment8, jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
function BlockText(props) {
  const ctx = useContext3(BlockOptionContext);
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ jsx26(Fragment8, { children: lines.map((line, index) => /* @__PURE__ */ jsxs17("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ jsx26("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !props.ignore?.includes("hyperlink") && props.richText.href) {
    if (props.richText.href.includes(ctx?.siteDomain) && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href);
      return /* @__PURE__ */ jsx26(
        Link3,
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
      return /* @__PURE__ */ jsx26(
        "a",
        {
          className: cn22(
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
    return /* @__PURE__ */ jsx26(
      Link3,
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
    return /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsx26(
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
import { jsx as jsx27 } from "react/jsx-runtime";
function BlockInlineEquation(props) {
  return /* @__PURE__ */ jsx27("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ jsx27(
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
import { jsx as jsx28 } from "react/jsx-runtime";
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ jsx28(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ jsx28(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ jsx28(BlockText, { richText: props.richText });
  }
}
var DynamicInlineEquation;
var init_BlockRichText = __esm({
  "src/notion-blocks/BlockRichText.tsx"() {
    init_BlockText();
    DynamicInlineEquation = dynamic2(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
  }
});

// src/components/PostsList.tsx
import cn28 from "classnames";
import React2 from "react";

// src/post-types/PostCardWave.tsx
import cn from "classnames";
import Link from "next/link";
import { jsx, jsxs } from "react/jsx-runtime";
function PostCardWave(props) {
  return /* @__PURE__ */ jsx(Link, { href: props.post.uri || "/", children: /* @__PURE__ */ jsxs("div", { className: "post-card-wave group", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          props.options?.fontClassName,
          "card-title font-semibold group-hover:m2it-link-hover text-slate-800",
          "leading-[1.35] text-[0.95rem]"
        ),
        children: props.post.title
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bottom-wave", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "waves",
        preserveAspectRatio: "none",
        shapeRendering: "auto",
        viewBox: "0 24 150 28",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
              id: "gentle-wave"
            }
          ) }),
          /* @__PURE__ */ jsxs("g", { className: "parallax", children: [
            /* @__PURE__ */ jsx(
              "use",
              {
                fill: `rgba(${waveColors[props.options?.colorIndex || 0]}, 0.1)`,
                x: "48",
                xlinkHref: "#gentle-wave",
                y: "0"
              }
            ),
            /* @__PURE__ */ jsx(
              "use",
              {
                fill: `rgba(${waveColors[props.options?.colorIndex || 0]}, 0.05)`,
                x: "48",
                xlinkHref: "#gentle-wave",
                y: "3"
              }
            ),
            /* @__PURE__ */ jsx(
              "use",
              {
                fill: `rgba(${waveColors[props.options?.colorIndex || 0]}, 0.01)`,
                x: "48",
                xlinkHref: "#gentle-wave",
                y: "5"
              }
            ),
            /* @__PURE__ */ jsx(
              "use",
              {
                fill: `rgba(${waveColors[props.options?.colorIndex || 0]}, 0.005)`,
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
import cn3 from "classnames";
import Link2 from "next/link";

// src/components/Date.tsx
import Moment from "moment";
import { jsx as jsx2 } from "react/jsx-runtime";
function Date(props) {
  const date = Moment(props.dateString).format(props.format || "DD/MM/YYYY");
  return /* @__PURE__ */ jsx2("span", { className: props.className, children: date });
}

// src/components/PostFeaturedImage.tsx
import cn2 from "classnames";

// src/components/ImageComponent.tsx
import Image from "next/image";
import { Fragment, jsx as jsx3 } from "react/jsx-runtime";
function ImageComponent(props) {
  const image = () => props.image?.staticImageData ? /* @__PURE__ */ jsx3(
    Image,
    {
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.staticImageData,
      className: props.className,
      ...props.imageProps
    }
  ) : props.image?.sourceUrl && props.image?.blurDataURL ? /* @__PURE__ */ jsx3(
    Image,
    {
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.sourceUrl,
      className: props.className,
      placeholder: "blur",
      blurDataURL: props.image.blurDataURL,
      ...props.imageProps
    }
  ) : props.defaultImage ? /* @__PURE__ */ jsx3(
    Image,
    {
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.defaultImage,
      className: props.className,
      ...props.imageProps
    }
  ) : null;
  return /* @__PURE__ */ jsx3(Fragment, { children: image() });
}

// src/components/PostFeaturedImage.tsx
import { Fragment as Fragment2, jsx as jsx4 } from "react/jsx-runtime";
function PostFeaturedImage(props) {
  const { title, featuredImage } = props;
  return /* @__PURE__ */ jsx4(Fragment2, { children: /* @__PURE__ */ jsx4("div", { className: "relative flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx4(
    ImageComponent,
    {
      defaultImage: props.defaultImage,
      image: featuredImage,
      alt: `H\xECnh \u0111\u1EA1i di\u1EC7n cho b\xE0i vi\u1EBFt "${title}"`,
      className: cn2("object-cover", props.className),
      imageProps: {
        fill: true
      }
    }
  ) }) });
}

// src/post-types/PostCardWhiteBg.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function PostCardWhiteBg(props) {
  const { title, featuredImage, date, uri } = props.post;
  return /* @__PURE__ */ jsx5("div", { className: "group overflow-hidden rounded-md bg-white shadow-lg", children: /* @__PURE__ */ jsxs2(Link2, { className: cn3(props.options?.fontClassName, "text-center"), href: uri || "/", children: [
    /* @__PURE__ */ jsx5("div", { className: "flex flex-col justify-center ", children: /* @__PURE__ */ jsx5("div", { className: "relative h-28 w-full overflow-hidden ", children: /* @__PURE__ */ jsx5(PostFeaturedImage, { featuredImage, title }) }) }),
    /* @__PURE__ */ jsx5("div", { className: "group-hover:m2it-link-hover px-4 py-3 text-base font-bold", children: title }),
    !props.options?.hideDate && date && /* @__PURE__ */ jsx5("div", { className: "px-2 pb-4 text-sm opacity-80", children: /* @__PURE__ */ jsx5(Date, { dateString: date }) })
  ] }) });
}

// src/post-types/PostCardWhiteBgBig.tsx
import cn23 from "classnames";
import Link4 from "next/link";

// src/components/Excerpt.tsx
init_BlockRichText();
import { jsx as jsx29 } from "react/jsx-runtime";
function Excerpt(props) {
  if (!props.excerpt || !props.excerpt.length) {
    if (props.defaultExcerpt)
      return /* @__PURE__ */ jsx29("span", { children: props.defaultExcerpt });
    return "Undefined excerpt";
  }
  return /* @__PURE__ */ jsx29("span", { children: props.excerpt.map((richText, index) => /* @__PURE__ */ jsx29(BlockRichText, { richText, ignore: ["hyperlink"] }, index)) });
}

// src/post-types/PostCardWhiteBgBig.tsx
import { Fragment as Fragment9, jsx as jsx30, jsxs as jsxs18 } from "react/jsx-runtime";
var CWBBHeightClass = "h-36";
function PostCardWhiteBgBig(props) {
  const { title, featuredImage, date, uri, excerpt, authors } = props.post;
  const options = props.options;
  return /* @__PURE__ */ jsx30("div", { className: "group overflow-hidden rounded-md bg-white shadow-lg h-full", children: /* @__PURE__ */ jsxs18(Link4, { className: cn23(options?.fontClassName, "text-center"), href: uri || "/", children: [
    /* @__PURE__ */ jsx30("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx30("div", { className: cn23("relative w-full overflow-hidden", CWBBHeightClass), children: /* @__PURE__ */ jsx30(PostFeaturedImage, { featuredImage, title }) }) }),
    /* @__PURE__ */ jsxs18("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx30("div", { className: "group-hover:m2it-link-hover text-base font-bold leading-[1.35]", children: title }),
      (!options?.hideDate || !options?.hideAuthor) && /* @__PURE__ */ jsxs18("div", { className: "flex justify-center gap-2 p-2", children: [
        !options?.hideDate && date && /* @__PURE__ */ jsxs18("div", { className: "text-sm opacity-80", children: [
          /* @__PURE__ */ jsx30("i", { className: "icon-clock mr-1" }),
          /* @__PURE__ */ jsx30(Date, { dateString: date })
        ] }),
        !options?.hideAuthor && authors?.length && /* @__PURE__ */ jsxs18("div", { className: "flex gap-1 text-sm opacity-80", children: [
          authors?.length > 1 && /* @__PURE__ */ jsxs18(Fragment9, { children: [
            /* @__PURE__ */ jsx30("i", { className: "icon-users-outline" }),
            /* @__PURE__ */ jsx30("span", { children: "Nhi\u1EC1u t\xE1c gi\u1EA3" })
          ] }),
          authors?.length <= 1 && /* @__PURE__ */ jsxs18(Fragment9, { children: [
            /* @__PURE__ */ jsx30("i", { className: "icon-user-outline -mr-1" }),
            /* @__PURE__ */ jsx30("span", { children: authors[0].name })
          ] })
        ] })
      ] }),
      !options?.hideExcerpt && excerpt && /* @__PURE__ */ jsx30("div", { className: "pt-2 text-[0.8rem] opacity-80 group-hover:opacity-100", children: /* @__PURE__ */ jsx30(Excerpt, { excerpt, defaultExcerpt: "M\u1ED9t b\xE0i vi\u1EBFt tr\xEAn Math2IT" }) })
    ] })
  ] }) });
}

// src/post-types/PostImageBackground.tsx
import cn24 from "classnames";
import Link5 from "next/link";
import { jsx as jsx31, jsxs as jsxs19 } from "react/jsx-runtime";
var PIBHeightClass = "h-36";
function PostImageBackground(props) {
  const { title, featuredImage, uri } = props.post;
  return /* @__PURE__ */ jsx31("div", { className: "group overflow-hidden rounded-md shadow-lg", children: /* @__PURE__ */ jsx31(Link5, { className: cn24(props.options?.fontClassName, "text-center"), href: uri || "/", children: /* @__PURE__ */ jsx31("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsxs19("div", { className: cn24("relative w-full overflow-hidden mix-blend-overlay", PIBHeightClass), children: [
    /* @__PURE__ */ jsx31(PostFeaturedImage, { featuredImage, title }),
    /* @__PURE__ */ jsx31(
      "div",
      {
        className: cn24(
          "absolute bottom-0 left-0 flex h-fit w-full flex-col justify-end",
          "bg-gradient-to-t from-gray-900 to-transparent p-4 pt-6 text-sm font-bold",
          "leading-5 text-white duration-300 hover:from-black hover:to-transparent"
        ),
        children: title
      }
    )
  ] }) }) }) });
}

// src/post-types/PostSimple.tsx
import cn25 from "classnames";
import Link6 from "next/link";
import { FaPenNib } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { jsx as jsx32, jsxs as jsxs20 } from "react/jsx-runtime";
function PostSimple(props) {
  const { post, options } = props;
  return /* @__PURE__ */ jsx32("div", { className: "group py-3 px-2 hover:bg-gray-50", children: /* @__PURE__ */ jsxs20(Link6, { className: cn25(options?.fontClassName, "flex items-start gap-3"), href: post.uri || "/", children: [
    /* @__PURE__ */ jsxs20("div", { className: "mt-[3px] text-slate-600", children: [
      !!options?.customIcon && options.customIcon,
      !options?.customIcon && !post.isBlog && /* @__PURE__ */ jsx32(HiOutlineDocumentText, { className: "text-xl" }),
      !options?.customIcon && post.isBlog && /* @__PURE__ */ jsx32(FaPenNib, { className: "text-lg" })
    ] }),
    /* @__PURE__ */ jsx32("h3", { className: "flex-1", children: post.title }),
    (post.createdDate || post.date) && /* @__PURE__ */ jsxs20("div", { className: "gap-2 hidden md:flex", children: [
      post.date && /* @__PURE__ */ jsxs20(
        "div",
        {
          className: cn25(
            `bg-slate-200 text-slate-800 px-3 py-0.5 text-[0.8rem] items-start rounded-md
                      flex gap-1 flex-nowrap`
          ),
          children: [
            options?.updatedOnLabel || "updated",
            /* @__PURE__ */ jsx32(Date, { className: "hidden lg:block", dateString: post.date, format: "MMM DD, YYYY" })
          ]
        }
      ),
      post.createdDate && /* @__PURE__ */ jsx32(
        Date,
        {
          className: "text-[0.9rem] text-slate-800",
          dateString: post.createdDate,
          format: "MMM DD, YYYY"
        }
      )
    ] })
  ] }) });
}

// src/post-types/PostTitleCateDate.tsx
import cn26 from "classnames";
import Link7 from "next/link";
import { IoBookOutline } from "react-icons/io5";
import { jsx as jsx33, jsxs as jsxs21 } from "react/jsx-runtime";
var TCDFIHeightClass = "h-28";
function PostTitleCateDate(props) {
  const { title, featuredImage, date, categories, uri } = props.post;
  const options = props.options;
  const category = categories ? categories[0] : null;
  return /* @__PURE__ */ jsx33("div", { className: "group", children: /* @__PURE__ */ jsxs21(Link7, { className: cn26(options?.fontClassName, "text-center"), href: uri || "/", children: [
    /* @__PURE__ */ jsxs21(
      "div",
      {
        className: cn26("flex flex-col justify-center overflow-hidden rounded-t-md shadow-sm", {
          "rounded-b-md": !category || options?.hideCategory
        }),
        children: [
          /* @__PURE__ */ jsx33("div", { className: cn26("relative w-full overflow-hidden", TCDFIHeightClass), children: /* @__PURE__ */ jsx33(
            PostFeaturedImage,
            {
              className: "duration-300 group-hover:scale-110",
              featuredImage,
              title
            }
          ) }),
          !options?.hideCategory && category && /* @__PURE__ */ jsx33(
            "div",
            {
              style: {
                backgroundColor: `${category.style?.bgColor || options.defaultCategoryBgColor || "#eee"}`,
                color: `${category.style?.textColor || options.defaultCategoryTextColor || "#222"}`
              },
              className: cn26("rounded-b-md px-2 py-1 text-xs font-semibold"),
              children: category?.name
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs21(
      "div",
      {
        className: cn26(
          "group-hover:m2it-link-hover p-2 text-[0.95rem] font-semibold leading-[1.35]"
        ),
        children: [
          title,
          !!props.post.bookCover && /* @__PURE__ */ jsx33(IoBookOutline, { className: "group-hover:m2it-link-hover mb-[2px] ml-2 inline text-sm text-slate-700" })
        ]
      }
    ),
    !options?.hideDate && /* @__PURE__ */ jsxs21("div", { className: "text-sm opacity-80", children: [
      /* @__PURE__ */ jsx33("i", { className: "icon-clock mr-1" }),
      date && /* @__PURE__ */ jsx33(Date, { dateString: date })
    ] })
  ] }) });
}

// src/components/Carousel.tsx
import cn27 from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSnapCarousel } from "react-snap-carousel";
import { jsx as jsx34, jsxs as jsxs22 } from "react/jsx-runtime";
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = useSnapCarousel();
  const arrowBtnClasses = cn27(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = cn27(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ jsxs22("div", { className: "relative", children: [
    /* @__PURE__ */ jsx34(
      "div",
      {
        ref: scrollRef,
        className: cn27("no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4"),
        children: items.map(
          (item, i) => renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i
          })
        )
      }
    ),
    /* @__PURE__ */ jsx34(
      "button",
      {
        onClick: () => prev(),
        className: cn27("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ jsx34(FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx34(
      "button",
      {
        onClick: () => next(),
        className: cn27("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ jsx34(FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx34("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ jsx34(
      "button",
      {
        className: cn27("h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60", {
          "opacity-40 w-2.5 hover:w-3.5": activePageIndex !== i,
          "w-5 opacity-70": activePageIndex === i
        }),
        onClick: () => goTo(i)
      },
      i
    )) })
  ] });
};
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ jsx34(
  "div",
  {
    className: cn27(
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
import { jsx as jsx35, jsxs as jsxs23 } from "react/jsx-runtime";
var postListGridCLass = cn28(
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-4"
);
function PostList(props) {
  return /* @__PURE__ */ jsxs23("section", { children: [
    (!props.listStyle || props.listStyle === "default") && /* @__PURE__ */ jsx35("div", { className: props.options?.className || postListGridCLass, children: props.posts.map((post, index) => /* @__PURE__ */ jsx35(React2.Fragment, { children: getPostTypeElement(props.postType, post, props.postTypeOpts, index) }, post.uri)) }),
    props.listStyle === "carousel" && /* @__PURE__ */ jsx35(
      Carousel,
      {
        items: props.posts,
        renderItem: ({ item, isSnapPoint, index }) => /* @__PURE__ */ jsx35(CarouselItem, { isSnapPoint, widthClass: "w-80", children: getPostTypeElement(props.postType, item, props.postTypeOpts, index) }, item.id)
      }
    )
  ] });
}
function getPostTypeElement(postType, post, postTypeOpts, index) {
  switch (postType) {
    case "PostTitleCateDate":
      return /* @__PURE__ */ jsx35(PostTitleCateDate, { post, options: postTypeOpts });
    case "PostCardWhiteBg":
      return /* @__PURE__ */ jsx35(PostCardWhiteBg, { post, options: postTypeOpts });
    case "PostCardWhiteBgBig":
      return /* @__PURE__ */ jsx35(PostCardWhiteBgBig, { post, options: postTypeOpts });
    case "PostImageBackground":
      return /* @__PURE__ */ jsx35(PostImageBackground, { post, options: postTypeOpts });
    case "PostCardWave":
      return /* @__PURE__ */ jsx35(PostCardWave, { post, options: { ...postTypeOpts, colorIndex: index } });
    case "PostSimple":
      return /* @__PURE__ */ jsx35(PostSimple, { post, options: postTypeOpts });
  }
}
export {
  PostList as default,
  postListGridCLass
};
//# sourceMappingURL=PostsList.js.map