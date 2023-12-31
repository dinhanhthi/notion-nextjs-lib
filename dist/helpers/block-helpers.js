// src/helpers/block-helpers.ts
import cn from "classnames";
function generateTextAnnotationClasses(annotations, ignore) {
  return cn({
    "font-semibold": annotations.bold && !ignore?.includes("bold"),
    italic: annotations.italic && !ignore?.includes("italic"),
    "underline underline-offset-4": annotations.underline && !ignore?.includes("underline"),
    "line-through": annotations.strikethrough && !ignore?.includes("strikethrough"),
    "font-mono text-[85%] bg-[#ececec] text-[#067b26] p-[1px_4px_2px_4px] rounded break-words border-[1px_solid_#ddd]": annotations.code && !ignore?.includes("code"),
    [mapColorClass(annotations.color)]: !ignore?.includes("color")
  });
}
function getJoinedRichText(richTextArr) {
  if (!richTextArr || !richTextArr.length)
    return "";
  const textArr = richTextArr.map((richText) => richText.plain_text);
  return textArr.join("");
}
function mapColorClass(color) {
  switch (color) {
    case "gray":
      return "text-gray-500";
    case "brown":
      return "text-brown-500";
    case "orange":
      return "text-orange-500";
    case "yellow":
      return "text-yellow-500";
    case "green":
      return "text-emerald-600";
    case "blue":
      return "text-blue-500";
    case "purple":
      return "text-purple-500";
    case "pink":
      return "text-pink-500";
    case "red":
      return "text-red-500";
    case "gray_background":
      return "bg-gray-100";
    case "brown_background":
      return "bg-brown-100";
    case "orange_background":
      return "bg-orange-100";
    case "yellow_background":
      return "bg-amber-100";
    case "green_background":
      return "bg-[#deffdb]";
    case "blue_background":
      return "bg-blue-100";
    case "purple_background":
      return "bg-purple-100";
    case "pink_background":
      return "bg-pink-100";
    case "red_background":
      return "bg-red-100";
    default:
      return "";
  }
}
function getIndentLevelClass(opts) {
  const { level, isList, insideList, insideColumn, insideQuoteCallout, insideToggle } = opts;
  const reduceVSpace = insideList || insideColumn || insideQuoteCallout || isList;
  const reducedVSpaceClass = "my-2";
  const normalVSpaceClass = "my-3";
  switch (level) {
    case 0:
      return cn("pl-0", {
        [normalVSpaceClass]: !reduceVSpace && !insideColumn,
        [reducedVSpaceClass]: reduceVSpace && !insideColumn,
        "my-0": insideColumn
      });
    case 1:
      return cn("pl-4", {
        [reducedVSpaceClass]: reduceVSpace,
        [normalVSpaceClass]: !reduceVSpace,
        "!pl-6": insideList && !isList,
        "!pl-0": insideQuoteCallout && insideToggle
      });
    case 2:
      return cn("pl-6", {
        [reducedVSpaceClass]: reduceVSpace,
        [normalVSpaceClass]: !reduceVSpace,
        "!pl-4": insideList && insideQuoteCallout
      });
    case 3:
      return cn("pl-8", {
        [reducedVSpaceClass]: reduceVSpace,
        [normalVSpaceClass]: !reduceVSpace,
        "!pl-6": insideList && insideQuoteCallout
      });
  }
}
function convertHeadingIdToSlug(headingId, richTextArr) {
  const plainText = getJoinedRichText(richTextArr);
  return plainText.split(" ").join("-").toLowerCase() + `-${headingId.slice(0, 3)}`;
}
function getYoutubeVideoId(url) {
  if (!url)
    return null;
  let videoId = null;
  const patterns = [
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/watch\?(?:.*&)?v=([^&#]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/embed\/([^/?]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/v\/([^/?]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/user\/[^/?]+\/?\?v=([^&]+)/i,
    /(?:https?:\/\/(?:www\.)?)?youtu\.be\/([^/?]+)/i
  ];
  for (let i = 0; i < patterns.length; i++) {
    const match = url.match(patterns[i]);
    if (match && match[1]) {
      videoId = match[1];
      break;
    }
  }
  return videoId;
}
export {
  convertHeadingIdToSlug,
  generateTextAnnotationClasses,
  getIndentLevelClass,
  getJoinedRichText,
  getYoutubeVideoId,
  mapColorClass
};
//# sourceMappingURL=block-helpers.js.map