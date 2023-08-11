'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
function BlockBookmark(props) {
    const data = props.block.bookmark;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data && ((0, jsx_runtime_1.jsxs)("a", { className: (0, classnames_1.default)('flex w-full overflow-hidden rounded-md border border-slate-200 p-3', 'hover:cursor-pointer hover:border-sky-300 hover:shadow-sm'), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-[4_1_180px] flex-col justify-between gap-4 overflow-hidden", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-1.5", children: [(0, jsx_runtime_1.jsx)("div", { className: "truncate font-normal", children: data.title }), (0, jsx_runtime_1.jsx)("div", { className: "truncate text-sm font-normal text-slate-600", children: data.description })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative h-4 w-4", children: (0, jsx_runtime_1.jsx)("img", { className: "h-full w-full", src: data.favicon, alt: data.title }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-sm font-normal text-slate-500", children: data.url })] })] }), data.imageSrc && ((0, jsx_runtime_1.jsx)("div", { className: "relative hidden flex-[1_1_100px] sm:block", children: (0, jsx_runtime_1.jsx)("img", { className: "h-full w-full", src: data.imageSrc, alt: data.title }) }))] })) }));
}
exports.default = BlockBookmark;
