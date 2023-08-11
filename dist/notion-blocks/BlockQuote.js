"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const block_helpers_1 = require("../lib/block-helpers");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
/**
 * TODO: Current version of Notion API doesn't support quote size!
 */
function BlockQuote(props) {
    var _a, _b;
    const { block, children, className } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(className), children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)((0, block_helpers_1.mapColorClass)((_a = block === null || block === void 0 ? void 0 : block.quote) === null || _a === void 0 ? void 0 : _a.color), 'border border-y-0 border-r-0 border-l-4 border-slate-500'), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('py-1 pl-4'), children: (_b = block === null || block === void 0 ? void 0 : block.quote) === null || _b === void 0 ? void 0 : _b.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) }), children] }) }));
}
exports.default = BlockQuote;
