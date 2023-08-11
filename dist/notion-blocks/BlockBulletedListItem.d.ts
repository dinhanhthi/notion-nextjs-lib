/// <reference types="react" />
import { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export type BlockBulletedListItemType = BulletedListItemBlockObjectResponse & {
    list_item: BulletLevelType;
};
export default function BlockBulletedListItem(props: {
    block: BlockBulletedListItemType;
    children?: React.ReactNode;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
type BulletLevelType = '1' | '2' | '3';
export {};
