// src/components/PostHeaderTopics.tsx
import cn from "classnames";
import Link from "next/link";
import { TiTag } from "react-icons/ti";
import { jsx, jsxs } from "react/jsx-runtime";
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
          /* @__PURE__ */ jsx("i", { className: "icon-star-circled mr-1" }),
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
          category.fontello && /* @__PURE__ */ jsx("i", { className: `${category.fontello} mr-1 text-sm` }),
          category.name
        ]
      },
      category.uri
    )),
    usedTags.length > 0 && /* @__PURE__ */ jsx(TiTag, { className: "text-gray-600 text-lg" }),
    usedTags.length > 0 && usedTags.map((tag) => /* @__PURE__ */ jsx(
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