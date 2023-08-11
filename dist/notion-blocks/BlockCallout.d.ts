/// <reference types="react" />
import { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export default function BlockCallout(props: {
    block: CalloutBlockObjectResponse;
    className?: string;
    children?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
