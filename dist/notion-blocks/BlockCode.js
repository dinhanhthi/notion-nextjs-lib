'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("@tippyjs/react"));
const classnames_1 = __importDefault(require("classnames"));
const react_2 = require("react");
const react_clipboard_js_1 = __importDefault(require("react-clipboard.js"));
const fi_1 = require("react-icons/fi");
const rx_1 = require("react-icons/rx");
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Mermaid_1 = __importDefault(require("../components/Mermaid"));
const block_helpers_1 = require("../lib/block-helpers");
const config_1 = require("../lib/config");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockCode(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { block, className } = props;
    const language = ((_b = (_a = block === null || block === void 0 ? void 0 : block.code) === null || _a === void 0 ? void 0 : _a.language) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || config_1.defaultCodeLanguage;
    const [copied, setCopied] = (0, react_2.useState)(false);
    const onSuccess = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(className, 'group'), children: [(0, jsx_runtime_1.jsxs)("div", { className: `language-${formatCodeLang(language)} syntax-highlighter relative`, children: [(0, jsx_runtime_1.jsx)(react_syntax_highlighter_1.Prism, { language: formatCodeLang(language), style: prism_1.dracula, className: "syntax-highlighter-pre text-sm", showLineNumbers: true, children: (0, block_helpers_1.getJoinedRichText)((_c = block === null || block === void 0 ? void 0 : block.code) === null || _c === void 0 ? void 0 : _c.rich_text) }), (0, jsx_runtime_1.jsx)(react_1.default, { content: copied ? 'Đã sao chép' : 'Sao chép đoạn code', arrow: false, placement: "top", children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('absolute right-2 top-2 duration-100 hover:cursor-pointer', {
                                'opacity-0': !copied
                            }, 'group-hover:opacity-100'), children: (0, jsx_runtime_1.jsx)(react_clipboard_js_1.default, { "data-clipboard-text": (0, block_helpers_1.getJoinedRichText)((_d = block === null || block === void 0 ? void 0 : block.code) === null || _d === void 0 ? void 0 : _d.rich_text), onSuccess: onSuccess, children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!copied && (0, jsx_runtime_1.jsx)(rx_1.RxCopy, { className: "text-lg text-slate-200 hover:text-pink-300" }), copied && (0, jsx_runtime_1.jsx)(fi_1.FiCheck, { className: "text-lg text-green-300" })] }) }) }) })] }), ((_e = block === null || block === void 0 ? void 0 : block.code) === null || _e === void 0 ? void 0 : _e.caption) && ((0, jsx_runtime_1.jsx)("div", { className: "italic opacity-60", children: (_g = (_f = block === null || block === void 0 ? void 0 : block.code) === null || _f === void 0 ? void 0 : _f.caption) === null || _g === void 0 ? void 0 : _g.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) })), ((_h = block === null || block === void 0 ? void 0 : block.code) === null || _h === void 0 ? void 0 : _h.language) === 'mermaid' && ((0, jsx_runtime_1.jsx)(Mermaid_1.default, { chart: (0, block_helpers_1.getJoinedRichText)((_j = block === null || block === void 0 ? void 0 : block.code) === null || _j === void 0 ? void 0 : _j.rich_text) }))] }));
}
exports.default = BlockCode;
/**
 * Convert the code language notation of the Notion api to the code language notation of react-syntax-highlighter.
 * https://developers.notion.com/reference/block#code-blocks
 * https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
 */
const formatCodeLang = (lang) => {
    switch (lang) {
        case 'plain text':
            return 'plaintext';
        case 'objective-c':
            return 'objectivec';
        default:
            return lang;
    }
};
