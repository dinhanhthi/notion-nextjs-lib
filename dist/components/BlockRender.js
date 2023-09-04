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
function getIndentLevelClass(opts) {
  const { level, isList, insideList, insideColumn, insideQuoteCallout, insideToggle } = opts;
  const reduceVSpace = insideList || insideColumn || insideQuoteCallout || isList;
  const reducedVSpaceClass = "my-2";
  const normalVSpaceClass = "my-3";
  switch (level) {
    case 0:
      return cn("pl-0", {
        [normalVSpaceClass]: !reduceVSpace && !insideColumn,
        [reducedVSpaceClass]: reduceVSpace && !insideColumn,
        "my-0": insideColumn
      });
    case 1:
      return cn("pl-4", {
        [reducedVSpaceClass]: reduceVSpace,
        [normalVSpaceClass]: !reduceVSpace,
        "!pl-6": insideList && !isList,
        "!pl-0": insideQuoteCallout && insideToggle
      });
    case 2:
      return cn("pl-6", {
        [reducedVSpaceClass]: reduceVSpace,
        [normalVSpaceClass]: !reduceVSpace,
        "!pl-4": insideList && insideQuoteCallout
      });
    case 3:
      return cn("pl-8", {
        [reducedVSpaceClass]: reduceVSpace,
        [normalVSpaceClass]: !reduceVSpace,
        "!pl-6": insideList && insideQuoteCallout
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
var init_block_helpers = __esm({
  "src/helpers/block-helpers.ts"() {
  }
});

// src/notion-blocks/BlockBookmark.tsx
import cn2 from "classnames";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function BlockBookmark(props) {
  const data = props.block.bookmark;
  return /* @__PURE__ */ jsx(Fragment, { children: data && /* @__PURE__ */ jsxs(
    "a",
    {
      className: cn2(
        "flex gap-4 w-full overflow-hidden rounded-md border border-slate-200 p-3",
        "hover:cursor-pointer hover:border-sky-300 hover:shadow-sm"
      ),
      href: data.url,
      target: "_blank",
      rel: "noreferrer",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-[4_1_180px] flex-col justify-between gap-4 overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("div", { className: "truncate font-normal", children: data.title }),
            /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-normal text-slate-600", children: data.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("div", { className: "relative h-4 w-4 shrink-0", children: /* @__PURE__ */ jsx("img", { className: "h-full w-full", src: data.favicon, alt: data.title }) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-normal text-slate-500 truncate", children: data.url })
          ] })
        ] }),
        data.imageSrc && /* @__PURE__ */ jsx("div", { className: "relative hidden flex-[1_1_100px] sm:block", children: /* @__PURE__ */ jsx("img", { className: "h-full w-full", src: data.imageSrc, alt: data.title }) })
      ]
    }
  ) });
}
var init_BlockBookmark = __esm({
  "src/notion-blocks/BlockBookmark.tsx"() {
    "use client";
  }
});

// src/icons/GoSquareFill.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function GoSquareFill(props) {
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx2("path", { d: "M7.75 6h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 18h-8.5A1.75 1.75 0 0 1 6 16.25v-8.5C6 6.784 6.784 6 7.75 6Z" })
    }
  );
}
var init_GoSquareFill = __esm({
  "src/icons/GoSquareFill.tsx"() {
  }
});

// src/icons/RxDot.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function RxDot(props) {
  return /* @__PURE__ */ jsx3(
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
      children: /* @__PURE__ */ jsx3(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.5 9.125C8.39746 9.125 9.125 8.39746 9.125 7.5C9.125 6.60254 8.39746 5.875 7.5 5.875C6.60254 5.875 5.875 6.60254 5.875 7.5C5.875 8.39746 6.60254 9.125 7.5 9.125ZM7.5 10.125C8.94975 10.125 10.125 8.94975 10.125 7.5C10.125 6.05025 8.94975 4.875 7.5 4.875C6.05025 4.875 4.875 6.05025 4.875 7.5C4.875 8.94975 6.05025 10.125 7.5 10.125Z",
          fill: "currentColor"
        }
      )
    }
  );
}
var init_RxDot = __esm({
  "src/icons/RxDot.tsx"() {
  }
});

// src/icons/RxDotFilled.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function RxDotFilled(props) {
  return /* @__PURE__ */ jsx4(
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
      children: /* @__PURE__ */ jsx4(
        "path",
        {
          d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
          fill: "currentColor"
        }
      )
    }
  );
}
var init_RxDotFilled = __esm({
  "src/icons/RxDotFilled.tsx"() {
  }
});

