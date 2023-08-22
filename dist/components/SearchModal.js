"use client";

// src/components/SearchModal.tsx
import { Dialog, Transition } from "@headlessui/react";
import cn from "classnames";
import { debounce, get } from "lodash";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useCallback, useLayoutEffect, useRef, useState } from "react";
import useSWR from "swr";

// src/icons/AiOutlineLoading3Quarters.tsx
import { jsx } from "react/jsx-runtime";
function AiOutlineLoading3Quarters(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 1024 1024",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" })
    }
  );
}

// src/icons/BsArrowReturnLeft.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function BsArrowReturnLeft(props) {
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx2(
        "path",
        {
          "fill-rule": "evenodd",
          d: "M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
        }
      )
    }
  );
}

// src/icons/FiSearch.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function FiSearch(props) {
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
        /* @__PURE__ */ jsx3("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsx3("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
      ]
    }
  );
}

// src/icons/IoBookOutline.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function IoBookOutline(props) {
  return /* @__PURE__ */ jsx4(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 512 512",
      className: props.className,
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx4(
        "path",
        {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "stroke-width": "32",
          d: "M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zm0 0v288"
        }
      )
    }
  );
}

// src/icons/IoCloseCircle.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function IoCloseCircle(props) {
  return /* @__PURE__ */ jsx5(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 512 512",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx5("path", { d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" })
    }
  );
}

// src/icons/IoDocumentTextOutline.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function IoDocumentTextOutline(props) {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      className: props.className,
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 512 512",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx6(
          "path",
          {
            fill: "none",
            strokeLinejoin: "round",
            strokeWidth: "32",
            d: "M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
          }
        ),
        /* @__PURE__ */ jsx6(
          "path",
          {
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "32",
            d: "M256 56v120a32 32 0 0032 32h120m-232 80h160m-160 80h160"
          }
        )
      ]
    }
  );
}

