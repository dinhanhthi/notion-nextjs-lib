'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
function ScrollToTop(props) {
    const buttonRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const button = buttonRef.current;
        if (!button)
            return;
        const scrollHandler = () => {
            if (window.scrollY > 100) {
                button.classList.remove('opacity-0');
                button.classList.add('opacity-100');
            }
            else {
                button.classList.add('opacity-0');
                button.classList.remove('opacity-100');
            }
        };
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return ((0, jsx_runtime_1.jsxs)("button", { onClick: scrollToTop, ref: buttonRef, className: (0, classnames_1.default)('fixed right-10 bottom-8 rounded-full p-2 opacity-0 transition-all duration-300', 'z-50 group bg-[#c0c0c066] hover:bg-[#c0c0c099]'), children: [props.image && ((0, jsx_runtime_1.jsx)(image_1.default, { className: "group-hover:animate-toTop", src: props.image, alt: "To top", width: 32, height: 32 })), !props.image && (0, jsx_runtime_1.jsx)("span", { children: "\u261D" })] }));
}
exports.default = ScrollToTop;
