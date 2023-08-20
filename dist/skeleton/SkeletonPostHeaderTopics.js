// src/skeleton/SkeletonPostHeaderTopics.tsx
import cn from "classnames";
import { TiTag } from "react-icons/ti";
import { jsx, jsxs } from "react/jsx-runtime";
function SkeletonPostHeaderTopics(props) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-2", props.className), children: [
    /* @__PURE__ */ jsx(TiTag, { className: "text-slate-400 text-lg" }),
    /* @__PURE__ */ jsx("div", { className: "h-6 w-20 rounded-2xl bg-slate-200" }),
    /* @__PURE__ */ jsx("div", { className: "h-6 w-32 rounded-2xl bg-slate-200" }),
    /* @__PURE__ */ jsx("div", { className: "h-6 w-20 rounded-2xl bg-slate-200" })
  ] });
}
export {
  SkeletonPostHeaderTopics as default
};
//# sourceMappingURL=SkeletonPostHeaderTopics.js.map