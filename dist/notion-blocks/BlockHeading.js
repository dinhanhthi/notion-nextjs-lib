'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const react_1 = require("react");
const block_helpers_1 = require("../lib/block-helpers");
const context_1 = require("../lib/context");
const BlockHeadingToggle_1 = __importDefault(require("./BlockHeadingToggle"));
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockHeading(props) {
    var _a;
    const ctx = (0, react_1.useContext)(context_1.BlockOptionContext);
    const { type, block, className, children } = props;
    let heading;
    let headingElement;
    let anchorElement;
    const h1Size = 'text-3xl';
    const h2Size = 'text-2xl';
    const h3Size = 'text-xl';
    const headingClass = 'scroll-mt-[70px] mt-0';
    const id = (0, block_helpers_1.convertHeadingIdToSlug)(block.id, (_a = block[`${block.type}`]) === null || _a === void 0 ? void 0 : _a.rich_text);
    switch (type) {
        case 'h1':
            heading = block === null || block === void 0 ? void 0 : block.heading_1;
            headingElement = ((0, jsx_runtime_1.jsx)("h1", { id: id, className: (0, classnames_1.default)(h1Size, headingClass), children: insideHeading(heading) }));
            anchorElement = ((0, jsx_runtime_1.jsx)("a", { href: `#${id}`, className: (0, classnames_1.default)('text-sky-600 lg:-ml-6', h1Size), children: "#" }));
            break;
        case 'h2':
            heading = block === null || block === void 0 ? void 0 : block.heading_2;
            headingElement = ((0, jsx_runtime_1.jsx)("h2", { id: id, className: (0, classnames_1.default)(h2Size, headingClass), children: insideHeading(heading) }));
            anchorElement = ((0, jsx_runtime_1.jsx)("a", { href: `#${id}`, className: (0, classnames_1.default)('text-sky-600 lg:-ml-6', h2Size), children: "#" }));
            break;
        case 'h3':
            heading = block === null || block === void 0 ? void 0 : block.heading_3;
            headingElement = ((0, jsx_runtime_1.jsx)("h3", { id: id, className: (0, classnames_1.default)(h3Size, headingClass), children: insideHeading(heading) }));
            anchorElement = ((0, jsx_runtime_1.jsx)("a", { href: `#${id}`, className: (0, classnames_1.default)('text-orange-700 lg:-ml-8', h3Size), children: "##" }));
            break;
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: props.outerClassName, children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)((0, block_helpers_1.mapColorClass)(heading === null || heading === void 0 ? void 0 : heading.color), className, {
                'flex items-start gap-2': !(0, lodash_1.get)(heading, 'is_toggleable') && !ctx.disableAnchorHeading
            }), children: [(0, lodash_1.get)(heading, 'is_toggleable') && children && ((0, jsx_runtime_1.jsx)(BlockHeadingToggle_1.default, { headingElement: headingElement, children: children })), !(0, lodash_1.get)(heading, 'is_toggleable') && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!ctx.disableAnchorHeading && anchorElement, headingElement] }))] }) }));
}
exports.default = BlockHeading;
function insideHeading(heading) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: heading === null || heading === void 0 ? void 0 : heading.rich_text.map((richText, index) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index))) }));
}
