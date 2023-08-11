"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockOptionContext = exports.defaultBlockOptionContext = void 0;
const react_1 = require("react");
exports.defaultBlockOptionContext = {
    disableAnchorHeading: false
};
exports.BlockOptionContext = (0, react_1.createContext)(exports.defaultBlockOptionContext);
