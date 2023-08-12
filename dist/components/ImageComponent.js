'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
/**
 * This component is used for all image-related purposes.
 * For example, featured images, book cover image, notion-block's images, etc.
 */
function ImageComponent(props) {
    var _a, _b, _c;
    const image = ((_a = props.image) === null || _a === void 0 ? void 0 : _a.staticImageData) ? ((0, jsx_runtime_1.jsx)(image_1.default, Object.assign({ alt: props.alt || 'Tên hình không xác định', src: props.image.staticImageData, className: props.className }, props.imageProps))) : ((_b = props.image) === null || _b === void 0 ? void 0 : _b.sourceUrl) && ((_c = props.image) === null || _c === void 0 ? void 0 : _c.blurDataURL) ? ((0, jsx_runtime_1.jsx)(image_1.default, Object.assign({ alt: props.alt || 'Tên hình không xác định', src: props.image.sourceUrl, className: props.className, placeholder: "blur", blurDataURL: props.image.blurDataURL }, props.imageProps))) : props.defaultImage ? ((0, jsx_runtime_1.jsx)(image_1.default, Object.assign({ alt: props.alt || 'Tên hình không xác định', src: props.defaultImage, className: props.className }, props.imageProps))) : null;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: image });
}
exports.default = ImageComponent;
