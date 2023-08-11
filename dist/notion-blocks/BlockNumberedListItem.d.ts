/// <reference types="react" />
import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export type BlockNumberedListItemType = NumberedListItemBlockObjectResponse & {
    list_item: number;
};
export default function BlockNumberedListItem(props: {
    block: BlockNumberedListItemType;
    children?: React.ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
