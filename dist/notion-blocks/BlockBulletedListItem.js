"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const go_1 = require("react-icons/go");
const rx_1 = require("react-icons/rx");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockBulletedListItem(props) {
    var _a;
    const { block, className, children } = props;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(className), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center", children: bulletType(block['list_item']) }), (0, jsx_runtime_1.jsx)("div", { className: "block", children: (_a = block === null || block === void 0 ? void 0 : block.bulleted_list_item) === null || _a === void 0 ? void 0 : _a.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) })] }), children] }));
}
exports.default = BlockBulletedListItem;
function bulletType(level) {
    switch (level) {
        case '1':
            return (0, jsx_runtime_1.jsx)(rx_1.RxDotFilled, { className: "mt-0.5 text-xl text-slate-600" });
        case '2':
            return (0, jsx_runtime_1.jsx)(rx_1.RxDot, { className: "mt-1 text-lg" });
        case '3':
            return (0, jsx_runtime_1.jsx)(go_1.GoSquareFill, { className: "mr-1 mt-1.5 text-xs" });
    }
}
