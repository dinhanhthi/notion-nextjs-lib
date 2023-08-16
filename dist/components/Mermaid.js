"use client";

// src/components/Mermaid.tsx
import mermaid from "mermaid";
import React from "react";
import { jsx } from "react/jsx-runtime";
mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose"
});
var Mermaid = class extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return /* @__PURE__ */ jsx("div", { className: "mermaid flex justify-center", children: this.props.chart });
  }
};
export {
  Mermaid as default
};
//# sourceMappingURL=Mermaid.js.map