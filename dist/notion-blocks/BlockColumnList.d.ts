import { ColumnBlockObjectResponse, ColumnListBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
/**
 * TODO: Current version of Notion API doesn't support different column widths!
 */
export type BlockColumnListType = ColumnListBlockObjectResponse & {
    children: (ColumnBlockObjectResponse & {
        children: ColumnBlockObjectResponse[];
    })[];
};
export default function BlockColumnList(props: {
    block: BlockColumnListType;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
