// src/components/BadgeInfos.tsx
import Link from "next/link";
import { jsx, jsxs } from "react/jsx-runtime";
function BadgeInfos(props) {
  const aLinkClass = `
    block py-2.5 bg-transparent text-main-dark rounded-3xl border-gray-600 text-sm
    uppercase font-bold tracking-widest${props?.className ? ` ${props.className}` : " px-5 hover:bg-gray-700"} transition duration-300 shadow-md md:shadow-none`;
  if (props.external || props.url.includes("//")) {
    return /* @__PURE__ */ jsxs(
      "a",
      {
        className: aLinkClass,
        href: props.url,
        target: props.targetSelf ? "_self" : "_blank",
        rel: "noopener noreferrer",
        children: [
          props.icon && /* @__PURE__ */ jsx("span", { className: "mr-3", children: props.icon }),
          /* @__PURE__ */ jsx("span", { children: props.title })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(Link, { className: aLinkClass, href: props.url, target: "_blank", rel: "noopener noreferrer", children: [
    props.icon && /* @__PURE__ */ jsx("span", { className: "mr-3", children: props.icon }),
    /* @__PURE__ */ jsx("span", { children: props.title })
  ] });
}
export {
  BadgeInfos as default
};
//# sourceMappingURL=BadgeInfos.js.map