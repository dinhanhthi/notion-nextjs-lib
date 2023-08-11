"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const block_helpers_1 = require("../lib/block-helpers");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockParagraph(props) {
    var _a, _b;
    const { block, children, className } = props;
    return (
    // We don't use <p> here because there may be other not-supported tags in the <p> tag.
    (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)((0, block_helpers_1.mapColorClass)((_a = block === null || block === void 0 ? void 0 : block.paragraph) === null || _a === void 0 ? void 0 : _a.color), className), children: [(_b = block === null || block === void 0 ? void 0 : block.paragraph) === null || _b === void 0 ? void 0 : _b.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))), children] }));
}
exports.default = BlockParagraph;
