"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselItem = exports.Carousel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const fa_1 = require("react-icons/fa");
const react_snap_carousel_1 = require("react-snap-carousel");
const Carousel = ({ items, renderItem }) => {
    const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = (0, react_snap_carousel_1.useSnapCarousel)();
    const arrowBtnClasses = (0, classnames_1.default)('absolute top-14 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all');
    const arrowClasses = (0, classnames_1.default)('text-2xl hover:text-3xl transition-all text-slate-400 hover:text-slate-600');
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { ref: scrollRef, className: (0, classnames_1.default)('no-scrollbar relative flex overflow-auto snap-mandatory gap-4 pb-4'), children: items.map((item, i) => renderItem({
                    item,
                    isSnapPoint: snapPointIndexes.has(i),
                    index: i
                })) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => prev(), className: (0, classnames_1.default)('-left-4', arrowBtnClasses, {
                    'opacity-0': activePageIndex <= 0
                }), children: (0, jsx_runtime_1.jsx)(fa_1.FaChevronLeft, { className: arrowClasses }) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => next(), className: (0, classnames_1.default)('-right-4', arrowBtnClasses, {
                    'opacity-0': activePageIndex === pages.length - 1
                }), children: (0, jsx_runtime_1.jsx)(fa_1.FaChevronRight, { className: arrowClasses }) }), (0, jsx_runtime_1.jsx)("div", { "aria-hidden": true, className: "flex items-center justify-center gap-2 mt-4", children: pages.map((_, i) => ((0, jsx_runtime_1.jsx)("button", { className: (0, classnames_1.default)('h-2.5 rounded-full bg-slate-600 transition-all hover:opacity-60', {
                        'opacity-40 w-2.5 hover:w-3.5': activePageIndex !== i,
                        'w-5 opacity-70': activePageIndex === i
                    }), onClick: () => goTo(i) }, i))) })] }));
};
exports.Carousel = Carousel;
const CarouselItem = ({ isSnapPoint, children, widthClass }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('shrink-0', {
        'snap-start': isSnapPoint
    }, widthClass !== null && widthClass !== void 0 ? widthClass : 'w-64'), children: children }));
exports.CarouselItem = CarouselItem;
