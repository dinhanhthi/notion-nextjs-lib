// src/lib/hooks.ts
import { useEffect, useRef, useState } from "react";
function useHeadsObserver() {
  const observer = useRef(null);
  const [activeId, setActiveId] = useState("");
  useEffect(() => {
    const handleObsever = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-100px 0% -80% 0px"
    });
    const elements = document.querySelectorAll("h2, h3");
    elements.forEach((elem) => observer?.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, []);
  return { activeId };
}
export {
  useHeadsObserver
};
//# sourceMappingURL=hooks.js.map