// src/components/BadgeInfos.tsx
import cn from "classnames";
import Link from "next/link";
import { jsx, jsxs } from "react/jsx-runtime";
function BadgeInfos(props) {
  const aLinkClass = cn(
    "block py-2.5 text-main-dark rounded-3xl border-gray-600 text-sm uppercase",
    "tracking-widest transition duration-300 shadow-md md:shadow-none",
    {
      "bg-transparent px-5 hover:bg-gray-700": !props?.className,
      [props?.className]: !!props?.className
    }
  );
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
  return /* @__PURE__ */ jsxs(Link, { className: aLinkClass, href: props.url, children: [
    props.icon && /* @__PURE__ */ jsx("span", { className: "mr-3", children: props.icon }),
    /* @__PURE__ */ jsx("span", { children: props.title })
  ] });
}
export {
  BadgeInfos as default
};
//# sourceMappingURL=BadgeInfos.js.map