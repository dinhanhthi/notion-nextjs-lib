'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathFontSize = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_katex_1 = __importDefault(require("@matejmazur/react-katex"));
const classnames_1 = __importDefault(require("classnames"));
exports.mathFontSize = 'text-base';
function BlockEquation(props) {
    var _a;
    const { block, className } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(className, 'text-center overflow-auto md:overflow-visible'), children: (0, jsx_runtime_1.jsx)(react_katex_1.default, { className: exports.mathFontSize, math: (_a = block === null || block === void 0 ? void 0 : block.equation) === null || _a === void 0 ? void 0 : _a.expression, settings: {
                throwOnError: false,
                strict: false
            }, block: true }) }));
}
exports.default = BlockEquation;
