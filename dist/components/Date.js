"use client";

// src/components/Date.tsx
import Moment from "moment";
import { useState } from "react";
import { jsx } from "react/jsx-runtime";
function DateComponent(props) {
  const [humanized, setHumanized] = useState("");
  const date = Moment(props.dateString).format(props.format || "DD/MM/YYYY");
  return /* @__PURE__ */ jsx("span", { className: props.className, children: date });
}
export {
  DateComponent as default
};
//# sourceMappingURL=Date.js.map