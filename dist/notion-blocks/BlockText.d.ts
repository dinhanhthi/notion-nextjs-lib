import { MentionRichTextItemResponse, TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { TextIgnoreField } from '@src/interface';
type TextProps = {
    richText: TextRichTextItemResponse | MentionRichTextItemResponse;
    ignore?: TextIgnoreField[];
};
export default function BlockText(props: TextProps): string | import("react/jsx-runtime").JSX.Element;
export {};
