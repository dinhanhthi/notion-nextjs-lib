// src/components/WaveSplit.tsx
import cn from "classnames";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function WaveSplit(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(props.topColorClass || "after:bg-wave after:block after:h-8 after:w-full")
      }
    ),
    /* @__PURE__ */ jsx("div", { className: cn("h-8", props.bottomColorClass || "bg-white") })
  ] });
}
export {
  WaveSplit as default
};
//# sourceMappingURL=WaveSplit.js.map