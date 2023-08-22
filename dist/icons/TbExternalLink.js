// src/icons/TbExternalLink.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function TbExternalLink(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" }),
        /* @__PURE__ */ jsx("path", { d: "M11 13l9 -9" }),
        /* @__PURE__ */ jsx("path", { d: "M15 4h5v5" })
      ]
    }
  );
}
export {
  TbExternalLink as default
};
//# sourceMappingURL=TbExternalLink.js.map