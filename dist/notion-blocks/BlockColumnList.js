"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const BlockRender_1 = __importDefault(require("../BlockRender"));
function BlockColumnList(props) {
    const { block, className } = props;
    const children = block['children'];
    if ((children === null || children === void 0 ? void 0 : children.length) === 0)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('w-full grid gap-3', parseColumnClasses(children.length), className), children: children.map((col, index1) => {
            return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('w-full flex flex-col'), children: col['children'].map((child, index2) => ((0, jsx_runtime_1.jsx)(BlockRender_1.default, { block: child, level: 0 }, index2))) }, index1));
        }) }));
}
exports.default = BlockColumnList;
/**
 * On Notion, the number of columns is fixed no matter the width of the screen. When the screen is
 * small, the size of each column is really small. We don't want that, so we change the way each row
 * is rendered based on the number of columns and the width of the screen.
 */
function parseColumnClasses(numCols) {
    switch (numCols) {
        case 1:
            return 'grid-cols-1';
        case 2:
            return 'grid-cols-1 md:grid-cols-2';
        case 3:
            return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
        case 4:
            return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
        default:
            return 'grid-cols-1';
    }
}
