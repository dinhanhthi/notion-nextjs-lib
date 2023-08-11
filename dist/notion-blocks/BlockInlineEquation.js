'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_katex_1 = __importDefault(require("@matejmazur/react-katex"));
const block_helpers_1 = require("../lib/block-helpers");
const BlockEquation_1 = require("./BlockEquation");
function BlockInlineEquation(props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)("span", { className: (0, block_helpers_1.generateTextAnnotationClasses)(props.equation.annotations), children: (0, jsx_runtime_1.jsx)(react_katex_1.default, { className: (_a = props.fontSize) !== null && _a !== void 0 ? _a : BlockEquation_1.mathFontSize, math: props.equation.plain_text, settings: {
                throwOnError: false,
                strict: false
            } }) }));
}
exports.default = BlockInlineEquation;
