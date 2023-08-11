/// <reference types="react" />
import { ToggleBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export default function BlockToggle(props: {
    block: ToggleBlockObjectResponse;
    children?: React.ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
