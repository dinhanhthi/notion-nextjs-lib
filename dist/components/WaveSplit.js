// src/components/WaveSplit.tsx
import cn from "classnames";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function WaveSplit() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn("after:block after:h-8 after:w-full after:bg-wave dark:after:bg-wave-dark")
      }
    ),
    /* @__PURE__ */ jsx("div", { className: cn("h-8 bg-white") })
  ] });
}
export {
  WaveSplit as default
};
//# sourceMappingURL=WaveSplit.js.map