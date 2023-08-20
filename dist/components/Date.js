// src/components/Date.tsx
import Moment from "moment";
import { jsx } from "react/jsx-runtime";
function Date(props) {
  const date = Moment(props.dateString).format(props.format || "DD/MM/YYYY");
  return /* @__PURE__ */ jsx("span", { className: props.className, children: date });
}
export {
  Date as default
};
//# sourceMappingURL=Date.js.map