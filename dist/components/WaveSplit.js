// src/components/WaveSplit.tsx
import cn from "classnames";
import { jsx } from "react/jsx-runtime";
function WaveSplit(props) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(props.middleColorClass || "after:bg-wave after:block after:h-8 after:w-full")
    }
  );
}
export {
  WaveSplit as default
};
//# sourceMappingURL=WaveSplit.js.map