// src/components/SearchModal.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function SearchModal(props) {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [query, setQuery] = useState("");
  const [queryToSearch, setQueryToSearch] = useState(query);
  const [selected, setSelected] = useState(-1);
  const router = useRouter();
  const {
    data: fullData,
    error,
    isLoading
  } = useSWR(
    [props.url, { query: queryToSearch }],
    ([url, params]) => fetcher(url, params)
  );
  const data = fullData ? fullData.filter((rs) => rs.isPublished) : fullData;
  if (error)
    console.log("\u{1F41E} Error in search modal: ", error);
  const debounceSearch = useCallback(
    debounce((value) => triggerSearch(value), 1e3),
    [queryToSearch]
  );
  function handleOnchangeInput(e) {
    const { value } = e.target;
    setQuery(value);
    debounceSearch(value);
  }
  useLayoutEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const selectedItem = container.children[selected];
      const view = checkIsInView(selectedItem, container);
      if (view === "above") {
        container.scrollTo({
          top: selectedItem.offsetTop - container.offsetTop,
          behavior: "smooth"
        });
      } else if (view === "below") {
        container.scrollTo({
          top: selectedItem.offsetTop + selectedItem.offsetHeight - container.offsetHeight,
          behavior: "smooth"
        });
      }
    }
  }, [selected]);
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (data?.length && selected >= 0 && selected < data?.length) {
        const uri = props.slugPrefix ? `${props.slugPrefix}/${data[selected].slug}/` : `${data[selected].slug}/`;
        e.preventDefault();
        props.closeModal();
        router.push(uri);
      } else {
        triggerSearch(inputRef.current?.value || "");
        debounceSearch.cancel();
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => !data || prev < data.length - 1 ? prev + 1 : prev);
      if (data?.length && data?.length > 0 && selected === data?.length - 1) {
        setSelected(0);
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => prev > 0 ? prev - 1 : prev);
      if (data?.length && data?.length > 0 && selected === 0) {
        setSelected(data?.length - 1);
      }
    }
  }
  function handleMouseMoveCapture(index) {
    setSelected(index);
  }
  function triggerSearch(value) {
    setQueryToSearch(value);
    setSelected(-1);
  }
  return /* @__PURE__ */ jsx7(Transition, { appear: true, show: props.isOpen, as: Fragment, children: /* @__PURE__ */ jsxs3(Dialog, { as: "div", className: cn("relative z-50", props.className), onClose: props.closeModal, children: [
    /* @__PURE__ */ jsx7(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx7("div", { className: "bg-opacity/25 fixed inset-0 bg-black opacity-40" })
      }
    ),
    /* @__PURE__ */ jsx7("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx7("div", { className: "flex min-h-full items-start justify-center p-4 pt-20 text-center", children: /* @__PURE__ */ jsx7(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-300",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ jsxs3(
          Dialog.Panel,
          {
            className: cn(
              "flex flex-col gap-0 w-full transform rounded-md divide-y",
              "md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw] max-h-[80vh]",
              "bg-white text-left shadow-lg",
              "align-middle shadow-xl transition-all text-slate-800"
            ),
            children: [
              /* @__PURE__ */ jsxs3("div", { className: cn("flex items-center gap-3 p-4"), children: [
                /* @__PURE__ */ jsxs3("div", { className: cn("grid place-items-center text-slate-500"), children: [
                  (data || error || get(data, "[0].isFake")) && !isLoading && /* @__PURE__ */ jsx7(FiSearch, { className: "text-2xl" }),
                  isLoading && /* @__PURE__ */ jsx7("div", { className: "animate-spin", children: /* @__PURE__ */ jsx7(AiOutlineLoading3Quarters, { className: "text-2xl" }) })
                ] }),
                /* @__PURE__ */ jsx7(
                  "input",
                  {
                    ref: inputRef,
                    className: cn(
                      "peer h-full w-full text-ellipsis bg-transparent pr-2 outline-none",
                      "m2it-hide-wscb"
                    ),
                    id: "search",
                    type: "search",
                    placeholder: props.placeholder || "Search...",
                    autoComplete: "off",
                    value: query,
                    onChange: (e) => handleOnchangeInput(e),
                    onKeyDown: (e) => handleKeyDown(e)
                  }
                ),
                query && /* @__PURE__ */ jsx7("button", { onClick: () => setQuery(""), children: /* @__PURE__ */ jsx7(IoCloseCircle, { className: "h-5 w-5 text-slate-500" }) })
              ] }),
              error && /* @__PURE__ */ jsx7("div", { className: "p-4 text-center text-base", children: props.errorMessage || "There was an error fetching the search results." }),
              data && !data?.[0]?.isFake && query && /* @__PURE__ */ jsxs3(Fragment2, { children: [
                data.length === 0 && /* @__PURE__ */ jsx7("div", { className: "p-4 text-center text-base", children: props.noResultsMessage || "No results found." }),
                data.length > 0 && /* @__PURE__ */ jsxs3("div", { className: cn("flex flex-col divide-y overflow-hidden"), children: [
                  /* @__PURE__ */ jsx7(
                    "div",
                    {
                      ref: containerRef,
                      className: cn(
                        "flex flex-col divide-y divide-slate-150 overflow-auto m2it-scrollbar"
                      ),
                      children: data.map((item, index) => {
                        const uri = props.slugPrefix ? `/${props.slugPrefix}/${item.slug}/` : `/${item.slug}/`;
                        return /* @__PURE__ */ jsxs3(
                          Link,
                          {
                            onClick: props.closeModal,
                            href: uri,
                            className: cn("flex gap-3 py-4 px-4 w-full", {
                              "bg-gray-100": selected === index
                            }),
                            onMouseMoveCapture: () => handleMouseMoveCapture(index),
                            children: [
                              /* @__PURE__ */ jsxs3("div", { className: "mt-0.5", children: [
                                !item.isBookPost && /* @__PURE__ */ jsx7(IoDocumentTextOutline, { className: "text-xl opacity-80" }),
                                item.isBookPost && /* @__PURE__ */ jsx7(IoBookOutline, { className: "text-xl opacity-80" })
                              ] }),
                              /* @__PURE__ */ jsxs3("div", { className: cn("w-full flex flex-col text-slate-900 gap-1"), children: [
                                /* @__PURE__ */ jsxs3(
                                  "div",
                                  {
                                    className: cn(
                                      "w-full text-base flex items-center justify-between"
                                    ),
                                    children: [
                                      /* @__PURE__ */ jsxs3(
                                        "div",
                                        {
                                          className: cn({
                                            "pr-4 pb-1 border-b border-dashed": item.textHighlighted
                                          }),
                                          children: [
                                            item.titleHighlighted && /* @__PURE__ */ jsx7(
                                              "span",
                                              {
                                                dangerouslySetInnerHTML: {
                                                  __html: item.titleHighlighted
                                                }
                                              }
                                            ),
                                            !item.titleHighlighted && /* @__PURE__ */ jsx7("span", { children: item.title })
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ jsx7(
                                        "div",
                                        {
                                          className: cn({
                                            visible: selected === index,
                                            invisible: selected !== index
                                          }),
                                          children: /* @__PURE__ */ jsx7(BsArrowReturnLeft, { className: "text-lg opacity-70" })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                item.textHighlighted && /* @__PURE__ */ jsx7(
                                  "div",
                                  {
                                    className: "text-sm opacity-80",
                                    dangerouslySetInnerHTML: { __html: item.textHighlighted }
                                  }
                                )
                              ] })
                            ]
                          },
                          item.id
                        );
                      })
                    }
                  ),
                  query && /* @__PURE__ */ jsxs3("div", { className: "p-3 pl-4 text-sm font-normal text-slate-500", children: [
                    props.foundResultsMessage?.split("{{count}}")[0] || "Found ",
                    /* @__PURE__ */ jsx7("span", { className: "font-semibold text-slate-900", children: data.length }),
                    props.foundResultsMessage?.split("{{count}}")[1] || " results"
                  ] })
                ] })
              ] })
            ]
          }
        )
      }
    ) }) })
  ] }) });
}
var fetcher = async (url, params) => {
  if (params.query === "")
    return [{ isFake: true, isPublished: true }];
  const headers = {
    "Content-Type": "application/json"
  };
  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(params),
    mode: "cors"
  });
  const json = await res.json();
  return json;
};
function checkIsInView(selectedEl, containerEl) {
  const isOutBelow = selectedEl.offsetTop + selectedEl.offsetHeight - containerEl.scrollTop > containerEl.offsetHeight;
  const isOutAbove = selectedEl.offsetTop < containerEl.scrollTop;
  if (isOutAbove) {
    return "above";
  } else if (isOutBelow) {
    return "below";
  } else {
    return "in";
  }
}
export {
  SearchModal as default
};
//# sourceMappingURL=SearchModal.js.map