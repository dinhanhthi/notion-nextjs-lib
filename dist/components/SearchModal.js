"use client";

// src/components/SearchModal.tsx
import { Dialog, Transition } from "@headlessui/react";
import cn from "classnames";
import { debounce, get } from "lodash";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useCallback, useLayoutEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoBookOutline, IoCloseCircle, IoDocumentTextOutline } from "react-icons/io5";
import useSWR from "swr";
import { Fragment as Fragment2, jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(Transition, { appear: true, show: props.isOpen, as: Fragment, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: cn("relative z-50", props.className), onClose: props.closeModal, children: [
    /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx("div", { className: "bg-opacity/25 fixed inset-0 bg-black opacity-40" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-start justify-center p-4 pt-20 text-center", children: /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-300",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ jsxs(
          Dialog.Panel,
          {
            className: cn(
              "flex flex-col gap-0 w-full transform rounded-md divide-y",
              "md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw] max-h-[80vh]",
              "bg-white text-left shadow-lg",
              "align-middle shadow-xl transition-all text-slate-800"
            ),
            children: [
              /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3 p-4"), children: [
                /* @__PURE__ */ jsxs("div", { className: cn("grid place-items-center text-slate-500"), children: [
                  (data || error || get(data, "[0].isFake")) && !isLoading && /* @__PURE__ */ jsx(FiSearch, { className: "text-2xl" }),
                  isLoading && /* @__PURE__ */ jsx("div", { className: "animate-spin", children: /* @__PURE__ */ jsx(AiOutlineLoading3Quarters, { className: "text-2xl" }) })
                ] }),
                /* @__PURE__ */ jsx(
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
                query && /* @__PURE__ */ jsx("button", { onClick: () => setQuery(""), children: /* @__PURE__ */ jsx(IoCloseCircle, { className: "h-5 w-5 text-slate-500" }) })
              ] }),
              error && /* @__PURE__ */ jsx("div", { className: "p-4 text-center text-base", children: props.errorMessage || "There was an error fetching the search results." }),
              data && !data?.[0]?.isFake && query && /* @__PURE__ */ jsxs(Fragment2, { children: [
                data.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-4 text-center text-base", children: props.noResultsMessage || "No results found." }),
                data.length > 0 && /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col divide-y overflow-hidden"), children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      ref: containerRef,
                      className: cn(
                        "flex flex-col divide-y divide-slate-150 overflow-auto m2it-scrollbar"
                      ),
                      children: data.map((item, index) => {
                        const uri = props.slugPrefix ? `/${props.slugPrefix}/${item.slug}/` : `/${item.slug}/`;
                        return /* @__PURE__ */ jsxs(
                          Link,
                          {
                            onClick: props.closeModal,
                            href: uri,
                            className: cn("flex gap-3 py-4 px-4 w-full", {
                              "bg-gray-100": selected === index
                            }),
                            onMouseMoveCapture: () => handleMouseMoveCapture(index),
                            children: [
                              /* @__PURE__ */ jsxs("div", { className: "mt-0.5", children: [
                                !item.isBookPost && /* @__PURE__ */ jsx(IoDocumentTextOutline, { className: "text-xl opacity-80" }),
                                item.isBookPost && /* @__PURE__ */ jsx(IoBookOutline, { className: "text-xl opacity-80" })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: cn("w-full flex flex-col text-slate-900 gap-1"), children: [
                                /* @__PURE__ */ jsxs(
                                  "div",
                                  {
                                    className: cn(
                                      "w-full text-base flex items-center justify-between"
                                    ),
                                    children: [
                                      /* @__PURE__ */ jsxs(
                                        "div",
                                        {
                                          className: cn({
                                            "pr-4 pb-1 border-b border-dashed": item.textHighlighted
                                          }),
                                          children: [
                                            item.titleHighlighted && /* @__PURE__ */ jsx(
                                              "span",
                                              {
                                                dangerouslySetInnerHTML: {
                                                  __html: item.titleHighlighted
                                                }
                                              }
                                            ),
                                            !item.titleHighlighted && /* @__PURE__ */ jsx("span", { children: item.title })
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ jsx(
                                        "div",
                                        {
                                          className: cn({
                                            visible: selected === index,
                                            invisible: selected !== index
                                          }),
                                          children: /* @__PURE__ */ jsx(BsArrowReturnLeft, { className: "text-lg opacity-70" })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                item.textHighlighted && /* @__PURE__ */ jsx(
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
                  query && /* @__PURE__ */ jsxs("div", { className: "p-3 pl-4 text-sm font-normal text-slate-500", children: [
                    props.foundResultsMessage?.split("{{count}}")[0] || "Found ",
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-900", children: data.length }),
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