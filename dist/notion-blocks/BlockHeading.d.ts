/// <reference types="react" />
import { Heading1BlockObjectResponse, Heading2BlockObjectResponse, Heading3BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
type headingType = 'h1' | 'h2' | 'h3';
export default function BlockHeading(props: {
    type: headingType;
    block: Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse;
    children?: React.ReactNode;
    className?: string;
    outerClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export {};
