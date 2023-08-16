// src/components/Carousel.tsx
import cn from "classnames";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSnapCarousel } from "react-snap-carousel";
import { jsx, jsxs } from "react/jsx-runtime";
var Carousel = ({ items, renderItem }) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = useSnapCarousel();
  const arrowBtnClasses = cn(
    "absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
  );
  const arrowClasses = cn(
    "text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600"
  );
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => prev(),
        className: cn("-left-4", arrowBtnClasses, {
          "opacity-0": activePageIndex <= 0
        }),
        children: /* @__PURE__ */ jsx(FaChevronLeft, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => next(),
        className: cn("-right-4", arrowBtnClasses, {
          "opacity-0": activePageIndex === pages.length - 1
        }),
        children: /* @__PURE__ */ jsx(FaChevronRight, { className: arrowClasses })
      }
    ),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => /* @__PURE__ */ jsx(
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
var CarouselItem = ({ isSnapPoint, children, widthClass }) => /* @__PURE__ */ jsx(
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