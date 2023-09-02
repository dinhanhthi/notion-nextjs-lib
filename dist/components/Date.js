"use client";

// src/components/Date.tsx
import Moment from "moment";
import { useEffect, useState } from "react";

// src/icons/BiDotsHorizontalRounded.tsx
import { jsx } from "react/jsx-runtime";
function BiDotsHorizontalRounded(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
    }
  );
}

// src/components/Date.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function DateComponent(props) {
  const [hydrated, setHydrated] = useState(false);
  const [humanized, setHumanized] = useState("");
  const fullDate = Moment(props.dateString).format(props.format || "DD/MM/YYYY");
  useEffect(() => {
    const date = new Date(props.dateString);
    const today = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays <= 1) {
      setHumanized(props.humanizeOpts?.today || "today");
    } else if (diffDays <= 2) {
      setHumanized(props.humanizeOpts?.yesterday || "yesterday");
    } else if (diffDays <= 7) {
      setHumanized(`${diffDays} ${props.humanizeOpts?.daysAgo || "days ago"}`);
    } else if (diffDays <= 30) {
      setHumanized(`${Math.ceil(diffDays / 7)} ${props.humanizeOpts?.weeksAgo || "weeks ago"}`);
    } else if (diffDays <= 365) {
      setHumanized(`${Math.ceil(diffDays / 30)} ${props.humanizeOpts?.monthsAgo || "months ago"}`);
    } else {
      setHumanized(fullDate);
    }
    setHydrated(true);
  }, []);
  if (!hydrated)
    return /* @__PURE__ */ jsx2(BiDotsHorizontalRounded, { className: "opacity-70 animate-ping" });
  return /* @__PURE__ */ jsxs("span", { className: props.className, children: [
    props.dateLabel ? props.dateLabel + " " : "",
    props.humanize ? humanized : fullDate
  ] });
}
export {
  DateComponent as default
};
//# sourceMappingURL=Date.js.map