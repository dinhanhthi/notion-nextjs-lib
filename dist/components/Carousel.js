// src/components/Carousel.tsx
import cn from "classnames";
import { useSnapCarousel } from "react-snap-carousel";

// src/icons/FaChevronLeft.tsx
import { jsx } from "react/jsx-runtime";
function FaChevronLeft(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 320 512",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" })
    }
  );
}

// src/icons/FaChevronRight.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function FaChevronRight(props) {
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 320 512",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx2("path", { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" })
    }
  );
}

// src/components/Carousel.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = useSnapCarousel();
  const arrowBtnClasses = cn(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = cn(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx3(
      "div",
      {
        ref: scrollRef,
        className: cn("no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4"),
        children: items.map(
          (item, i) => renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
            index: i
          })
        )
      }
    ),
    /* @__PURE__ */ jsx3(
      "button",
      {
        onClick: () => prev(),
        className: cn("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ jsx3(FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx3(
      "button",
      {
        onClick: () => next(),
        className: cn("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ jsx3(FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx3("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ jsx3(
      "button",
      {
        className: cn("h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60", {
          "opacity-40 w-2.5 hover:w-3.5": activePageIndex !== i,
          "w-5 opacity-70": activePageIndex === i
        }),
        onClick: () => goTo(i)
      },
      i
    )) })
  ] });
};
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ jsx3(
  "div",
  {
    className: cn(
      "shrink-0",
      {
        "snap-start": isSnapPoint
      },
      widthClass ?? "w-64"
    ),
    children
  }
);
export {
  Carousel,
  CarouselItem
};
//# sourceMappingURL=Carousel.js.map