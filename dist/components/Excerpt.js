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
    "font-mono text-[85%] bg-[#ececec] text-[#067b26] p-[1px_4px_2px_4px] rounded break-words border-[1px_solid_#ddd]": annotations.code && !ignore?.includes("code"),
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
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var init_BlockBookmark = __esm({
  "src/notion-blocks/BlockBookmark.tsx"() {
    "use client";
  }
});

// src/icons/GoSquareFill.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var init_GoSquareFill = __esm({
  "src/icons/GoSquareFill.tsx"() {
  }
});

// src/icons/RxDot.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var init_RxDot = __esm({
  "src/icons/RxDot.tsx"() {
  }
});

// src/icons/RxDotFilled.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var init_RxDotFilled = __esm({
  "src/icons/RxDotFilled.tsx"() {
  }
});

// src/notion-blocks/BlockBulletedListItem.tsx
import cn3 from "classnames";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
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
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var init_BlockCallout = __esm({
  "src/notion-blocks/BlockCallout.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockColumnList.tsx
import cn5 from "classnames";
import { jsx as jsx7 } from "react/jsx-runtime";
var init_BlockColumnList = __esm({
  "src/notion-blocks/BlockColumnList.tsx"() {
    init_BlockRender();
  }
});

// src/icons/CiLink.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var init_CiLink = __esm({
  "src/icons/CiLink.tsx"() {
  }
});

// src/icons/BsFillCaretRightFill.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var init_BsFillCaretRightFill = __esm({
  "src/icons/BsFillCaretRightFill.tsx"() {
  }
});

