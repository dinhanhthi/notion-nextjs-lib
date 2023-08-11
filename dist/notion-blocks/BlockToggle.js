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
const block_helpers_1 = require("../lib/block-helpers");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockToggle(props) {
    var _a;
    const { block, children, className } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)((0, block_helpers_1.mapColorClass)((_a = block === null || block === void 0 ? void 0 : block.toggle) === null || _a === void 0 ? void 0 : _a.color), 'rounded-md border-[0.5px] border-slate-200', className), children: (0, jsx_runtime_1.jsx)(react_1.Disclosure, { defaultOpen: false, children: ({ open }) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_1.Disclosure.Button, { className: (0, classnames_1.default)('flex gap-2 w-full items-start p-2 rounded-md', {
                                'bg-gray-100 hover:bg-gray-200': open,
                                'bg-gray-50 hover:bg-gray-100': !open
                            }), children: [(0, jsx_runtime_1.jsx)(bs_1.BsFillCaretRightFill, { className: (0, classnames_1.default)('text-base transform ease-in-out transition-all duration-[400ms] mt-[4px]', {
                                        'rotate-90': open,
                                        'rotate-0': !open
                                    }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-start", children: (_a = block === null || block === void 0 ? void 0 : block.toggle) === null || _a === void 0 ? void 0 : _a.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) })] }), !!children && ((0, jsx_runtime_1.jsx)(react_1.Disclosure.Panel, { className: "rounded-b-md py-4 pr-4 m2it-inside-box", children: children }))] }));
            } }) }));
}
exports.default = BlockToggle;
