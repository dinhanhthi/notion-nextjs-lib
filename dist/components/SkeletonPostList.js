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
    "font-mono text-[85%] bg-slate-200 text-[#067b26] p-[1px_4px_2px_4px] rounded": annotations.code && !ignore?.includes("code"),
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
import { Fragment, jsx as jsx4, jsxs } from "react/jsx-runtime";
var init_BlockBookmark = __esm({
  "src/notion-blocks/BlockBookmark.tsx"() {
    "use client";
  }
});

// src/icons/GoSquareFill.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var init_GoSquareFill = __esm({
  "src/icons/GoSquareFill.tsx"() {
  }
});

// src/icons/RxDot.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var init_RxDot = __esm({
  "src/icons/RxDot.tsx"() {
  }
});

// src/icons/RxDotFilled.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var init_RxDotFilled = __esm({
  "src/icons/RxDotFilled.tsx"() {
  }
});

// src/notion-blocks/BlockBulletedListItem.tsx
import cn3 from "classnames";
import { jsx as jsx8, jsxs as jsxs2 } from "react/jsx-runtime";
var init_BlockBulletedListItem = __esm({
  "src/notion-blocks/BlockBulletedListItem.tsx"() {
    init_GoSquareFill();
    init_RxDot();
    init_RxDotFilled();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockCallout.tsx
import cn4 from "classnames";
import { get } from "lodash";
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var init_BlockCallout = __esm({
  "src/notion-blocks/BlockCallout.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockColumnList.tsx
import cn5 from "classnames";
import { jsx as jsx10 } from "react/jsx-runtime";
var init_BlockColumnList = __esm({
  "src/notion-blocks/BlockColumnList.tsx"() {
    init_BlockRender();
  }
});

// src/icons/CiLink.tsx
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var init_CiLink = __esm({
  "src/icons/CiLink.tsx"() {
  }
});

// src/icons/BsFillCaretRightFill.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var init_BsFillCaretRightFill = __esm({
  "src/icons/BsFillCaretRightFill.tsx"() {
  }
});

// src/notion-blocks/BlockHeadingToggle.tsx
import { Disclosure } from "@headlessui/react";
import cn6 from "classnames";
import { useContext } from "react";
import { Fragment as Fragment2, jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
var init_BlockHeadingToggle = __esm({
  "src/notion-blocks/BlockHeadingToggle.tsx"() {
    "use client";
    init_BlockRender();
    init_BsFillCaretRightFill();
  }
});

// src/notion-blocks/BlockHeading.tsx
import cn7 from "classnames";
import { get as get2 } from "lodash";
import { useContext as useContext2 } from "react";
import { Fragment as Fragment3, jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var init_BlockHeading = __esm({
  "src/notion-blocks/BlockHeading.tsx"() {
    "use client";
    init_BlockRender();
    init_block_helpers();
    init_CiLink();
    init_BlockHeadingToggle();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockNumberedListItem.tsx
import cn8 from "classnames";
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
var init_BlockNumberedListItem = __esm({
  "src/notion-blocks/BlockNumberedListItem.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockParagraph.tsx
import cn9 from "classnames";
import { jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
var init_BlockParagraph = __esm({
  "src/notion-blocks/BlockParagraph.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockQuote.tsx
import cn10 from "classnames";
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
var init_BlockQuote = __esm({
  "src/notion-blocks/BlockQuote.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/icons/BsCheckSquare.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var init_BsCheckSquare = __esm({
  "src/icons/BsCheckSquare.tsx"() {
  }
});

// src/icons/BsSquare.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var init_BsSquare = __esm({
  "src/icons/BsSquare.tsx"() {
  }
});

// src/notion-blocks/BlockToDo.tsx
import cn11 from "classnames";
import { jsx as jsx20, jsxs as jsxs10 } from "react/jsx-runtime";
var init_BlockToDo = __esm({
  "src/notion-blocks/BlockToDo.tsx"() {
    init_BsCheckSquare();
    init_BsSquare();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockToggle.tsx
import { Disclosure as Disclosure2 } from "@headlessui/react";
import cn12 from "classnames";
import { Fragment as Fragment4, jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
var init_BlockToggle = __esm({
  "src/notion-blocks/BlockToggle.tsx"() {
    "use client";
    init_block_helpers();
    init_BsFillCaretRightFill();
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
import { useRef, useState as useState2 } from "react";
import { jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
function BlockImage(props) {
  const [isImageReady, setIsImageReady] = useState2(false);
  const { block, className } = props;
  const width = Math.min(get3(block, "imageInfo.width", 1e3), 1e3);
  const height = Math.min(get3(block, "imageInfo.height", 700), 700);
  const blurDataURL = get3(block, "imageInfo.base64", defaultBlurDataURL);
  const caption = block?.image?.caption;
  const zoomRef = useRef(null);
  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom({
        background: "#000000a6",
        margin: 20
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
  return /* @__PURE__ */ jsxs12("div", { className: cn13(className, "flex flex-col justify-center items-center gap-2"), children: [
    block.imgUrl && /* @__PURE__ */ jsx22("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx22(
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
    caption && caption.length > 0 && /* @__PURE__ */ jsx22("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx22(BlockRichText, { richText }, index)) })
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
import { jsx as jsx23 } from "react/jsx-runtime";
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
        return /* @__PURE__ */ jsx23("div", { className: "mermaid flex justify-center", children: this.props.chart });
      }
    };
  }
});

// src/icons/FiCheck.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
function FiCheck(props) {
  return /* @__PURE__ */ jsx24(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx24("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}
var init_FiCheck = __esm({
  "src/icons/FiCheck.tsx"() {
  }
});

// src/icons/RxCopy.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
function RxCopy(props) {
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "0",
      viewBox: "0 0 15 15",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx25(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z",
          fill: "currentColor"
        }
      )
    }
  );
}
var init_RxCopy = __esm({
  "src/icons/RxCopy.tsx"() {
  }
});

// src/notion-blocks/BlockCode.tsx
var BlockCode_exports = {};
__export(BlockCode_exports, {
  default: () => BlockCode
});
import cn14 from "classnames";
import { useContext as useContext3, useState as useState3 } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx as jsx26, jsxs as jsxs13 } from "react/jsx-runtime";
function BlockCode(props) {
  const ctx = useContext3(BlockOptionContext);
  const { block, className } = props;
  const language = block?.code?.language?.toLowerCase() || defaultCodeLanguage;
  const [copied, setCopied] = useState3(false);
  const onSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1e3);
  };
  return /* @__PURE__ */ jsxs13("div", { className: cn14(className, "group"), children: [
    /* @__PURE__ */ jsxs13("div", { className: `language-${formatCodeLang(language)} syntax-highlighter relative text-[14px]`, children: [
      /* @__PURE__ */ jsx26(
        SyntaxHighlighter,
        {
          language: formatCodeLang(language),
          style: prism,
          className: "!my-0 syntax-highlighter-pre m2it-scrollbar m2it-scrollbar-small border !bg-slate-50",
          showLineNumbers: true,
          children: getJoinedRichText(block?.code?.rich_text)
        }
      ),
      /* @__PURE__ */ jsx26(
        "div",
        {
          className: cn14(
            "tooltip-auto !absolute right-2 top-2 duration-100 hover:cursor-pointer group-hover:opacity-100",
            {
              "opacity-0": !copied
            }
          ),
          "data-title": copied ? ctx?.blockCodeCopiedText || "Copied" : ctx?.blockCodeCopyText || "Copy",
          children: /* @__PURE__ */ jsx26(CopyToClipboard, { text: getJoinedRichText(block?.code?.rich_text), onCopy: onSuccess, children: /* @__PURE__ */ jsxs13("button", { children: [
            !copied && /* @__PURE__ */ jsx26(RxCopy, { className: "text-lg text-slate-400 hover:text-slate-700" }),
            copied && /* @__PURE__ */ jsx26(FiCheck, { className: "text-lg text-green-600" })
          ] }) })
        }
      )
    ] }),
    block?.code?.caption && /* @__PURE__ */ jsx26("div", { className: "italic opacity-60", children: block?.code?.caption?.map((richText, index) => /* @__PURE__ */ jsx26(BlockRichText, { richText }, index)) }),
    block?.code?.language === "mermaid" && /* @__PURE__ */ jsx26(Mermaid, { chart: getJoinedRichText(block?.code?.rich_text) })
  ] });
}
var formatCodeLang;
var init_BlockCode = __esm({
  "src/notion-blocks/BlockCode.tsx"() {
    "use client";
    init_BlockRender();
    init_Mermaid();
    init_block_helpers();
    init_FiCheck();
    init_RxCopy();
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
import { jsx as jsx27 } from "react/jsx-runtime";
function BlockEquation(props) {
  const { block, className } = props;
  return /* @__PURE__ */ jsx27("div", { className: cn15(className, "text-center overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsx27(
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
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
function BlockTable(props) {
  const { block, className } = props;
  const bodyRows = block?.table.has_row_header ? block?.["children"]?.slice(1) : block?.["children"];
  return /* @__PURE__ */ jsx28("div", { className: cn16(className, "w-full overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsxs14("table", { className: "table-auto", children: [
    block?.table?.has_row_header && /* @__PURE__ */ jsx28("thead", { children: trBlock({
      cells: block?.["children"]?.[0]?.table_row?.cells,
      isRowHeader: true,
      key: 0
    }) }),
    /* @__PURE__ */ jsx28("tbody", { children: bodyRows?.map(
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
  return /* @__PURE__ */ jsx28("tr", { children: cells.map((cell, index, _cells) => {
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
    return /* @__PURE__ */ jsx28("th", { className: cn16(cellClass, headerClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx28(BlockRichText, { richText }, index2)) }, key);
  } else {
    return /* @__PURE__ */ jsx28("td", { className: cn16(cellClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx28(BlockRichText, { richText }, index2)) }, key);
  }
}
var init_BlockTable = __esm({
  "src/notion-blocks/BlockTable.tsx"() {
    init_BlockRichText();
  }
});

// src/components/YoutubeEmbed.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
function YoutubeEmbed(props) {
  return /* @__PURE__ */ jsx29("div", { className: props.className, children: /* @__PURE__ */ jsx29(
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
import cn17 from "classnames";
import { get as get4 } from "lodash";
import { jsx as jsx30, jsxs as jsxs15 } from "react/jsx-runtime";
function BlockVideo(props) {
  const videoUrl = get4(props.block, "video.external.url");
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId)
    return null;
  const caption = get4(props.block, "video.caption");
  const title = caption ? getJoinedRichText(caption) : "";
  return /* @__PURE__ */ jsxs15("div", { className: cn17(props.className, "flex flex-col justify-center items-center gap-2"), children: [
    /* @__PURE__ */ jsx30("div", { className: "w-full", children: /* @__PURE__ */ jsx30(YoutubeEmbed, { id: videoId, title, className: "aspect-video w-full" }) }),
    caption && caption.length > 0 && /* @__PURE__ */ jsx30("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx30(BlockRichText, { richText }, index)) })
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
import cn18 from "classnames";
import { get as get5 } from "lodash";
import dynamic from "next/dynamic";
import { Fragment as Fragment5, jsx as jsx31 } from "react/jsx-runtime";
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
import { jsx as jsx32 } from "react/jsx-runtime";
var defaultBlockOptionContext, BlockOptionContext;
var init_BlockRender = __esm({
  "src/components/BlockRender.tsx"() {
    "use client";
    init_Renderer();
    defaultBlockOptionContext = {
      headingStyle: "hash",
      showAnchorRight: false,
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
import { useContext as useContext4 } from "react";
import { Fragment as Fragment6, jsx as jsx33, jsxs as jsxs16 } from "react/jsx-runtime";
function BlockText(props) {
  const ctx = useContext4(BlockOptionContext);
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ jsx33(Fragment6, { children: lines.map((line, index) => /* @__PURE__ */ jsxs16("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ jsx33("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !props.ignore?.includes("hyperlink") && props.richText.href) {
    if (new URL(props.richText.href).hostname.includes(ctx?.siteDomain) && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href, ctx?.siteDomain);
      return /* @__PURE__ */ jsx33(
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
      return /* @__PURE__ */ jsx33(
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
    return /* @__PURE__ */ jsx33(
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
    return /* @__PURE__ */ jsx33(
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
  return /* @__PURE__ */ jsx33(
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
function getUriFromUrl(url, domainSite) {
  const withoutProtocol = url.replace(/^(https?:\/\/)/, "");
  const withoutWWW = withoutProtocol.replace(/^www\./, "");
  const withoutTrailingSlashes = withoutWWW.replace(/\/+$/, "");
  const withoutDomain = withoutTrailingSlashes.replace(new RegExp(`^${domainSite}`), "");
  const withoutLocalhost = withoutDomain.replace(/^localhost:3000/, "");
  const slug = `${withoutLocalhost}`;
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
import { jsx as jsx34 } from "react/jsx-runtime";
function BlockInlineEquation(props) {
  return /* @__PURE__ */ jsx34("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ jsx34(
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
import { jsx as jsx35 } from "react/jsx-runtime";
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ jsx35(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ jsx35(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ jsx35(BlockText, { richText: props.richText });
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
import cn29 from "classnames";

// src/icons/HiOutlineDocumentText.tsx
import { jsx } from "react/jsx-runtime";
function HiOutlineDocumentText(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "1.5",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        }
      )
    }
  );
}

// src/post-types/PostCardWhiteBgBig.tsx
import cn21 from "classnames";
import Link2 from "next/link";

// src/components/Date.tsx
import Moment from "moment";
import { useEffect, useState } from "react";

// src/icons/BiDotsHorizontalRounded.tsx
import { jsx as jsx2 } from "react/jsx-runtime";

// src/components/Date.tsx
import { jsx as jsx3 } from "react/jsx-runtime";

// src/components/Excerpt.tsx
init_BlockRichText();
import { jsx as jsx36 } from "react/jsx-runtime";

// src/components/PostFeaturedImage.tsx
import cn20 from "classnames";

// src/components/ImageComponent.tsx
import Image2 from "next/image";
import { Fragment as Fragment7, jsx as jsx37 } from "react/jsx-runtime";

// src/components/PostFeaturedImage.tsx
import { Fragment as Fragment8, jsx as jsx38 } from "react/jsx-runtime";

// src/post-types/PostCardWhiteBgBig.tsx
import { Fragment as Fragment9, jsx as jsx39, jsxs as jsxs17 } from "react/jsx-runtime";
var CWBBHeightClass = "h-36";

// src/post-types/PostImageBackground.tsx
import cn22 from "classnames";
import Link3 from "next/link";
import { jsx as jsx40, jsxs as jsxs18 } from "react/jsx-runtime";
var PIBHeightClass = "h-36";

// src/post-types/PostTitleCateDate.tsx
import cn23 from "classnames";
import Link4 from "next/link";

// src/icons/IoBookOutline.tsx
import { jsx as jsx41 } from "react/jsx-runtime";

// src/post-types/PostTitleCateDate.tsx
import { jsx as jsx42, jsxs as jsxs19 } from "react/jsx-runtime";
var TCDFIHeightClass = "h-28";

// src/components/Carousel.tsx
import cn24 from "classnames";
import { useSnapCarousel } from "react-snap-carousel";

// src/icons/FaChevronLeft.tsx
import { jsx as jsx43 } from "react/jsx-runtime";
function FaChevronLeft(props) {
  return /* @__PURE__ */ jsx43(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 320 512",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx43("path", { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" })
    }
  );
}

// src/icons/FaChevronRight.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
function FaChevronRight(props) {
  return /* @__PURE__ */ jsx44(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 320 512",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx44("path", { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" })
    }
  );
}

// src/components/Carousel.tsx
import { jsx as jsx45, jsxs as jsxs20 } from "react/jsx-runtime";
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = useSnapCarousel();
  const arrowBtnClasses = cn24(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = cn24(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ jsxs20("div", { className: "relative", children: [
    /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsx45(
      "button",
      {
        onClick: () => prev(),
        className: cn24("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ jsx45(FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx45(
      "button",
      {
        onClick: () => next(),
        className: cn24("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ jsx45(FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx45("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ jsx45(
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
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ jsx45(
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
import cn28 from "classnames";
import React2 from "react";

// src/post-types/PostCardWave.tsx
import cn25 from "classnames";
import Link5 from "next/link";
import { jsx as jsx46, jsxs as jsxs21 } from "react/jsx-runtime";

// src/post-types/PostCardWhiteBg.tsx
import cn26 from "classnames";
import Link6 from "next/link";
import { jsx as jsx47, jsxs as jsxs22 } from "react/jsx-runtime";

// src/post-types/PostSimple.tsx
import cn27 from "classnames";
import Link7 from "next/link";
import { useEffect as useEffect2, useState as useState4 } from "react";

// src/helpers/helpers.ts
import slugify from "slugify";

// src/icons/FaPenNib.tsx
import { jsx as jsx48 } from "react/jsx-runtime";

// src/post-types/PostSimple.tsx
init_config();
import { jsx as jsx49, jsxs as jsxs23 } from "react/jsx-runtime";

// src/components/PostsList.tsx
import { jsx as jsx50, jsxs as jsxs24 } from "react/jsx-runtime";
var postListGridCLass = cn28(
  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-4"
);

// src/components/SkeletonPostList.tsx
import { Fragment as Fragment10, jsx as jsx51, jsxs as jsxs25 } from "react/jsx-runtime";
function SkeletonPostList(props) {
  return /* @__PURE__ */ jsxs25(Fragment10, { children: [
    (!props.listStyle || props.listStyle === "default") && /* @__PURE__ */ jsx51("div", { className: cn29(props.options?.className || postListGridCLass, "animate-pulse"), children: Array.from({ length: props.count }).map((_, i) => getSkeleton(i, props.postType)) }),
    props.listStyle === "carousel" && /* @__PURE__ */ jsx51(
      Carousel,
      {
        items: Array.from({ length: props.count }).map((_, i) => ({ id: i })),
        renderItem: ({ item, isSnapPoint }) => /* @__PURE__ */ jsx51(CarouselItem, { isSnapPoint, widthClass: "w-80", children: getSkeleton(item.id, props.postType) }, item.id)
      }
    )
  ] });
}
function getSkeleton(key, postType) {
  switch (postType) {
    case "PostTitleCateDate":
      return /* @__PURE__ */ jsx51(PostTitleCateDateSkeleton, {}, key);
    case "PostCardWhiteBgBig":
      return /* @__PURE__ */ jsx51(PostCardWhiteBgBigSkeleton, {}, key);
    case "PostImageBackground":
      return /* @__PURE__ */ jsx51(PostImageBackgroundSkeleton, {}, key);
    case "PostCardWave":
      return /* @__PURE__ */ jsx51(PostCardWaveSkeleton, {}, key);
    case "PostSimple":
      return /* @__PURE__ */ jsx51(PostSimpleSkeleton, {}, key);
    default:
      return /* @__PURE__ */ jsx51(PostTitleCateDateSkeleton, {}, key);
  }
}
var PostCardWaveSkeleton = () => /* @__PURE__ */ jsx51("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx51("div", { className: cn29("flex items-center justify-center w-full rounded-md bg-slate-200", "h-32"), children: /* @__PURE__ */ jsxs25("div", { className: "w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ jsx51("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ jsx51("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
var PostTitleCateDateSkeleton = () => /* @__PURE__ */ jsxs25("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ jsx51("div", { className: cn29("w-full rounded-md bg-slate-200", TCDFIHeightClass) }),
  /* @__PURE__ */ jsxs25("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ jsx51("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ jsx51("div", { className: "h-4 w-3/4 rounded-md bg-slate-200" })
  ] })
] });
var PostCardWhiteBgBigSkeleton = () => /* @__PURE__ */ jsxs25("div", { className: "flex flex-col justify-center", children: [
  /* @__PURE__ */ jsx51("div", { className: cn29("w-full rounded-md bg-slate-200", CWBBHeightClass) }),
  /* @__PURE__ */ jsxs25("div", { className: "flex flex-col items-center gap-1 p-2", children: [
    /* @__PURE__ */ jsx51("div", { className: "h-4 w-full rounded-md bg-slate-200" }),
    /* @__PURE__ */ jsxs25("div", { className: "w-full mt-2 px-2 flex flex-col items-center gap-1", children: [
      /* @__PURE__ */ jsx51("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ jsx51("div", { className: "h-2 w-full rounded-md bg-slate-200" }),
      /* @__PURE__ */ jsx51("div", { className: "h-2 w-3/4 rounded-md bg-slate-200" })
    ] })
  ] })
] });
var PostImageBackgroundSkeleton = () => /* @__PURE__ */ jsx51("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx51("div", { className: cn29("relative w-full rounded-md bg-slate-200", PIBHeightClass), children: /* @__PURE__ */ jsxs25("div", { className: "absolute bottom-0 left-0 w-full flex flex-col items-center gap-1 p-3", children: [
  /* @__PURE__ */ jsx51("div", { className: "h-4 w-full rounded-md bg-slate-300" }),
  /* @__PURE__ */ jsx51("div", { className: "h-4 w-3/4 rounded-md bg-slate-300" })
] }) }) });
var PostSimpleSkeleton = () => /* @__PURE__ */ jsxs25("div", { className: "flex items-center gap-3 py-3 px-2", children: [
  /* @__PURE__ */ jsx51("div", { children: /* @__PURE__ */ jsx51(HiOutlineDocumentText, { className: "text-xl text-slate-700" }) }),
  /* @__PURE__ */ jsx51("div", { className: "flex-1 flex justify-start", children: /* @__PURE__ */ jsx51("div", { className: "h-6 w-3/4 rounded-md bg-slate-200" }) }),
  /* @__PURE__ */ jsx51("div", { className: "h-4 w-[150px] rounded-md bg-slate-200" })
] });
export {
  SkeletonPostList as default
};
//# sourceMappingURL=SkeletonPostList.js.map