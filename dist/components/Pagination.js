"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const link_1 = __importDefault(require("next/link"));
const cg_1 = require("react-icons/cg");
function Pagination(props) {
    const { path, total, current, className, pageAlias } = props;
    const iconSize = 'h-6 w-6';
    const hClass = 'h-9';
    const wClass = 'w-9';
    const sizeCurrentClass = 'h-12 w-12';
    const classNumber = `${hClass} ${wClass} hidden cursor-pointer items-center
    justify-center rounded-full leading-5 transition duration-150 ease-in !flex`;
    const classCurrent = `${sizeCurrentClass} rounded-full bg-main text-white shadow-md
    items-center justify-center leading-5 transition duration-150 ease-in !flex`;
    const classSeparated = `h-10 w-10 flex cursor-pointer items-center
    justify-center rounded-full bg-gray-200 hover:shadow-md`;
    const classArrow = classSeparated + ' opacity-80 hover:opacity-100';
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('my-12 flex flex-col items-center', className), children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center text-gray-700", children: [current > 1 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(current - 1, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classArrow, 'mr-2'), children: (0, jsx_runtime_1.jsx)(cg_1.CgChevronLeft, { className: iconSize }) }) })), current > 4 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(1, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classSeparated, 'mr-2'), children: "1" }) })), (0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: `absolute -z-10 flex ${hClass} w-full rounded-full bg-gray-200 font-medium shadow-md` }), current === 4 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(1, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classNumber, 'ml-2'), children: "1" }) })), current > 2 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(current - 2, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classNumber, { 'ml-2': current !== 4 }), children: current - 2 }) })), current > 1 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(current - 1, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classNumber, { 'ml-2': current <= 2 }), children: current - 1 }) })), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classCurrent, {
                                'mx-1': current !== 1 && current !== total,
                                'mr-2': current === 1,
                                'ml-2': current === total
                            }), children: current }), total - current > 0 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(current + 1, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classNumber, { 'mr-2': total - current <= 1 }), children: current + 1 }) })), total - current > 1 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(current + 2, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classNumber, { 'mr-2': current !== total - 3 }), children: current + 2 }) })), current === total - 3 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(total, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classNumber, 'mr-2'), children: total }) }))] }), total - current > 3 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(total, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classSeparated, 'ml-2'), children: total }) })), total - current > 0 && ((0, jsx_runtime_1.jsx)(link_1.default, { href: getPagePath(current + 1, path, pageAlias), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(classArrow, 'ml-2'), children: (0, jsx_runtime_1.jsx)(cg_1.CgChevronRight, { className: iconSize }) }) }))] }) }));
}
exports.default = Pagination;
const getPagePath = (pageNumber, path, pageAlias) => {
    const alias = pageAlias || 'page';
    return pageNumber === 1 ? path : `${path}${alias}/${pageNumber}/`;
};
