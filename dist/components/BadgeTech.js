"use client";

// src/components/BadgeTech.tsx
import cn from "classnames";

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

// src/components/BadgeTech.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs } from "react/jsx-runtime";
function BadgeTech(props) {
  return /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsxs(
    "a",
    {
      className: `flex h-6 w-fit items-center justify-center rounded-md border bg-[#ededed] px-1
        align-baseline text-base text-[#1e293b] shadow-sm transition duration-200
        duration-200 ease-in-out ease-in-out hover:-translate-y-0.5 dark:border-[#3b3e54]
        dark:bg-[#343e4c] dark:text-[#f8fafc] tooltip-auto`,
      href: props.tech.url,
      "data-title": props.tech.name,
      children: [
        /* @__PURE__ */ jsx2(
          ImageComponent,
          {
            image: props.tech.icon,
            alt: props.tech.name,
            className: cn("w-[18px] h-[18px]", props.tech.imgClass),
            imageProps: { width: 32, height: 32 }
          }
        ),
        !props.hideText && /* @__PURE__ */ jsx2("span", { className: "ml-1.5 whitespace-nowrap text-[81%] tracking-wide", children: props.tech.name })
      ]
    }
  ) });
}
export {
  BadgeTech as default
};
//# sourceMappingURL=BadgeTech.js.map