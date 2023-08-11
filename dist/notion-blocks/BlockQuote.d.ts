/// <reference types="react" />
import { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
/**
 * TODO: Current version of Notion API doesn't support quote size!
 */
export default function BlockQuote(props: {
    block: QuoteBlockObjectResponse;
    children?: React.ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
