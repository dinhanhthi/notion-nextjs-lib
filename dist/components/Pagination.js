// src/components/Pagination.tsx
import cn from "classnames";
import Link from "next/link";

// src/icons/CgChevronLeft.tsx
import { jsx } from "react/jsx-runtime";
function CgChevronLeft(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z",
          fill: "currentColor"
        }
      )
    }
  );
}

// src/icons/CgChevronRight.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function CgChevronRight(props) {
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx2(
        "path",
        {
          d: "M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z",
          fill: "currentColor"
        }
      )
    }
  );
}

// src/components/Pagination.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Pagination(props) {
  const { path, total, current, className, pageAlias } = props;
  const iconSize = "h-6 w-6";
  const hClass = "h-9";
  const wClass = "w-9";
  const sizeCurrentClass = "h-12 w-12";
  const classNumber = `${hClass} ${wClass} hidden cursor-pointer items-center
    justify-center rounded-full leading-5 transition duration-150 ease-in !flex`;
  const classCurrent = `${sizeCurrentClass} rounded-full bg-main text-white shadow-md
    items-center justify-center leading-5 transition duration-150 ease-in !flex`;
  const classSeparated = `h-10 w-10 flex cursor-pointer items-center
    justify-center rounded-full bg-gray-200 hover:shadow-md`;
  const classArrow = classSeparated + " opacity-80 hover:opacity-100";
  return /* @__PURE__ */ jsx3("div", { className: cn("my-12 flex flex-col items-center", className), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-gray-700", children: [
    current > 1 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(current - 1, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classArrow, "mr-2"), children: /* @__PURE__ */ jsx3(CgChevronLeft, { className: iconSize }) }) }),
    current > 4 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(1, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classSeparated, "mr-2"), children: "1" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ jsx3(
        "div",
        {
          className: `absolute -z-10 flex ${hClass} w-full rounded-full bg-gray-200 font-medium shadow-md`
        }
      ),
      current === 4 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(1, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classNumber, "ml-2"), children: "1" }) }),
      current > 2 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(current - 2, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classNumber, { "ml-2": current !== 4 }), children: current - 2 }) }),
      current > 1 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(current - 1, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classNumber, { "ml-2": current <= 2 }), children: current - 1 }) }),
      /* @__PURE__ */ jsx3(
        "div",
        {
          className: cn(classCurrent, {
            "mx-1": current !== 1 && current !== total,
            "mr-2": current === 1,
            "ml-2": current === total
          }),
          children: current
        }
      ),
      total - current > 0 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(current + 1, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classNumber, { "mr-2": total - current <= 1 }), children: current + 1 }) }),
      total - current > 1 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(current + 2, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classNumber, { "mr-2": current !== total - 3 }), children: current + 2 }) }),
      current === total - 3 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(total, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classNumber, "mr-2"), children: total }) })
    ] }),
    total - current > 3 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(total, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classSeparated, "ml-2"), children: total }) }),
    total - current > 0 && /* @__PURE__ */ jsx3(Link, { href: getPagePath(current + 1, path, pageAlias), children: /* @__PURE__ */ jsx3("div", { className: cn(classArrow, "ml-2"), children: /* @__PURE__ */ jsx3(CgChevronRight, { className: iconSize }) }) })
  ] }) });
}
var getPagePath = (pageNumber, path, pageAlias) => {
  const alias = pageAlias || "page";
  return pageNumber === 1 ? path : `${path}${alias}/${pageNumber}/`;
};
export {
  Pagination as default
};
//# sourceMappingURL=Pagination.js.map