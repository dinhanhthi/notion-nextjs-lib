'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const react_youtube_1 = __importDefault(require("react-youtube"));
const block_helpers_1 = require("../lib/block-helpers");
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockVideo(props) {
    const videoUrl = (0, lodash_1.get)(props.block, 'video.external.url');
    const videoId = (0, block_helpers_1.getYoutubeVideoId)(videoUrl);
    if (!videoId)
        return null;
    const caption = (0, lodash_1.get)(props.block, 'video.caption');
    const title = caption ? (0, block_helpers_1.getJoinedRichText)(caption) : '';
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(props.className, 'flex flex-col justify-center items-center gap-2'), children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(react_youtube_1.default, { videoId: videoId, title: title, className: "aspect-video w-full" }) }), caption && caption.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "text-sm italic opacity-90", children: caption.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) }))] }));
}
exports.default = BlockVideo;
