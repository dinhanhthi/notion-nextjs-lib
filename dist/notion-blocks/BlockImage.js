'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
// https://github.com/rpearce/react-medium-image-zoom
const react_medium_image_zoom_1 = __importDefault(require("react-medium-image-zoom"));
const block_helpers_1 = require("../lib/block-helpers");
const config_1 = require("../lib/config");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockImage(props) {
    var _a, _b;
    const [isImageReady, setIsImageReady] = (0, react_1.useState)(false);
    const { block, className } = props;
    const width = Math.min((0, lodash_1.get)(block, 'imageInfo.width', 1000), 1000);
    const height = Math.min((0, lodash_1.get)(block, 'imageInfo.height', 700), 700);
    const blurDataURL = (0, lodash_1.get)(block, 'imageInfo.base64', config_1.defaultBlurDataURL);
    const caption = (_a = block === null || block === void 0 ? void 0 : block.image) === null || _a === void 0 ? void 0 : _a.caption;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(className, 'flex flex-col justify-center items-center gap-2'), children: [block.imgUrl && ((0, jsx_runtime_1.jsx)("div", { className: "relative flex w-full items-center justify-center overflow-hidden", children: (0, jsx_runtime_1.jsx)(react_medium_image_zoom_1.default, { zoomMargin: 30, children: (0, jsx_runtime_1.jsx)(image_1.default, { className: (0, classnames_1.default)({
                            'blur-lg': !isImageReady,
                            'blur-0': isImageReady
                        }), src: block.imgUrl, alt: (0, block_helpers_1.getJoinedRichText)((_b = block === null || block === void 0 ? void 0 : block.image) === null || _b === void 0 ? void 0 : _b.caption), width: width, height: height, blurDataURL: blurDataURL, placeholder: "blur", onLoadingComplete: () => setIsImageReady(true), "data-zoomable": true }) }) })), caption && caption.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) }))] }));
}
exports.default = BlockImage;
