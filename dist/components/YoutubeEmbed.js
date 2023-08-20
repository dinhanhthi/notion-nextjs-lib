// src/components/YoutubeEmbed.tsx
import { jsx } from "react/jsx-runtime";
function YoutubeEmbed(props) {
  return /* @__PURE__ */ jsx("div", { className: props.className, children: /* @__PURE__ */ jsx(
    "iframe",
    {
      width: props.width || 853,
      height: props.height || 480,
      src: `https://www.youtube.com/embed/${props.id}`,
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      title: props.title || "A video from YouTube",
      className: "border-0"
    }
  ) });
}
export {
  YoutubeEmbed as default
};
//# sourceMappingURL=YoutubeEmbed.js.map