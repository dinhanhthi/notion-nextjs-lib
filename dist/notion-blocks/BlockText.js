"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const link_1 = __importDefault(require("next/link"));
const block_helpers_1 = require("../lib/block-helpers");
function BlockText(props) {
    var _a, _b, _c, _d;
    if (props.richText.plain_text.includes('\n')) {
        const lines = props.richText.plain_text.split('\n');
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: lines.map((line, index) => ((0, jsx_runtime_1.jsxs)("span", { children: [line, index !== lines.length - 1 && (0, jsx_runtime_1.jsx)("br", {})] }, index))) }));
    }
    // Hyperlink
    if (props.richText.type === 'text' &&
        !((_a = props.ignore) === null || _a === void 0 ? void 0 : _a.includes('hyperlink')) &&
        props.richText.href) {
        // Link contains "math2it.com"
        // This is the link coming from the current version of math2it, not the old ones
        if (props.richText.href.includes('math2it.com') && !props.richText.href.includes('@')) {
            const uri = getUriFromUrl(props.richText.href);
            return ((0, jsx_runtime_1.jsx)(link_1.default, { className: (0, block_helpers_1.generateTextAnnotationClasses)(props.richText.annotations, props.ignore), href: uri, children: props.richText.plain_text }));
        }
        else {
            return ((0, jsx_runtime_1.jsx)("a", { className: (0, classnames_1.default)('m2it-link', (0, block_helpers_1.generateTextAnnotationClasses)(props.richText.annotations, props.ignore)), href: props.richText.href, target: "_blank", rel: "noreferrer", children: props.richText.plain_text }));
        }
    }
    // Mention a page
    if (!((_b = props.ignore) === null || _b === void 0 ? void 0 : _b.includes('hyperlink')) &&
        props.richText.type === 'mention' &&
        ((_c = props.richText.mention) === null || _c === void 0 ? void 0 : _c.type) === 'page' &&
        (0, lodash_1.get)(props.richText, 'mention.page.uri') // "uri" is a custom property defined by Math2IT
    ) {
        return ((0, jsx_runtime_1.jsx)(link_1.default, { className: (0, block_helpers_1.generateTextAnnotationClasses)(props.richText.annotations, props.ignore), href: (0, lodash_1.get)(props.richText, 'mention.page.uri', '/'), children: props.richText.plain_text }));
    }
    // Mention a date
    if (props.richText.type === 'mention' && ((_d = props.richText.mention) === null || _d === void 0 ? void 0 : _d.type) === 'date') {
        return ((0, jsx_runtime_1.jsx)("span", { className: (0, block_helpers_1.generateTextAnnotationClasses)(props.richText.annotations, props.ignore), children: formatDate(props.richText.plain_text) }));
    }
    const noDecoration = !props.richText.annotations.bold &&
        !props.richText.annotations.italic &&
        !props.richText.annotations.underline &&
        !props.richText.annotations.strikethrough &&
        !props.richText.annotations.code &&
        props.richText.annotations.color === 'default' &&
        !props.richText.href;
    if (noDecoration)
        return props.richText.plain_text;
    return ((0, jsx_runtime_1.jsx)("span", { className: (0, block_helpers_1.generateTextAnnotationClasses)(props.richText.annotations, props.ignore), children: props.richText.plain_text }));
}
exports.default = BlockText;
function getUriFromUrl(url) {
    // Remove the protocol (http:// or https://)
    const withoutProtocol = url.replace(/^(https?:\/\/)/, '');
    // Remove "www" if present
    const withoutWWW = withoutProtocol.replace(/^www\./, '');
    // Remove trailing slashes
    const withoutTrailingSlashes = withoutWWW.replace(/\/+$/, '');
    // Remove "math2it.com" if present
    const withoutDomain = withoutTrailingSlashes.replace(/math2it.com/, '');
    // Add "/" at the beginning and the end
    const slug = `${withoutDomain}/`;
    return slug;
}
function formatDate(inputString) {
    // Split the input string by the hyphen '-'
    const [year, month, day] = inputString.split('-');
    // Concatenate the day, month, and year with forward slashes '/'
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}