// src/notion-blocks/BlockText.tsx
import cn3 from "classnames";
import { get } from "lodash";
import Link from "next/link";
import { useContext } from "react";
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function BlockText(props) {
  const ctx = useContext(BlockOptionContext);
  if (props.richText.plain_text.includes("\n")) {
    const lines = props.richText.plain_text.split("\n");
    return /* @__PURE__ */ jsx5(Fragment2, { children: lines.map((line, index) => /* @__PURE__ */ jsxs2("span", { children: [
      line,
      index !== lines.length - 1 && /* @__PURE__ */ jsx5("br", {})
    ] }, index)) });
  }
  if (props.richText.type === "text" && !props.ignore?.includes("hyperlink") && props.richText.href && isValidUrl(props.richText.href)) {
    if (new URL(props.richText.href).hostname.includes(ctx?.siteDomain) && !props.richText.href.includes("@")) {
      const uri = getUriFromUrl(props.richText.href, ctx?.siteDomain);
      return /* @__PURE__ */ jsx5(
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
      return /* @__PURE__ */ jsx5(
        "a",
        {
          className: cn3(
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
  if (!props.ignore?.includes("hyperlink") && props.richText.type === "mention" && props.richText.mention?.type === "page" && get(props.richText, "mention.page.uri")) {
    return /* @__PURE__ */ jsx5(
      Link,
      {
        className: generateTextAnnotationClasses(
          props.richText.annotations,
          props.ignore
        ),
        href: get(props.richText, "mention.page.uri", "/"),
        children: props.richText.plain_text
      }
    );
  }
  if (props.richText.type === "mention" && props.richText.mention?.type === "date") {
    return /* @__PURE__ */ jsx5(
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
  return /* @__PURE__ */ jsx5(
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
function getUriFromUrl(url, siteDomain) {
  const withoutProtocol = url.replace(/^(https?:\/\/)/, "");
  const withoutWWW = withoutProtocol.replace(/^www\./, "");
  const withoutTrailingSlashes = withoutWWW.replace(/\/+$/, "");
  const withoutDomain = withoutTrailingSlashes.replace(new RegExp(`^${siteDomain}`), "");
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

// src/notion-blocks/BlockEquation.tsx
var BlockEquation_exports = {};
__export(BlockEquation_exports, {
  default: () => BlockEquation,
  mathFontSize: () => mathFontSize
});
import Katex from "@matejmazur/react-katex";
import cn4 from "classnames";
import { jsx as jsx6 } from "react/jsx-runtime";
function BlockEquation(props) {
  const { block, className } = props;
  return /* @__PURE__ */ jsx6("div", { className: cn4(className, "text-center overflow-auto m2it-scrollbar m2it-scrollbar-small"), children: /* @__PURE__ */ jsx6(
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

// src/notion-blocks/BlockInlineEquation.tsx
var BlockInlineEquation_exports = {};
__export(BlockInlineEquation_exports, {
  default: () => BlockInlineEquation
});
import Katex2 from "@matejmazur/react-katex";
import { jsx as jsx7 } from "react/jsx-runtime";
function BlockInlineEquation(props) {
  return /* @__PURE__ */ jsx7("span", { className: generateTextAnnotationClasses(props.equation.annotations), children: /* @__PURE__ */ jsx7(
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
import dynamic from "next/dynamic";
import { jsx as jsx8 } from "react/jsx-runtime";
function BlockRichText(props) {
  switch (props.richText.type) {
    case "text":
    case "mention":
      return /* @__PURE__ */ jsx8(BlockText, { richText: props.richText, ignore: props.ignore });
    case "equation":
      return /* @__PURE__ */ jsx8(
        DynamicInlineEquation,
        {
          equation: props.richText,
          fontSize: props.mathFontSize
        }
      );
    default:
      return /* @__PURE__ */ jsx8(BlockText, { richText: props.richText });
  }
}
var DynamicInlineEquation;
var init_BlockRichText = __esm({
  "src/notion-blocks/BlockRichText.tsx"() {
    init_BlockText();
    DynamicInlineEquation = dynamic(() => Promise.resolve().then(() => (init_BlockInlineEquation(), BlockInlineEquation_exports)));
  }
});

// src/notion-blocks/BlockBulletedListItem.tsx
import cn5 from "classnames";
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
function BlockBulletedListItem(props) {
  const { block, className, children } = props;
  return /* @__PURE__ */ jsxs3("div", { className: cn5(className), children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-start gap-1", children: [
      /* @__PURE__ */ jsx9("div", { className: "flex items-center justify-center", children: bulletType(block["list_item"]) }),
      /* @__PURE__ */ jsx9("div", { className: "block", children: block?.bulleted_list_item?.rich_text.map((richText, index) => /* @__PURE__ */ jsx9(BlockRichText, { richText }, index)) })
    ] }),
    children
  ] });
}
function bulletType(level) {
  switch (level) {
    case "1":
      return /* @__PURE__ */ jsx9(RxDotFilled, { className: "mt-0.5 text-xl text-slate-600" });
    case "2":
      return /* @__PURE__ */ jsx9(RxDot, { className: "mt-1 text-lg" });
    case "3":
      return /* @__PURE__ */ jsx9(GoSquareFill, { className: "mr-1 mt-1.5 text-xs" });
  }
}
var init_BlockBulletedListItem = __esm({
  "src/notion-blocks/BlockBulletedListItem.tsx"() {
    init_GoSquareFill();
    init_RxDot();
    init_RxDotFilled();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockCallout.tsx
import cn6 from "classnames";
import { get as get2 } from "lodash";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
function BlockCallout(props) {
  const { block, children, className } = props;
  return /* @__PURE__ */ jsx10("div", { className: cn6(className), children: /* @__PURE__ */ jsxs4("div", { className: cn6("flex rounded-md", mapColorClass(block?.callout?.color)), children: [
    get2(block, "callout.icon.emoji") && /* @__PURE__ */ jsx10("div", { className: "text-2xl pl-4 pr-2 py-3", children: get2(block, "callout.icon.emoji") }),
    /* @__PURE__ */ jsxs4("div", { className: "py-4 pl-2 pr-4 w-full", children: [
      block?.callout?.rich_text.map((richText, index) => /* @__PURE__ */ jsx10(BlockRichText, { richText }, index)),
      !!children && /* @__PURE__ */ jsx10("div", { className: "pt-2 m2it-inside-box", children })
    ] })
  ] }) });
}
var init_BlockCallout = __esm({
  "src/notion-blocks/BlockCallout.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockColumnList.tsx
import cn7 from "classnames";
import { jsx as jsx11 } from "react/jsx-runtime";
function BlockColumnList(props) {
  const { block, className } = props;
  const children = block["children"];
  if (children?.length === 0)
    return null;
  return /* @__PURE__ */ jsx11("div", { className: cn7("w-full grid gap-3", parseColumnClasses(children.length), className), children: children.map((col, index1) => {
    return /* @__PURE__ */ jsx11("div", { className: cn7("w-full flex flex-col gap-3"), children: col["children"].map((child, index2) => /* @__PURE__ */ jsx11(BlockRender, { block: child, level: 0, insideColumn: true }, index2)) }, index1);
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
var init_BlockColumnList = __esm({
  "src/notion-blocks/BlockColumnList.tsx"() {
    init_BlockRender();
  }
});

// src/icons/CiLink.tsx
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
function CiLink(props) {
  return /* @__PURE__ */ jsx12(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx12("g", { id: "Link", children: /* @__PURE__ */ jsxs5("g", { children: [
        /* @__PURE__ */ jsx12("path", { d: "M10.9,8a4.055,4.055,0,0,1,1.352.135,2.511,2.511,0,0,1-.7,4.863.5.5,0,0,0,0,1,3.508,3.508,0,0,0,2.944-5.2A3.557,3.557,0,0,0,11.434,7H5.59A3.5,3.5,0,0,0,5.4,14c.724.041,1.458,0,2.183,0a.5.5,0,0,0,0-1h0c-1.323,0-2.915.262-3.891-.843A2.522,2.522,0,0,1,5.59,8Z" }),
        /* @__PURE__ */ jsx12("path", { d: "M18.41,17a3.5,3.5,0,0,0,.192-6.994c-.724-.041-1.458,0-2.183,0a.5.5,0,0,0,0,1h0c1.323,0,2.915-.262,3.891.843A2.522,2.522,0,0,1,18.41,16H13.1a4.055,4.055,0,0,1-1.352-.135,2.511,2.511,0,0,1,.7-4.863.5.5,0,0,0,0-1,3.508,3.508,0,0,0-2.944,5.2A3.557,3.557,0,0,0,12.566,17Z" })
      ] }) })
    }
  );
}
var init_CiLink = __esm({
  "src/icons/CiLink.tsx"() {
  }
});

// src/icons/BsFillCaretRightFill.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function BsFillCaretRightFill(props) {
  return /* @__PURE__ */ jsx13(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 16 16",
      className: props.className,
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx13("path", { d: "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" })
    }
  );
}
var init_BsFillCaretRightFill = __esm({
  "src/icons/BsFillCaretRightFill.tsx"() {
  }
});

// src/notion-blocks/BlockHeadingToggle.tsx
import { Disclosure } from "@headlessui/react";
import cn8 from "classnames";
import { useContext as useContext2 } from "react";
import { Fragment as Fragment3, jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
function BlockHeadingToggle(props) {
  const ctx = useContext2(BlockOptionContext);
  return /* @__PURE__ */ jsx14(Disclosure, { defaultOpen: false, children: ({ open }) => /* @__PURE__ */ jsxs6(Fragment3, { children: [
    /* @__PURE__ */ jsxs6("div", { className: cn8("flex w-full items-center gap-1 ml-[-10px]", props.className), children: [
      /* @__PURE__ */ jsx14(Disclosure.Button, { className: "rounded-md p-1 hover:bg-[#99989824]", children: /* @__PURE__ */ jsx14(
        BsFillCaretRightFill,
        {
          className: cn8("text-lg transform ease-in-out transition-all duration-[400ms]", {
            "rotate-90": open,
            "rotate-0": !open
          })
        }
      ) }),
      props.headingElement,
      ctx?.showAnchorRight && props.anchorRight
    ] }),
    /* @__PURE__ */ jsx14(Disclosure.Panel, { children: /* @__PURE__ */ jsx14("div", { children: props.children }) })
  ] }) });
}
var init_BlockHeadingToggle = __esm({
  "src/notion-blocks/BlockHeadingToggle.tsx"() {
    "use client";
    init_BlockRender();
    init_BsFillCaretRightFill();
  }
});

// src/notion-blocks/BlockHeading.tsx
import cn9 from "classnames";
import { get as get3 } from "lodash";
import { useContext as useContext3 } from "react";
import { Fragment as Fragment4, jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
function BlockHeading(props) {
  const ctx = useContext3(BlockOptionContext);
  const { type, block, className, children } = props;
  let heading;
  let headingElement;
  let anchorHashEl;
  const h1Size = "text-3xl";
  const h2Size = "text-2xl";
  const h3Size = "text-[1.35rem]";
  const headingClass = cn9("mt-0", ctx?.headingScrollMarginTopClass || "scroll-mt-[70px]");
  const id = convertHeadingIdToSlug(block.id, block[`${block.type}`]?.rich_text);
  const anchorRight = /* @__PURE__ */ jsx15(
    "a",
    {
      href: `#${id}`,
      className: cn9(
        "inline-block",
        "opacity-0 group-hover:opacity-100 text-slate-500 hover:m2it-link-hover text-[25px]"
      ),
      children: /* @__PURE__ */ jsx15(CiLink, {})
    }
  );
  switch (type) {
    case "h1":
      heading = block?.heading_1;
      headingElement = /* @__PURE__ */ jsx15("h1", { id, className: cn9(h1Size, headingClass), children: insideHeading(heading) });
      anchorHashEl = /* @__PURE__ */ jsx15("a", { href: `#${id}`, className: cn9("text-sky-600 lg:-ml-6", h1Size), children: "#" });
      break;
    case "h2":
      heading = block?.heading_2;
      headingElement = /* @__PURE__ */ jsx15("h2", { id, className: cn9(h2Size, headingClass), children: insideHeading(heading) });
      anchorHashEl = /* @__PURE__ */ jsx15("a", { href: `#${id}`, className: cn9("text-sky-600 lg:-ml-6", h2Size), children: "#" });
      break;
    case "h3":
      heading = block?.heading_3;
      headingElement = /* @__PURE__ */ jsx15("h3", { id, className: cn9(h3Size, headingClass), children: insideHeading(heading) });
      anchorHashEl = /* @__PURE__ */ jsx15("a", { href: `#${id}`, className: cn9("text-orange-700 lg:-ml-8", h3Size), children: "##" });
      break;
  }
  return /* @__PURE__ */ jsx15("div", { className: props.outerClassName, children: /* @__PURE__ */ jsxs7(
    "div",
    {
      className: cn9(
        mapColorClass(heading?.color),
        className,
        {
          "flex items-start gap-2": !get3(heading, "is_toggleable") && !ctx?.disableAnchorHeading
        },
        "group",
        boderLeftClass(type, ctx, get3(heading, "is_toggleable"))
      ),
      children: [
        get3(heading, "is_toggleable") && children && /* @__PURE__ */ jsx15(
          BlockHeadingToggle,
          {
            headingElement,
            anchorRight,
            className: cn9(boderLeftClass(type, ctx, false), "!pl-0 !ml-0"),
            children
          }
        ),
        !get3(heading, "is_toggleable") && /* @__PURE__ */ jsxs7("div", { className: "w-full flex items-center gap-2", children: [
          !ctx?.disableAnchorHeading && (!ctx?.headingStyle || ctx?.headingStyle === "hash") && anchorHashEl,
          headingElement,
          ctx?.showAnchorRight && anchorRight
        ] })
      ]
    }
  ) });
}
function insideHeading(heading) {
  return /* @__PURE__ */ jsx15(Fragment4, { children: heading?.rich_text.map((richText, index) => /* @__PURE__ */ jsx15(BlockRichText, { richText }, index)) });
}
var boderLeftClass;
var init_BlockHeading = __esm({
  "src/notion-blocks/BlockHeading.tsx"() {
    "use client";
    init_BlockRender();
    init_block_helpers();
    init_CiLink();
    init_BlockHeadingToggle();
    init_BlockRichText();
    boderLeftClass = (type, ctx, isToggle) => {
      if (!["borderLeft", "borderLeftH2Only"].includes(ctx?.headingStyle) || isToggle)
        return "";
      const common = "border-l-[2px] rounded-l-sm pl-2 bg-gradient-to-r py-1";
      switch (type) {
        case "h1":
          return "border-sky-300 from-sky-50 to-white " + common;
        case "h2":
          return "border-sky-300 from-sky-50 to-white " + common;
        case "h3":
          return ctx?.headingStyle === "borderLeftH2Only" ? "" : "border-orange-300 from-orange-50 to-white " + common;
      }
    };
  }
});

// src/notion-blocks/BlockNumberedListItem.tsx
import cn10 from "classnames";
import { jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
function BlockNumberedListItem(props) {
  const { block, className, children } = props;
  return /* @__PURE__ */ jsxs8("div", { className: cn10(className), children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex items-baseline gap-2", children: [
      /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center pl-1", children: block["list_item"] }),
      /* @__PURE__ */ jsx16("div", { className: "block", children: block?.numbered_list_item?.rich_text.map((richText, index) => /* @__PURE__ */ jsx16(BlockRichText, { richText }, index)) })
    ] }),
    children
  ] });
}
var init_BlockNumberedListItem = __esm({
  "src/notion-blocks/BlockNumberedListItem.tsx"() {
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockParagraph.tsx
import cn11 from "classnames";
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
function BlockParagraph(props) {
  const { block, children, className } = props;
  return (
    // We don't use <p> here because there may be other not-supported tags in the <p> tag.
    /* @__PURE__ */ jsxs9("div", { className: cn11(mapColorClass(block?.paragraph?.color), className), children: [
      block?.paragraph?.rich_text.map((richText, index) => /* @__PURE__ */ jsx17(BlockRichText, { richText }, index)),
      children
    ] })
  );
}
var init_BlockParagraph = __esm({
  "src/notion-blocks/BlockParagraph.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockQuote.tsx
import cn12 from "classnames";
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
function BlockQuote(props) {
  const { block, children, className } = props;
  return /* @__PURE__ */ jsx18("div", { className: cn12(className), children: /* @__PURE__ */ jsxs10(
    "div",
    {
      className: cn12(
        mapColorClass(block?.quote?.color),
        "border border-y-0 border-r-0 border-l-4 border-slate-500",
        {
          "py-2": !children,
          "pt-2 pb-[0.1px]": children
        }
      ),
      children: [
        /* @__PURE__ */ jsx18("div", { className: cn12("pl-4"), children: block?.quote?.rich_text.map((richText, index) => /* @__PURE__ */ jsx18(BlockRichText, { richText }, index)) }),
        children
      ]
    }
  ) });
}
var init_BlockQuote = __esm({
  "src/notion-blocks/BlockQuote.tsx"() {
    init_block_helpers();
    init_BlockRichText();
  }
});

// src/icons/BsCheckSquare.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
function BsCheckSquare(props) {
  return /* @__PURE__ */ jsx19(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx19("path", { d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" })
    }
  );
}
var init_BsCheckSquare = __esm({
  "src/icons/BsCheckSquare.tsx"() {
  }
});

// src/icons/BsSquare.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function BsSquare(props) {
  return /* @__PURE__ */ jsx20(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx20("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" })
    }
  );
}
var init_BsSquare = __esm({
  "src/icons/BsSquare.tsx"() {
  }
});

// src/notion-blocks/BlockToDo.tsx
import cn13 from "classnames";
import { jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
function BlockToDo(props) {
  const { block, className, children } = props;
  return /* @__PURE__ */ jsxs11("div", { className: cn13(className), children: [
    /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-2", children: [
      block?.to_do?.checked && /* @__PURE__ */ jsx21(BsCheckSquare, { className: "text-slate-500" }),
      !block?.to_do?.checked && /* @__PURE__ */ jsx21(BsSquare, {}),
      block?.to_do?.rich_text.map((richText, index) => /* @__PURE__ */ jsx21(BlockRichText, { richText }, index))
    ] }),
    children
  ] });
}
var init_BlockToDo = __esm({
  "src/notion-blocks/BlockToDo.tsx"() {
    init_BsCheckSquare();
    init_BsSquare();
    init_BlockRichText();
  }
});

// src/notion-blocks/BlockToggle.tsx
import { Disclosure as Disclosure2 } from "@headlessui/react";
import cn14 from "classnames";
import { Fragment as Fragment5, jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
function BlockToggle(props) {
  const { block, children, className } = props;
  return /* @__PURE__ */ jsx22(
    "div",
    {
      className: cn14(
        mapColorClass(block?.toggle?.color),
        "rounded-md border-[0.5px] border-slate-200",
        className
      ),
      children: /* @__PURE__ */ jsx22(Disclosure2, { defaultOpen: false, children: ({ open }) => /* @__PURE__ */ jsxs12(Fragment5, { children: [
        /* @__PURE__ */ jsxs12(
          Disclosure2.Button,
          {
            className: cn14("flex gap-2 w-full items-start p-2 rounded-md", {
              "bg-gray-100 hover:bg-gray-200": open,
              "bg-gray-50 hover:bg-gray-100": !open
            }),
            children: [
              /* @__PURE__ */ jsx22(
                BsFillCaretRightFill,
                {
                  className: cn14(
                    "mt-[4px] text-lg transform ease-in-out transition-all duration-[400ms]",
                    {
                      "rotate-90": open,
                      "rotate-0": !open
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx22("div", { className: "text-start", children: block?.toggle?.rich_text.map((richText, index) => /* @__PURE__ */ jsx22(BlockRichText, { richText }, index)) })
            ]
          }
        ),
        !!children && /* @__PURE__ */ jsx22(Disclosure2.Panel, { className: "pr-4", children })
      ] }) })
    }
  );
}
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
import cn15 from "classnames";
import { get as get4 } from "lodash";
import mediumZoom from "medium-zoom";
import Image from "next/image";
import { useRef, useState } from "react";
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
function BlockImage(props) {
  const [isImageReady, setIsImageReady] = useState(false);
  const { block, className } = props;
  const width = Math.min(get4(block, "imageInfo.width", 1e3), 1e3);
  const height = Math.min(get4(block, "imageInfo.height", 700), 700);
  const blurDataURL = get4(block, "imageInfo.base64", defaultBlurDataURL);
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
  return /* @__PURE__ */ jsxs13("div", { className: cn15(className, "flex flex-col justify-center items-center gap-2"), children: [
    block.imgUrl && /* @__PURE__ */ jsx23("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx23(
      Image,
      {
        className: cn15({
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
    caption && caption.length > 0 && /* @__PURE__ */ jsx23("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => /* @__PURE__ */ jsx23(BlockRichText, { richText }, index)) })
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
import { jsx as jsx24 } from "react/jsx-runtime";
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
        return /* @__PURE__ */ jsx24("div", { className: "mermaid flex justify-center", children: this.props.chart });
      }
    };
  }
});

// src/icons/FiCheck.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
function FiCheck(props) {
  return /* @__PURE__ */ jsx25(
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
      children: /* @__PURE__ */ jsx25("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}
var init_FiCheck = __esm({
  "src/icons/FiCheck.tsx"() {
  }
});

// src/icons/RxCopy.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function RxCopy(props) {
  return /* @__PURE__ */ jsx26(
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
      children: /* @__PURE__ */ jsx26(
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
import cn16 from "classnames";
import { useContext as useContext4, useState as useState2 } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx as jsx27, jsxs as jsxs14 } from "react/jsx-runtime";
function BlockCode(props) {
  const ctx = useContext4(BlockOptionContext);
  const { block, className } = props;
  const language = block?.code?.language?.toLowerCase() || defaultCodeLanguage;
  const [copied, setCopied] = useState2(false);
  const onSuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1e3);
  };
  return /* @__PURE__ */ jsxs14("div", { className: cn16(className, "group"), children: [
    /* @__PURE__ */ jsxs14(
      "div",
      {
        className: `language-${formatCodeLang(language)} syntax-highlighter relative text-[14px]`,
        children: [
          /* @__PURE__ */ jsx27(
            SyntaxHighlighter,
            {
              language: formatCodeLang(language),
              style: prism,
              className: cn16(
                "!my-0 syntax-highlighter-pre m2it-scrollbar m2it-scrollbar-small border !bg-slate-50",
                "max-h-[400px]"
              ),
              showLineNumbers: true,
              children: getJoinedRichText(block?.code?.rich_text)
            }
          ),
          /* @__PURE__ */ jsx27(
            "div",
            {
              className: cn16(
                "tooltip-auto !absolute right-2 top-2 duration-100 hover:cursor-pointer group-hover:opacity-100",
                {
                  "opacity-0": !copied
                }
              ),
              "data-title": copied ? ctx?.blockCodeCopiedText || "Copied" : ctx?.blockCodeCopyText || "Copy",
              children: /* @__PURE__ */ jsx27(CopyToClipboard, { text: getJoinedRichText(block?.code?.rich_text), onCopy: onSuccess, children: /* @__PURE__ */ jsxs14("button", { children: [
                !copied && /* @__PURE__ */ jsx27(RxCopy, { className: "text-lg text-slate-400 hover:text-slate-700" }),
                copied && /* @__PURE__ */ jsx27(FiCheck, { className: "text-lg text-green-600" })
              ] }) })
            }
          )
        ]
      }
    ),
    block?.code?.caption && /* @__PURE__ */ jsx27("div", { className: "italic opacity-60", children: block?.code?.caption?.map((richText, index) => /* @__PURE__ */ jsx27(BlockRichText, { richText }, index)) }),
    block?.code?.language === "mermaid" && /* @__PURE__ */ jsx27(Mermaid, { chart: getJoinedRichText(block?.code?.rich_text) })
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

// src/notion-blocks/BlockTable.tsx
var BlockTable_exports = {};
__export(BlockTable_exports, {
  default: () => BlockTable
});
import cn17 from "classnames";
import { jsx as jsx28, jsxs as jsxs15 } from "react/jsx-runtime";
function BlockTable(props) {
  const { block, className } = props;
  const bodyRows = block?.table.has_row_header ? block?.["children"]?.slice(1) : block?.["children"];
  return /* @__PURE__ */ jsx28("div", { className: cn17(className, "w-full overflow-auto md:overflow-visible"), children: /* @__PURE__ */ jsxs15("table", { className: "table-auto my-0", children: [
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
    return /* @__PURE__ */ jsx28("th", { className: cn17(cellClass, headerClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx28(BlockRichText, { richText }, index2)) }, key);
  } else {
    return /* @__PURE__ */ jsx28("td", { className: cn17(cellClass), children: cell.map((richText, index2) => /* @__PURE__ */ jsx28(BlockRichText, { richText }, index2)) }, key);
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
import cn18 from "classnames";
import { get as get5 } from "lodash";
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
function BlockVideo(props) {
  const videoUrl = get5(props.block, "video.external.url");
  const videoId = getYoutubeVideoId(videoUrl);
  if (!videoId)
    return null;
  const caption = get5(props.block, "video.caption");
  const title = caption ? getJoinedRichText(caption) : "";
  return /* @__PURE__ */ jsxs16("div", { className: cn18(props.className, "flex flex-col justify-center items-center gap-2"), children: [
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
import cn19 from "classnames";
import { get as get6 } from "lodash";
import dynamic2 from "next/dynamic";
import { Fragment as Fragment6, jsx as jsx31 } from "react/jsx-runtime";
function Renderer(props) {
  const { block, level } = props;
  let children;
  const isList = ["bulleted_list_item", "numbered_list_item"].includes(block.type);
  const isQuoteCallout = ["quote", "callout"].includes(block.type);
  const isToggle = block.type === "toggle";
  if (block.has_children) {
    children = get6(block, "children", [])?.map((childBlock) => /* @__PURE__ */ jsx31(
      Renderer,
      {
        block: childBlock,
        level: ["synced_block", "callout"].includes(block.type) ? level : level + 1,
        insideList: isList,
        insideQuoteCallout: isQuoteCallout || props.insideQuoteCallout,
        insideToggle: isToggle || props.insideToggle
      },
      childBlock.id
    ));
  }
  const basicBlockGap = cn19(
    getIndentLevelClass({
      level,
      isList,
      insideList: props.insideList,
      insideColumn: props.insideColumn,
      insideQuoteCallout: props.insideQuoteCallout,
      insideToggle: props.insideToggle
    })
  );
  const basicBlockGapHeading = "mt-6";
  switch (block.type) {
    case "synced_block":
      return /* @__PURE__ */ jsx31(Fragment6, { children });
    case "divider":
      return /* @__PURE__ */ jsx31("hr", { className: basicBlockGap });
    case "paragraph":
      return /* @__PURE__ */ jsx31(BlockParagraph, { block, className: cn19(basicBlockGap), children });
    case "numbered_list_item":
      return /* @__PURE__ */ jsx31(
        BlockNumberedListItem,
        {
          block,
          className: cn19(basicBlockGap),
          children
        }
      );
    case "bulleted_list_item":
      return /* @__PURE__ */ jsx31(
        BlockBulletedListItem,
        {
          block,
          className: cn19(basicBlockGap),
          children
        }
      );
    case "to_do":
      return /* @__PURE__ */ jsx31(BlockToDo, { block, className: cn19(basicBlockGap), children });
    case "heading_1":
      return /* @__PURE__ */ jsx31(
        BlockHeading,
        {
          type: "h1",
          block,
          outerClassName: getIndentLevelClass({
            level
          }),
          className: cn19(basicBlockGap, basicBlockGapHeading),
          children
        }
      );
    case "heading_2":
      return /* @__PURE__ */ jsx31(
        BlockHeading,
        {
          type: "h2",
          block,
          outerClassName: getIndentLevelClass({
            level
          }),
          className: cn19(basicBlockGap, basicBlockGapHeading),
          children
        }
      );
    case "heading_3":
      return /* @__PURE__ */ jsx31(
        BlockHeading,
        {
          type: "h3",
          block,
          outerClassName: getIndentLevelClass({
            level
          }),
          className: cn19(basicBlockGap, basicBlockGapHeading),
          children
        }
      );
    case "quote":
      return /* @__PURE__ */ jsx31(BlockQuote, { block, className: cn19(basicBlockGap), children });
    case "code":
      return /* @__PURE__ */ jsx31(DynamicCode, { block, className: cn19(basicBlockGap) });
    case "equation":
      return /* @__PURE__ */ jsx31(DynamicEquation, { block, className: cn19(basicBlockGap) });
    case "column_list":
      return /* @__PURE__ */ jsx31(BlockColumnList, { block, className: cn19(basicBlockGap) });
    case "table":
      return /* @__PURE__ */ jsx31(DynamicTable, { block, className: cn19(basicBlockGap) });
    case "toggle":
      return /* @__PURE__ */ jsx31(BlockToggle, { block, className: cn19(basicBlockGap), children });
    case "callout":
      return /* @__PURE__ */ jsx31(BlockCallout, { block, className: cn19(basicBlockGap), children });
    case "image":
      return /* @__PURE__ */ jsx31(DynamicImage, { block, className: cn19(basicBlockGap) });
    case "video":
      return /* @__PURE__ */ jsx31(DynamicVideo, { block, className: cn19(basicBlockGap) });
    case "bookmark":
      return /* @__PURE__ */ jsx31(
        BlockBookmark,
        {
          block,
          className: cn19(basicBlockGap)
        }
      );
    default:
      return null;
  }
}
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
    DynamicImage = dynamic2(() => Promise.resolve().then(() => (init_BlockImage(), BlockImage_exports)));
    DynamicCode = dynamic2(() => Promise.resolve().then(() => (init_BlockCode(), BlockCode_exports)));
    DynamicEquation = dynamic2(() => Promise.resolve().then(() => (init_BlockEquation(), BlockEquation_exports)));
    DynamicTable = dynamic2(() => Promise.resolve().then(() => (init_BlockTable(), BlockTable_exports)));
    DynamicVideo = dynamic2(() => Promise.resolve().then(() => (init_BlockVideo(), BlockVideo_exports)));
  }
});

// src/components/BlockRender.tsx
import { createContext } from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
function BlockRender(props) {
  return /* @__PURE__ */ jsx32(BlockOptionContext.Provider, { value: props.blockOptionsContext, children: /* @__PURE__ */ jsx32(
    Renderer,
    {
      block: props.block,
      level: props.level,
      insideColumn: props.insideColumn,
      insideList: props.insideList,
      insideQuoteCallout: props.insideQuoteCallout
    }
  ) });
}
var defaultBlockOptionContext, BlockOptionContext;
var init_BlockRender = __esm({
  "src/components/BlockRender.tsx"() {
    init_Renderer();
    defaultBlockOptionContext = {
      headingStyle: "hash",
      headingScrollMarginTopClass: "scroll-mt-[70px]",
      showAnchorRight: false,
      disableAnchorHeading: false,
      siteDomain: "dinhanhthi.com"
    };
    BlockOptionContext = createContext(defaultBlockOptionContext);
  }
});
init_BlockRender();
export {
  BlockOptionContext,
  BlockRender as default
};
//# sourceMappingURL=BlockRender.js.map