// src/components/PostHeaderTopics.tsx
import cn from "classnames";
import Link from "next/link";

// src/icons/TiTag.tsx
import { jsx } from "react/jsx-runtime";
function TiTag(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      version: "1.2",
      baseProfile: "tiny",
      viewBox: "0 0 24 24",
      className: props.className,
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M9 4c1.279 0 2.559.488 3.535 1.465l3.465 3.535 5 5-7 7-5.498-5.498c-.037.033-3.037-2.967-3.037-2.967-1.953-1.953-1.953-5.119 0-7.07.976-.977 2.256-1.465 3.535-1.465m0-2c-1.87 0-3.628.729-4.949 2.051-1.322 1.32-2.051 3.078-2.051 4.948s.729 3.628 2.051 4.95l3 3c.107.107.227.201.35.279l5.187 5.186c.391.391.9.586 1.413.586s1.022-.195 1.414-.586l7-7c.78-.781.78-2.047 0-2.828l-5-5-3.45-3.521c-1.337-1.336-3.095-2.065-4.965-2.065zM9 7.498c.829 0 1.5.672 1.5 1.502s-.671 1.498-1.5 1.498-1.5-.668-1.5-1.498.671-1.502 1.5-1.502m0-1c-1.379 0-2.5 1.122-2.5 2.502 0 1.377 1.121 2.498 2.5 2.498s2.5-1.121 2.5-2.498c0-1.38-1.121-2.502-2.5-2.502z" })
    }
  );
}

// src/components/PostHeaderTopics.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var topTagClass = `flex items-center justify-center rounded-2xl px-3 py-0.5 text-xs uppercase
hover:-translate-y-0.5 transition-all duration-300 font-bold
whitespace-nowrap`;
function PostHeaderTopics(props) {
  const { categories, tags, className, selectedUri, selectedName } = props;
  const usedTags = tags?.filter((tag) => tag.uri !== props.selectedUri) || [];
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-wrap gap-2 items-center", className), children: [
    !!selectedUri && !!categories && /* @__PURE__ */ jsxs(
      Link,
      {
        className: `${topTagClass} border border-amber-300 bg-amber-50 !text-amber-600`,
        href: selectedUri,
        children: [
          /* @__PURE__ */ jsx2("i", { className: "icon-star-circled mr-1" }),
          " ",
          selectedName || "Selected"
        ]
      },
      "selected"
    ),
    !!categories?.length && categories?.length > 0 && categories.filter((cat) => !!cat).map((category) => /* @__PURE__ */ jsxs(
      Link,
      {
        className: topTagClass,
        style: {
          backgroundColor: `${category.style?.bgColor}`,
          color: `${category.style?.textColor}`,
          border: category.style?.bdColor ? `1px solid ${category.style?.bdColor}` : void 0
        },
        href: category.uri || "/",
        children: [
          category.fontello && /* @__PURE__ */ jsx2("i", { className: `${category.fontello} mr-1 text-sm` }),
          category.name
        ]
      },
      category.uri
    )),
    usedTags.length > 0 && /* @__PURE__ */ jsx2(TiTag, { className: "text-gray-600 text-lg" }),
    usedTags.length > 0 && usedTags.map((tag) => /* @__PURE__ */ jsx2(
      Link,
      {
        className: cn(topTagClass, "boder-slate-300 border text-slate-600 bg-white"),
        href: tag.uri || "/",
        children: tag.name
      },
      tag.uri
    ))
  ] });
}
export {
  PostHeaderTopics as default
};
//# sourceMappingURL=PostHeaderTopics.js.map