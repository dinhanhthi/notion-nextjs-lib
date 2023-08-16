"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/SearchModal.tsx
var SearchModal_exports = {};
__export(SearchModal_exports, {
  default: () => SearchModal
});
module.exports = __toCommonJS(SearchModal_exports);
var import_react = require("@headlessui/react");
var import_classnames = __toESM(require("classnames"));
var import_html_react_parser = __toESM(require("html-react-parser"));
var import_lodash = require("lodash");
var import_link = __toESM(require("next/link"));
var import_navigation = require("next/navigation");
var import_react2 = require("react");
var import_ai = require("react-icons/ai");
var import_bs = require("react-icons/bs");
var import_fi = require("react-icons/fi");
var import_io5 = require("react-icons/io5");
var import_swr = __toESM(require("swr"));
var import_jsx_runtime = require("react/jsx-runtime");
function SearchModal(props) {
  var _a, _b, _c;
  const inputRef = (0, import_react2.useRef)(null);
  const containerRef = (0, import_react2.useRef)(null);
  const [query, setQuery] = (0, import_react2.useState)("");
  const [queryToSearch, setQueryToSearch] = (0, import_react2.useState)(query);
  const [selected, setSelected] = (0, import_react2.useState)(-1);
  const router = (0, import_navigation.useRouter)();
  const {
    data: fullData,
    error,
    isLoading
  } = (0, import_swr.default)(
    [props.url, { query: queryToSearch }],
    ([url, params]) => fetcher(url, params)
  );
  const data = fullData ? fullData.filter((rs) => rs.isPublished) : fullData;
  if (error)
    console.log("\u{1F41E} Error in search modal: ", error);
  const debounceSearch = (0, import_react2.useCallback)(
    (0, import_lodash.debounce)((value) => triggerSearch(value), 1e3),
    [queryToSearch]
  );
  function handleOnchangeInput(e) {
    const { value } = e.target;
    setQuery(value);
    debounceSearch(value);
  }
  (0, import_react2.useLayoutEffect)(() => {
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
    var _a2;
    if (e.key === "Enter") {
      if ((data == null ? void 0 : data.length) && selected >= 0 && selected < (data == null ? void 0 : data.length)) {
        const uri = props.slugPrefix ? `${props.slugPrefix}/${data[selected].slug}/` : `${data[selected].slug}/`;
        e.preventDefault();
        props.closeModal();
        router.push(uri);
      } else {
        triggerSearch(((_a2 = inputRef.current) == null ? void 0 : _a2.value) || "");
        debounceSearch.cancel();
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => !data || prev < data.length - 1 ? prev + 1 : prev);
      if ((data == null ? void 0 : data.length) && (data == null ? void 0 : data.length) > 0 && selected === (data == null ? void 0 : data.length) - 1) {
        setSelected(0);
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => prev > 0 ? prev - 1 : prev);
      if ((data == null ? void 0 : data.length) && (data == null ? void 0 : data.length) > 0 && selected === 0) {
        setSelected((data == null ? void 0 : data.length) - 1);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Transition, { appear: true, show: props.isOpen, as: import_react2.Fragment, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Dialog, { as: "div", className: (0, import_classnames.default)("relative z-50", props.className), onClose: props.closeModal, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.Transition.Child,
      {
        as: import_react2.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-opacity/25 fixed inset-0 bg-black opacity-40" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex min-h-full items-start justify-center p-4 pt-20 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.Transition.Child,
      {
        as: import_react2.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-300",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_react.Dialog.Panel,
          {
            className: (0, import_classnames.default)(
              "flex flex-col gap-0 w-full transform rounded-md divide-y",
              "md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw] max-h-[80vh]",
              "bg-white text-left shadow-lg",
              "align-middle shadow-xl transition-all text-slate-800"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_classnames.default)("flex items-center gap-3 p-4"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_classnames.default)("grid place-items-center text-slate-500"), children: [
                  (data || error || (0, import_lodash.get)(data, "[0].isFake")) && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_fi.FiSearch, { className: "text-2xl" }),
                  isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ai.AiOutlineLoading3Quarters, { className: "text-2xl" }) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "input",
                  {
                    ref: inputRef,
                    className: (0, import_classnames.default)(
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
                query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => setQuery(""), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_io5.IoCloseCircle, { className: "h-5 w-5 text-slate-500" }) })
              ] }),
              error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-4 text-center text-base", children: props.errorMessage || "There was an error fetching the search results." }),
              data && !((_a = data == null ? void 0 : data[0]) == null ? void 0 : _a.isFake) && query && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-4 text-center text-base", children: props.noResultsMessage || "No results found." }),
                data.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_classnames.default)("flex flex-col divide-y overflow-hidden"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "div",
                    {
                      ref: containerRef,
                      className: (0, import_classnames.default)(
                        "flex flex-col divide-y divide-slate-150 overflow-auto m2it-scrollbar"
                      ),
                      children: data.map((item, index) => {
                        const uri = props.slugPrefix ? `/${props.slugPrefix}/${item.slug}/` : `/${item.slug}/`;
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          import_link.default,
                          {
                            onClick: props.closeModal,
                            href: uri,
                            className: (0, import_classnames.default)("flex gap-3 py-4 px-4 w-full", {
                              "bg-gray-100": selected === index
                            }),
                            onMouseMoveCapture: () => handleMouseMoveCapture(index),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-0.5", children: [
                                !item.isBookPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_io5.IoDocumentTextOutline, { className: "text-xl opacity-80" }),
                                item.isBookPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_io5.IoBookOutline, { className: "text-xl opacity-80" })
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_classnames.default)("w-full flex flex-col text-slate-900 gap-1"), children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  "div",
                                  {
                                    className: (0, import_classnames.default)(
                                      "w-full text-base flex items-center justify-between"
                                    ),
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                        "div",
                                        {
                                          className: (0, import_classnames.default)({
                                            "pr-4 pb-1 border-b border-dashed": item.textHighlighted
                                          }),
                                          children: (0, import_html_react_parser.default)(item.titleHighlighted) || item.title
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                        "div",
                                        {
                                          className: (0, import_classnames.default)({
                                            visible: selected === index,
                                            invisible: selected !== index
                                          }),
                                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_bs.BsArrowReturnLeft, { className: "text-lg opacity-70" })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                item.textHighlighted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm opacity-80", children: (0, import_html_react_parser.default)(item.textHighlighted) })
                              ] })
                            ]
                          },
                          item.id
                        );
                      })
                    }
                  ),
                  query && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "p-3 pl-4 text-sm font-normal text-slate-500", children: [
                    ((_b = props.foundResultsMessage) == null ? void 0 : _b.split("{{count}}")[0]) || "Found ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-semibold text-slate-900", children: data.length }),
                    ((_c = props.foundResultsMessage) == null ? void 0 : _c.split("{{count}}")[1]) || " results"
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
//# sourceMappingURL=SearchModal.js.map