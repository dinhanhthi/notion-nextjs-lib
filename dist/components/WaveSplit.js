"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
function WaveSplit() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('after:block after:h-8 after:w-full after:bg-wave dark:after:bg-wave-dark') }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('h-8 bg-white') })] }));
}
exports.default = WaveSplit;
