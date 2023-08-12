'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const classnames_1 = __importDefault(require("classnames"));
const html_react_parser_1 = __importDefault(require("html-react-parser"));
const lodash_1 = require("lodash");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const react_2 = require("react");
const ai_1 = require("react-icons/ai");
const bs_1 = require("react-icons/bs");
const fi_1 = require("react-icons/fi");
const io5_1 = require("react-icons/io5");
const swr_1 = __importDefault(require("swr"));
function SearchModal(props) {
    var _a;
    const inputRef = (0, react_2.useRef)(null);
    const containerRef = (0, react_2.useRef)(null);
    const [query, setQuery] = (0, react_2.useState)('');
    const [queryToSearch, setQueryToSearch] = (0, react_2.useState)(query);
    const [selected, setSelected] = (0, react_2.useState)(-1);
    const router = (0, navigation_1.useRouter)();
    const { data: fullData, error, isLoading } = (0, swr_1.default)([props.url, { query: queryToSearch }], ([url, params]) => fetcher(url, params));
    const data = fullData ? fullData.filter(rs => rs.isPublished) : fullData;
    if (error)
        console.log('🐞 Error in search modal: ', error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceSearch = (0, react_2.useCallback)((0, lodash_1.debounce)(value => triggerSearch(value), 1000), [queryToSearch]);
    function handleOnchangeInput(e) {
        const { value } = e.target;
        setQuery(value);
        debounceSearch(value);
    }
    // Auto scroll the search container when navigating with arrow keys
    (0, react_2.useLayoutEffect)(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const selectedItem = container.children[selected];
            const view = checkIsInView(selectedItem, container);
            if (view === 'above') {
                container.scrollTo({
                    top: selectedItem.offsetTop - container.offsetTop,
                    behavior: 'smooth'
                });
            }
            else if (view === 'below') {
                container.scrollTo({
                    top: selectedItem.offsetTop + selectedItem.offsetHeight - container.offsetHeight,
                    behavior: 'smooth'
                });
            }
        }
    }, [selected]);
    function handleKeyDown(e) {
        var _a;
        if (e.key === 'Enter') {
            // navigate to the selected result
            if ((data === null || data === void 0 ? void 0 : data.length) && selected >= 0 && selected < (data === null || data === void 0 ? void 0 : data.length)) {
                const uri = props.slugPrefix
                    ? `${props.slugPrefix}/${data[selected].slug}/`
                    : `${data[selected].slug}/`;
                e.preventDefault();
                props.closeModal();
                router.push(uri);
            }
            else {
                // trigger search
                triggerSearch(((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value) || '');
                debounceSearch.cancel();
            }
        }
        // navigate between the results
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelected(prev => (!data || prev < data.length - 1 ? prev + 1 : prev));
            // if before the arrow down, the selected item is the last item, set the selected to the first item
            if ((data === null || data === void 0 ? void 0 : data.length) && (data === null || data === void 0 ? void 0 : data.length) > 0 && selected === (data === null || data === void 0 ? void 0 : data.length) - 1) {
                setSelected(0);
            }
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelected(prev => (prev > 0 ? prev - 1 : prev));
            // if before the arrow up, the selected item is the first item, set the selected to the last item
            if ((data === null || data === void 0 ? void 0 : data.length) && (data === null || data === void 0 ? void 0 : data.length) > 0 && selected === 0) {
                setSelected((data === null || data === void 0 ? void 0 : data.length) - 1);
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
    return ((0, jsx_runtime_1.jsx)(react_1.Transition, { appear: true, show: props.isOpen, as: react_2.Fragment, children: (0, jsx_runtime_1.jsxs)(react_1.Dialog, { as: "div", className: (0, classnames_1.default)('relative z-50', props.className), onClose: props.closeModal, children: [(0, jsx_runtime_1.jsx)(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-opacity/25 fixed inset-0 bg-black opacity-40" }) }), (0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 overflow-y-auto", children: (0, jsx_runtime_1.jsx)("div", { className: "flex min-h-full items-start justify-center p-4 pt-20 text-center", children: (0, jsx_runtime_1.jsx)(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-300", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: (0, jsx_runtime_1.jsxs)(react_1.Dialog.Panel, { className: (0, classnames_1.default)('flex flex-col gap-0 w-full transform rounded-md divide-y', 'md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw] max-h-[80vh]', 'bg-white text-left shadow-lg', 'align-middle shadow-xl transition-all text-slate-800'), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('flex items-center gap-3 p-4'), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('grid place-items-center text-slate-500'), children: [(data || error || (0, lodash_1.get)(data, '[0].isFake')) && !isLoading && ((0, jsx_runtime_1.jsx)(fi_1.FiSearch, { className: "text-2xl" })), isLoading && ((0, jsx_runtime_1.jsx)("div", { className: "animate-spin", children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineLoading3Quarters, { className: "text-2xl" }) }))] }), (0, jsx_runtime_1.jsx)("input", { ref: inputRef, className: (0, classnames_1.default)('peer h-full w-full text-ellipsis bg-transparent pr-2 outline-none', 'm2it-hide-wscb'), id: "search", type: "search", placeholder: "T\u00ECm b\u00E0i vi\u1EBFt...", autoComplete: "off", value: query, onChange: e => handleOnchangeInput(e), onKeyDown: e => handleKeyDown(e) }), query && ((0, jsx_runtime_1.jsx)("button", { onClick: () => setQuery(''), children: (0, jsx_runtime_1.jsx)(io5_1.IoCloseCircle, { className: "h-5 w-5 text-slate-500" }) }))] }), error && ((0, jsx_runtime_1.jsx)("div", { className: "p-4 text-center text-base", children: "C\u00F3 l\u1ED7i trong qu\u00E1 tr\u00ECnh t\u1EA3i d\u1EEF li\u1EC7u, vui l\u00F2ng th\u1EED l\u1EA1i ho\u1EB7c li\u00EAn h\u1EC7 Math2IT!" })), data && !((_a = data === null || data === void 0 ? void 0 : data[0]) === null || _a === void 0 ? void 0 : _a.isFake) && query && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [data.length === 0 && ((0, jsx_runtime_1.jsx)("div", { className: "p-4 text-center text-base", children: "Kh\u00F4ng t\u00ECm th\u1EA5y b\u00E0i vi\u1EBFt ph\u00F9 h\u1EE3p!" })), data.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('flex flex-col divide-y overflow-hidden'), children: [(0, jsx_runtime_1.jsx)("div", { ref: containerRef, className: (0, classnames_1.default)('flex flex-col divide-y divide-slate-150 overflow-auto m2it-scrollbar'), children: data.map((item, index) => {
                                                            const uri = props.slugPrefix
                                                                ? `/${props.slugPrefix}/${item.slug}/`
                                                                : `/${item.slug}/`;
                                                            return ((0, jsx_runtime_1.jsxs)(link_1.default, { onClick: props.closeModal, href: uri, className: (0, classnames_1.default)('flex gap-3 py-4 px-4 w-full', {
                                                                    'bg-gray-100': selected === index
                                                                }), onMouseMoveCapture: () => handleMouseMoveCapture(index), children: [(0, jsx_runtime_1.jsxs)("div", { className: "mt-0.5", children: [!item.isBookPost && ((0, jsx_runtime_1.jsx)(io5_1.IoDocumentTextOutline, { className: "text-xl opacity-80" })), item.isBookPost && ((0, jsx_runtime_1.jsx)(io5_1.IoBookOutline, { className: "text-xl opacity-80" }))] }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('w-full flex flex-col text-slate-900 gap-1'), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('w-full text-base flex items-center justify-between'), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)({
                                                                                            'pr-4 pb-1 border-b border-dashed': item.textHighlighted
                                                                                        }), children: (0, html_react_parser_1.default)(item.titleHighlighted) || item.title }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)({
                                                                                            visible: selected === index,
                                                                                            invisible: selected !== index
                                                                                        }), children: (0, jsx_runtime_1.jsx)(bs_1.BsArrowReturnLeft, { className: "text-lg opacity-70" }) })] }), item.textHighlighted && ((0, jsx_runtime_1.jsx)("div", { className: "text-sm opacity-80", children: (0, html_react_parser_1.default)(item.textHighlighted) }))] })] }, item.id));
                                                        }) }), query && ((0, jsx_runtime_1.jsxs)("div", { className: "p-3 pl-4 text-sm font-normal text-slate-500", children: ["T\u00ECm th\u1EA5y", ' ', (0, jsx_runtime_1.jsx)("span", { className: "font-semibold text-slate-900", children: data.length }), " k\u1EBFt qu\u1EA3."] }))] }))] }))] }) }) }) })] }) }));
}
exports.default = SearchModal;
const fetcher = async (url, params) => {
    if (params.query === '')
        return [{ isFake: true, isPublished: true }];
    const headers = {
        'Content-Type': 'application/json'
    };
    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(params),
        mode: 'cors'
    });
    const json = await res.json();
    return json;
};
function checkIsInView(selectedEl, containerEl) {
    const isOutBelow = selectedEl.offsetTop + selectedEl.offsetHeight - containerEl.scrollTop >
        containerEl.offsetHeight;
    const isOutAbove = selectedEl.offsetTop < containerEl.scrollTop;
    if (isOutAbove) {
        return 'above';
    }
    else if (isOutBelow) {
        return 'below';
    }
    else {
        return 'in';
    }
}
