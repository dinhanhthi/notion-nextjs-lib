/// <reference types="react" />
import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export default function BlockParagraph(props: {
    block: ParagraphBlockObjectResponse;
    children?: React.ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
