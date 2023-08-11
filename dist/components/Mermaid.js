'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const mermaid_1 = __importDefault(require("mermaid"));
const react_1 = __importDefault(require("react"));
mermaid_1.default.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose'
});
class Mermaid extends react_1.default.Component {
    componentDidMount() {
        mermaid_1.default.contentLoaded();
    }
    render() {
        // Class "mermaid" is required by mermaid
        return (0, jsx_runtime_1.jsx)("div", { className: "mermaid flex justify-center", children: this.props.chart });
    }
}
exports.default = Mermaid;
