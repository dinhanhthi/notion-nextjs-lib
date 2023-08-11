import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { TextIgnoreField } from '@src/interface';
type BlockRichTextProps = {
    richText: RichTextItemResponse;
    ignore?: TextIgnoreField[];
    mathFontSize?: string;
};
export default function BlockRichText(props: BlockRichTextProps): import("react/jsx-runtime").JSX.Element;
export {};
