"use client";

// src/components/ScrollToTop.tsx
import cn from "classnames";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function ScrollToTop(props) {
  const buttonRef = useRef(null);
  useEffect(() => {
    const button = buttonRef.current;
    if (!button)
      return;
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        button.classList.remove("opacity-0");
        button.classList.add("opacity-100");
      } else {
        button.classList.add("opacity-0");
        button.classList.remove("opacity-100");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: scrollToTop,
      ref: buttonRef,
      className: cn(
        "fixed right-10 bottom-8 rounded-full p-2 opacity-0 transition-all duration-300",
        "z-50 group bg-[#c0c0c066] hover:bg-[#c0c0c099] w-12 h-12"
      ),
      children: [
        props.image && /* @__PURE__ */ jsx(
          Image,
          {
            className: "group-hover:animate-toTop",
            src: props.image,
            alt: "To top",
            width: 32,
            height: 32
          }
        ),
        !props.image && /* @__PURE__ */ jsx("span", { className: "text-3xl group-hover:animate-toTop", children: "\u261D" })
      ]
    }
  );
}
export {
  ScrollToTop as default
};
//# sourceMappingURL=ScrollToTop.js.map