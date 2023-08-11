"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const dynamic_1 = __importDefault(require("next/dynamic"));
const block_helpers_1 = require("./lib/block-helpers");
const BlockBookmark_1 = __importDefault(require("./notion-blocks/BlockBookmark"));
const BlockBulletedListItem_1 = __importDefault(require("./notion-blocks/BlockBulletedListItem"));
const BlockCallout_1 = __importDefault(require("./notion-blocks/BlockCallout"));
const BlockColumnList_1 = __importDefault(require("./notion-blocks/BlockColumnList"));
const BlockHeading_1 = __importDefault(require("./notion-blocks/BlockHeading"));
const BlockNumberedListItem_1 = __importDefault(require("./notion-blocks/BlockNumberedListItem"));
const BlockParagraph_1 = __importDefault(require("./notion-blocks/BlockParagraph"));
const BlockQuote_1 = __importDefault(require("./notion-blocks/BlockQuote"));
const BlockToDo_1 = __importDefault(require("./notion-blocks/BlockToDo"));
const BlockToggle_1 = __importDefault(require("./notion-blocks/BlockToggle"));
const DynamicImage = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('./notion-blocks/BlockImage'))));
const DynamicCode = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('./notion-blocks/BlockCode'))));
const DynamicEquation = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('./notion-blocks/BlockEquation'))));
const DynamicTable = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('./notion-blocks/BlockTable'))));
const DynamicVideo = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require('./notion-blocks/BlockVideo'))));
function BlockRender(props) {
    var _a;
    const { block, level } = props;
    let children;
    const isList = block.type === 'bulleted_list_item' || block.type === 'numbered_list_item';
    if (block.has_children) {
        children = (_a = (0, lodash_1.get)(block, 'children', [])) === null || _a === void 0 ? void 0 : _a.map(childBlock => ((0, jsx_runtime_1.jsx)(BlockRender, { block: childBlock, level: block.type === 'synced_block' ? level : level + 1, isInsideList: isList }, childBlock.id)));
    }
    const basicBlockGap = (0, classnames_1.default)((0, block_helpers_1.getIndentLevelClass)(level, isList, props.isInsideList));
    const basicBlockGapHeading = 'mt-6';
    switch (block.type) {
        case 'synced_block':
            return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
        case 'divider':
            return (0, jsx_runtime_1.jsx)("hr", { className: basicBlockGap });
        case 'paragraph':
            return ((0, jsx_runtime_1.jsx)(BlockParagraph_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap), children: children }));
        case 'numbered_list_item':
            return ((0, jsx_runtime_1.jsx)(BlockNumberedListItem_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap), children: children }));
        case 'bulleted_list_item':
            return ((0, jsx_runtime_1.jsx)(BlockBulletedListItem_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap), children: children }));
        case 'to_do':
            return ((0, jsx_runtime_1.jsx)(BlockToDo_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap), children: children }));
        case 'heading_1':
            return ((0, jsx_runtime_1.jsx)(BlockHeading_1.default, { type: 'h1', block: block, outerClassName: (0, block_helpers_1.getIndentLevelClass)(level, false, props.isInsideList), className: (0, classnames_1.default)(basicBlockGap, basicBlockGapHeading), children: children }));
        case 'heading_2':
            return ((0, jsx_runtime_1.jsx)(BlockHeading_1.default, { type: 'h2', block: block, outerClassName: (0, block_helpers_1.getIndentLevelClass)(level, false, props.isInsideList), className: (0, classnames_1.default)(basicBlockGap, basicBlockGapHeading), children: children }));
        case 'heading_3':
            return ((0, jsx_runtime_1.jsx)(BlockHeading_1.default, { type: 'h3', block: block, outerClassName: (0, block_helpers_1.getIndentLevelClass)(level, false, props.isInsideList), className: (0, classnames_1.default)(basicBlockGap, basicBlockGapHeading), children: children }));
        case 'quote':
            return ((0, jsx_runtime_1.jsx)(BlockQuote_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap), children: children }));
        // For both code and mermaid
        case 'code':
            return (0, jsx_runtime_1.jsx)(DynamicCode, { block: block, className: (0, classnames_1.default)(basicBlockGap) });
        case 'equation':
            return (0, jsx_runtime_1.jsx)(DynamicEquation, { block: block, className: (0, classnames_1.default)(basicBlockGap) });
        case 'column_list':
            return (0, jsx_runtime_1.jsx)(BlockColumnList_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap) });
        case 'table':
            return (0, jsx_runtime_1.jsx)(DynamicTable, { block: block, className: (0, classnames_1.default)(basicBlockGap) });
        case 'toggle':
            return ((0, jsx_runtime_1.jsx)(BlockToggle_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap), children: children }));
        case 'callout':
            return ((0, jsx_runtime_1.jsx)(BlockCallout_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap), children: children }));
        case 'image':
            return (0, jsx_runtime_1.jsx)(DynamicImage, { block: block, className: (0, classnames_1.default)(basicBlockGap) });
        case 'video':
            return (0, jsx_runtime_1.jsx)(DynamicVideo, { block: block, className: (0, classnames_1.default)(basicBlockGap) });
        case 'bookmark':
            return ((0, jsx_runtime_1.jsx)(BlockBookmark_1.default, { block: block, className: (0, classnames_1.default)(basicBlockGap) }));
        default:
            return null;
    }
}
exports.default = BlockRender;
