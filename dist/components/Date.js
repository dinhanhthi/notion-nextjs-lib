"use client";

// src/components/Date.tsx
import Moment from "moment";
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
function DateComponent(props) {
  const [hydrated, setHydrated] = useState(false);
  const [humanized, setHumanized] = useState("");
  const fullDate = Moment(props.dateString).format(props.format || "DD/MM/YYYY");
  useEffect(() => {
    const date = new Date(props.dateString);
    const today = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays <= 0) {
      setHumanized(props.humanizeOpts?.today || "today");
    } else if (diffDays <= 1) {
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
    return "loading...";
  return /* @__PURE__ */ jsx("span", { className: props.className, children: props.humanize ? humanized : fullDate });
}
export {
  DateComponent as default
};
//# sourceMappingURL=Date.js.map