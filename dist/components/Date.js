"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const moment_1 = __importDefault(require("moment"));
function Date({ dateString }) {
    const date = (0, moment_1.default)(dateString).format('DD/MM/YYYY');
    return (0, jsx_runtime_1.jsx)("span", { children: date });
}
exports.default = Date;
