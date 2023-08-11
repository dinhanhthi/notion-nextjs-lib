"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const block_helpers_1 = require("../lib/block-helpers");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockCallout(props) {
    var _a, _b;
    const { block, children, className } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(className), children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('flex rounded-md', (0, block_helpers_1.mapColorClass)((_a = block === null || block === void 0 ? void 0 : block.callout) === null || _a === void 0 ? void 0 : _a.color)), children: [(0, lodash_1.get)(block, 'callout.icon.emoji') && ((0, jsx_runtime_1.jsx)("div", { className: "text-2xl pl-4 pr-2 py-3", children: (0, lodash_1.get)(block, 'callout.icon.emoji') })), (0, jsx_runtime_1.jsxs)("div", { className: "py-4 pl-2 pr-4 w-full", children: [(_b = block === null || block === void 0 ? void 0 : block.callout) === null || _b === void 0 ? void 0 : _b.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))), !!children && (0, jsx_runtime_1.jsx)("div", { className: "-ml-4 pt-3 m2it-inside-box", children: children })] })] }) }));
}
exports.default = BlockCallout;
