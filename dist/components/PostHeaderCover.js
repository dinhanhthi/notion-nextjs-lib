// src/components/PostHeaderCover.tsx
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

// src/components/PostHeaderCover.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function PostHeaderCover(props) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cn(
        "flex w-full items-center justify-center",
        props.coverHeight || "h-[25vh] max-h-[25vh] min-h-[25vh]"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-full w-full items-center overflow-hidden", children: [
        /* @__PURE__ */ jsx2(
          ImageComponent,
          {
            defaultImage: props.defaultCover,
            image: props.cover,
            alt: props.alt,
            className: cn("object-cover group-hover:scale-105 duration-500", {
              "blur-sm": !!props.bookCover,
              // Fix: blur image problem on the edge of the image
              "w-full": !props.bookCover,
              "!w-[calc(100%+10px)] !max-w-[calc(100%+10px)] !h-[calc(100%+10px)] !left-[-5px] !top-[-5px]": !!props.bookCover
            }),
            imageProps: {
              fill: true
            }
          }
        ),
        props.bookCover && /* @__PURE__ */ jsx2(
          "div",
          {
            className: cn("absolute left-0 top-0 flex h-full w-full items-center justify-center"),
            children: /* @__PURE__ */ jsx2(
              ImageComponent,
              {
                image: props.bookCover,
                alt: props.altBookCover || `Book cover of ${props.alt}`,
                className: cn("rounded-md shadow-xl h-4/5 w-auto"),
                imageProps: {
                  width: props.bookCover.width,
                  height: props.bookCover.height
                }
              }
            )
          }
        )
      ] })
    }
  );
}
export {
  PostHeaderCover as default
};
//# sourceMappingURL=PostHeaderCover.js.map