// src/notion-blocks/BlockHeadingToggle.tsx
import { Disclosure } from "@headlessui/react";
import cn6 from "classnames";
import { useContext } from "react";
import { Fragment as Fragment2, jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
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
import { Fragment as Fragment3, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
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
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var init_BlockNumberedListItem = __esm({
  "src/notion-blocks/BlockNumberedListItem.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockParagraph.tsx
import cn9 from "classnames";
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var init_BlockParagraph = __esm({
  "src/notion-blocks/BlockParagraph.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockQuote.tsx
import cn10 from "classnames";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
var init_BlockQuote = __esm({
  "src/notion-blocks/BlockQuote.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/icons/BsCheckSquare.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var init_BsCheckSquare = __esm({
  "src/icons/BsCheckSquare.tsx"() {
  }
});

// src/icons/BsSquare.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var init_BsSquare = __esm({
  "src/icons/BsSquare.tsx"() {
  }
});

// src/notion-blocks/BlockToDo.tsx
import cn11 from "classnames";
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
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
import { Fragment as Fragment4, jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
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
import { useRef, useState } from "react";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
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
    block.imgUrl && /* @__PURE__ */ jsx19("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx19(
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
    caption && caption.length > 0 && /* @__PURE__ */ jsx19("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx19(BlockRichText, { richText }, index)) })
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
import { jsx as jsx20 } from "react/jsx-runtime";
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
        return /* @__PURE__ */ jsx20("div", { className: "mermaid flex justify-center", children: this.props.chart });
      }
    };
  }
});

// src/icons/FiCheck.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function FiCheck(props) {
  return /* @__PURE__ */ jsx21(
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
      children: /* @__PURE__ */ jsx21("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}
var init_FiCheck = __esm({
  "src/icons/FiCheck.tsx"() {
  }
});

// src/icons/RxCopy.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function RxCopy(props) {
  return /* @__PURE__ */ jsx22(
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
      children: /* @__PURE__ */ jsx22(
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
import { useContext as useContext3, useState as useState2 } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
function BlockCode(props) {
  const ctx = useContext3(BlockOptionContext);
  const { block, className } = props;
  const language = block?.code?.language?.toLowerCase() || defaultCodeLanguage;
  const [copied, setCopied] = useState2(false);
  const onSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1e3);
  };
  return /* @__PURE__ */ jsxs13("div", { className: cn14(className, "group"), children: [
    /* @__PURE__ */ jsxs13("div", { className: `language-${formatCodeLang(language)} syntax-highlighter relative text-[14px]`, children: [
      /* @__PURE__ */ jsx23(
        SyntaxHighlighter,
        {
          language: formatCodeLang(language),
          style: prism,
          className: "!my-0 syntax-highlighter-pre m2it-scrollbar m2it-scrollbar-small border !bg-slate-50",
          showLineNumbers: true,
          children: getJoinedRichText(block?.code?.rich_text)
        }
      ),
      /* @__PURE__ */ jsx23(
        "div",
        {
          className: cn14(
            "tooltip-auto !absolute right-2 top-2 duration-100 hover:cursor-pointer group-hover:opacity-100",
            {
              "opacity-0": !copied
            }
          ),
          "data-title": copied ? ctx?.blockCodeCopiedText || "Copied" : ctx?.blockCodeCopyText || "Copy",
          children: /* @__PURE__ */ jsx23(CopyToClipboard, { text: getJoinedRichText(block?.code?.rich_text), onCopy: onSuccess, children: /* @__PURE__ */ jsxs13("button", { children: [
            !copied && /* @__PURE__ */ jsx23(RxCopy, { className: "text-lg text-slate-400 hover:text-slate-700" }),
            copied && /* @__PURE__ */ jsx23(FiCheck, { className: "text-lg text-green-600" })
          ] }) })
        }
      )
    ] }),
    block?.code?.caption && /* @__PURE__ */ jsx23("div", { className: "italic opacity-60", children: block?.code?.caption?.map((richText, index) => /* @__PURE__ */ jsx23(BlockRichText, { richText }, index)) }),
    block?.code?.language === "mermaid" && /* @__PURE__ */ jsx23(Mermaid, { chart: getJoinedRichText(block?.code?.rich_text) })
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
import { jsx as jsx24 } from "react/jsx-runtime";
function BlockEquation(props) {
  const { block, className } = props;
  return /* @__PURE__ */ jsx24("div", { className: cn15(className, "text-center overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsx24(
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
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
function BlockTable(props) {
  const { block, className } = props;
  const bodyRows = block?.table.has_row_header ? block?.["children"]?.slice(1) : block?.["children"];
  return /* @__PURE__ */ jsx25("div", { className: cn16(className, "w-full overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsxs14("table", { className: "table-auto", children: [
    block?.table?.has_row_header && /* @__PURE__ */ jsx25("thead", { children: trBlock({
      cells: block?.["children"]?.[0]?.table_row?.cells,
      isRowHeader: true,
      key: 0
    }) }),
    /* @__PURE__ */ jsx25("tbody", { children: bodyRows?.map(
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
  return /* @__PURE__ */ jsx25("tr", { children: cells.map((cell, index, _cells) => {
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
    return /* @__PURE__ */ jsx25("th", { className: cn16(cellClass, headerClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx25(BlockRichText, { richText }, index2)) }, key);
  } else {
    return /* @__PURE__ */ jsx25("td", { className: cn16(cellClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx25(BlockRichText, { richText }, index2)) }, key);
  }
}
var init_BlockTable = __esm({
  "src/notion-blocks/BlockTable.tsx"() {
    init_BlockRichText();
  }
});

// src/components/YoutubeEmbed.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function YoutubeEmbed(props) {
  return /* @__PURE__ */ jsx26("div", { className: props.className, children: /* @__PURE__ */ jsx26(
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
import { jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
function BlockVideo(props) {
  const videoUrl = get4(props.block, "video.external.url");
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId)
    return null;
  const caption = get4(props.block, "video.caption");
  const title = caption ? getJoinedRichText(caption) : "";
  return /* @__PURE__ */ jsxs15("div", { className: cn17(props.className, "flex flex-col justify-center items-center gap-2"), children: [
    /* @__PURE__ */ jsx27("div", { className: "w-full", children: /* @__PURE__ */ jsx27(YoutubeEmbed, { id: videoId, title, className: "aspect-video w-full" }) }),
    caption && caption.length > 0 && /* @__PURE__ */ jsx27("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx27(BlockRichText, { richText }, index)) })
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
import { Fragment as Fragment5, jsx as jsx28 } from "react/jsx-runtime";
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
import { jsx as jsx29 } from "react/jsx-runtime";
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
import { Fragment as Fragment6, jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
function BlockText(props) {
  const ctx = useContext4(BlockOptionContext);
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ jsx30(Fragment6, { children: lines.map((line, index) => /* @__PURE__ */ jsxs16("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ jsx30("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !props.ignore?.includes("hyperlink") && props.richText.href && isValidUrl(props.richText.href)) {
    if (new URL(props.richText.href).hostname.includes(ctx?.siteDomain) && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href, ctx?.siteDomain);
      return /* @__PURE__ */ jsx30(
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
      return /* @__PURE__ */ jsx30(
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
    return /* @__PURE__ */ jsx30(
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
    return /* @__PURE__ */ jsx30(
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
  return /* @__PURE__ */ jsx30(
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
function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
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
import { jsx as jsx31 } from "react/jsx-runtime";
function BlockInlineEquation(props) {
  return /* @__PURE__ */ jsx31("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ jsx31(
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
import { jsx as jsx32 } from "react/jsx-runtime";
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ jsx32(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ jsx32(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ jsx32(BlockText, { richText: props.richText });
  }
}
var DynamicInlineEquation;
var init_BlockRichText = __esm({
  "src/notion-blocks/BlockRichText.tsx"() {
    init_BlockText();
    DynamicInlineEquation = dynamic2(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
  }
});

// src/components/Excerpt.tsx
init_BlockRichText();
import { jsx as jsx33 } from "react/jsx-runtime";
function Excerpt(props) {
  if (!props.excerpt || !props.excerpt.length) {
    if (props.defaultExcerpt)
      return /* @__PURE__ */ jsx33("span", { children: props.defaultExcerpt });
    return "Undefined excerpt";
  }
  return /* @__PURE__ */ jsx33("span", { children: props.excerpt.map((richText, index) => /* @__PURE__ */ jsx33(BlockRichText, { richText, ignore: ["hyperlink"] }, index)) });
}
export {
  Excerpt as default
};
//# sourceMappingURL=Excerpt.js.map