"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const BlockRichText_1 = __importDefault(require("./BlockRichText"));
function BlockTable(props) {
    var _a, _b, _c, _d;
    const { block, className } = props;
    const bodyRows = (block === null || block === void 0 ? void 0 : block.table.has_row_header)
        ? (_a = block === null || block === void 0 ? void 0 : block['children']) === null || _a === void 0 ? void 0 : _a.slice(1)
        : block === null || block === void 0 ? void 0 : block['children'];
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(className, 'w-full overflow-auto md:overflow-visible'), children: (0, jsx_runtime_1.jsxs)("table", { className: "table-auto", children: [((_b = block === null || block === void 0 ? void 0 : block.table) === null || _b === void 0 ? void 0 : _b.has_row_header) && ((0, jsx_runtime_1.jsx)("thead", { children: trBlock({
                        cells: (_d = (_c = block === null || block === void 0 ? void 0 : block['children']) === null || _c === void 0 ? void 0 : _c[0].table_row) === null || _d === void 0 ? void 0 : _d.cells,
                        isRowHeader: true,
                        key: 0
                    }) })), (0, jsx_runtime_1.jsx)("tbody", { children: bodyRows === null || bodyRows === void 0 ? void 0 : bodyRows.map((row, index) => {
                        var _a, _b;
                        return trBlock({
                            cells: (_a = row.table_row) === null || _a === void 0 ? void 0 : _a.cells,
                            isRowHeader: false,
                            key: index,
                            hasColumnHeader: (_b = block === null || block === void 0 ? void 0 : block.table) === null || _b === void 0 ? void 0 : _b.has_column_header
                        });
                    }) })] }) }));
}
exports.default = BlockTable;
function trBlock(options) {
    const { cells, isRowHeader, key, hasColumnHeader } = options;
    return ((0, jsx_runtime_1.jsx)("tr", { children: cells.map((cell, index, _cells) => {
            if (hasColumnHeader && index === 0) {
                return cellBlock({
                    cell,
                    key: index,
                    isHeader: true,
                    headerType: 'column'
                    // hideBorder: index + 1 === cells.length
                });
            }
            else {
                return cellBlock({
                    cell,
                    key: index,
                    isHeader: isRowHeader,
                    headerType: 'row'
                    // hideBorder: index + 1 === cells.length
                });
            }
        }) }, key));
}
function cellBlock(options) {
    const { cell, isHeader, key, headerType, hideBorder } = options;
    const cellClass = { 'px-4 py-2': true, 'border border-slate-300': !hideBorder };
    if (isHeader) {
        const headerClass = {
            'bg-sky-100': headerType === 'row',
            'bg-gray-100': headerType === 'column'
        };
        return ((0, jsx_runtime_1.jsx)("th", { className: (0, classnames_1.default)(cellClass, headerClass), children: cell.map((richText, index2) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index2))) }, key));
    }
    else {
        return ((0, jsx_runtime_1.jsx)("td", { className: (0, classnames_1.default)(cellClass), children: cell.map((richText, index2) => ((0, jsx_runtime_1.jsx)(BlockRichText_1.default, { richText: richText }, index2))) }, key));
    }
}
