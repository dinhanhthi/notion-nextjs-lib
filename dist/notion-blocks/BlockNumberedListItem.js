"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockNumberedListItem(props) {
    var _a;
    const { block, className, children } = props;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(className), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-baseline gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center", children: block['list_item'] }), (0, jsx_runtime_1.jsx)("div", { className: "block", children: (_a = block === null || block === void 0 ? void 0 : block.numbered_list_item) === null || _a === void 0 ? void 0 : _a.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) })] }), children] }));
}
exports.default = BlockNumberedListItem;
