"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const bs_1 = require("react-icons/bs");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockToDo(props) {
    var _a, _b, _c;
    const { block, className, children } = props;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(className), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [((_a = block === null || block === void 0 ? void 0 : block.to_do) === null || _a === void 0 ? void 0 : _a.checked) && (0, jsx_runtime_1.jsx)(bs_1.BsCheckSquare, {}), !((_b = block === null || block === void 0 ? void 0 : block.to_do) === null || _b === void 0 ? void 0 : _b.checked) && (0, jsx_runtime_1.jsx)(bs_1.BsSquare, {}), (_c = block === null || block === void 0 ? void 0 : block.to_do) === null || _c === void 0 ? void 0 : _c.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index)))] }), children] }));
}
exports.default = BlockToDo;
