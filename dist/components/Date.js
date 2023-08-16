// src/components/Date.tsx
import Moment from "moment";
import { jsx } from "react/jsx-runtime";
function Date({ dateString }) {
  const date = Moment(dateString).format("DD/MM/YYYY");
  return /* @__PURE__ */ jsx("span", { children: date });
}
export {
  Date as default
};
//# sourceMappingURL=Date.js.map