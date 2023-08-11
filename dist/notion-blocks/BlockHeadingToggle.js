'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const classnames_1 = __importDefault(require("classnames"));
const bs_1 = require("react-icons/bs");
function BlockHeadingToggle(props) {
    return ((0, jsx_runtime_1.jsx)(react_1.Disclosure, { defaultOpen: false, children: ({ open }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center py-1 ml-[-10px]", children: [(0, jsx_runtime_1.jsx)(react_1.Disclosure.Button, { className: "rounded-md p-1 hover:bg-[#99989824]", children: (0, jsx_runtime_1.jsx)(bs_1.BsFillCaretRightFill, { className: (0, classnames_1.default)('transform ease-in-out transition-all duration-[400ms] text-lg', {
                                    'rotate-90': open,
                                    'rotate-0': !open
                                }) }) }), props.headingElement] }), (0, jsx_runtime_1.jsx)(react_1.Disclosure.Panel, { children: (0, jsx_runtime_1.jsx)("div", { children: props.children }) })] })) }));
}
exports.default = BlockHeadingToggle;
