// src/skeleton/SkeletonPostHeaderTopics.tsx
import cn from "classnames";

// src/icons/TiTag.tsx
import { jsx } from "react/jsx-runtime";
function TiTag(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      version: "1.2",
      baseProfile: "tiny",
      viewBox: "0 0 24 24",
      className: props.className,
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M9 4c1.279 0 2.559.488 3.535 1.465l3.465 3.535 5 5-7 7-5.498-5.498c-.037.033-3.037-2.967-3.037-2.967-1.953-1.953-1.953-5.119 0-7.07.976-.977 2.256-1.465 3.535-1.465m0-2c-1.87 0-3.628.729-4.949 2.051-1.322 1.32-2.051 3.078-2.051 4.948s.729 3.628 2.051 4.95l3 3c.107.107.227.201.35.279l5.187 5.186c.391.391.9.586 1.413.586s1.022-.195 1.414-.586l7-7c.78-.781.78-2.047 0-2.828l-5-5-3.45-3.521c-1.337-1.336-3.095-2.065-4.965-2.065zM9 7.498c.829 0 1.5.672 1.5 1.502s-.671 1.498-1.5 1.498-1.5-.668-1.5-1.498.671-1.502 1.5-1.502m0-1c-1.379 0-2.5 1.122-2.5 2.502 0 1.377 1.121 2.498 2.5 2.498s2.5-1.121 2.5-2.498c0-1.38-1.121-2.502-2.5-2.502z" })
    }
  );
}

// src/skeleton/SkeletonPostHeaderTopics.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function SkeletonPostHeaderTopics(props) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-2", props.className), children: [
    /* @__PURE__ */ jsx2(TiTag, { className: "text-slate-400 text-lg" }),
    /* @__PURE__ */ jsx2("div", { className: "h-6 w-20 rounded-2xl bg-slate-200", children: "I" }),
    /* @__PURE__ */ jsx2("div", { className: "h-6 w-32 rounded-2xl bg-slate-200" }),
    /* @__PURE__ */ jsx2("div", { className: "h-6 w-20 rounded-2xl bg-slate-200" })
  ] });
}
export {
  SkeletonPostHeaderTopics as default
};
//# sourceMappingURL=SkeletonPostHeaderTopics.js.map