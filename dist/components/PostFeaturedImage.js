"use client";

// src/components/PostFeaturedImage.tsx
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

// src/components/PostFeaturedImage.tsx
import { Fragment as Fragment2, jsx as jsx2 } from "react/jsx-runtime";
function PostFeaturedImage(props) {
  const { title, featuredImage } = props;
  return /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsx2("div", { className: "relative flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2(
    ImageComponent,
    {
      defaultImage: props.defaultImage,
      image: featuredImage,
      alt: `H\xECnh \u0111\u1EA1i di\u1EC7n cho b\xE0i vi\u1EBFt "${title}"`,
      className: cn("object-cover", props.className),
      imageProps: {
        fill: true
      }
    }
  ) }) });
}
export {
  PostFeaturedImage as default
};
//# sourceMappingURL=PostFeaturedImage.js.map