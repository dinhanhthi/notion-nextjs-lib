"use client";

// src/components/BadgeSocial.tsx
import cn from "classnames";
import { Tooltip } from "react-tooltip";

// src/components/ImageComponent.tsx
import Image from "next/image";
import { Fragment, jsx } from "react/jsx-runtime";
function ImageComponent(props) {
  const image = () => props.image?.staticImageData ? /* @__PURE__ */ jsx(
    Image,
    {
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.staticImageData,
      className: props.className,
      ...props.imageProps
    }
  ) : props.image?.sourceUrl && props.image?.blurDataURL ? /* @__PURE__ */ jsx(
    Image,
    {
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.image.sourceUrl,
      className: props.className,
      placeholder: "blur",
      blurDataURL: props.image.blurDataURL,
      ...props.imageProps
    }
  ) : props.defaultImage ? /* @__PURE__ */ jsx(
    Image,
    {
      alt: props.alt || "T\xEAn h\xECnh kh\xF4ng x\xE1c \u0111\u1ECBnh",
      src: props.defaultImage,
      className: props.className,
      ...props.imageProps
    }
  ) : null;
  return /* @__PURE__ */ jsx(Fragment, { children: image() });
}

// src/components/BadgeSocial.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs } from "react/jsx-runtime";
function BadgeSocial(props) {
  return /* @__PURE__ */ jsxs(Fragment2, { children: [
    /* @__PURE__ */ jsx2(
      "a",
      {
        className: `
        group block h-12 w-12 rounded-2xl bg-gray-700 p-2
        shadow-none md:h-10 md:w-10 md:p-1.5
      `,
        href: props.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "data-tooltip-id": "badge-social-tooltip",
        "data-tooltip-content": props.title,
        "data-tooltip-place": "bottom",
        children: /* @__PURE__ */ jsx2(
          ImageComponent,
          {
            image: props.icon,
            alt: props.title,
            className: cn(
              "w-16 h-16 rounded-full transition-transform duration-200 group-hover:-translate-y-0.5",
              props.imgClass
            ),
            imageProps: { width: 64, height: 64 }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx2(Tooltip, { id: "badge-social-tooltip", noArrow: true, className: "text-sm" })
  ] });
}
export {
  BadgeSocial as default
};
//# sourceMappingURL=BadgeSocial.js.map