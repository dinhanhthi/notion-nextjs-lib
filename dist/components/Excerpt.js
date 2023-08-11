"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BlockRichText_1 = __importDefault(require("../notion-blocks/BlockRichText"));
function Excerpt(props) {
    if (!props.excerpt || !props.excerpt.length) {
        if (props.defaultExcerpt)
            return (0, jsx_runtime_1.jsx)("span", { children: props.defaultExcerpt });
        return 'Undefined excerpt';
    }
    return ((0, jsx_runtime_1.jsx)("span", { children: props.excerpt.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText, ignore: ['hyperlink'] }, index))) }));
}
exports.default = Excerpt;
