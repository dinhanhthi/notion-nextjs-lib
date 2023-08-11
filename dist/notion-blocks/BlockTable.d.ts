import { TableBlockObjectResponse, TableRowBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export type BlockTableType = TableBlockObjectResponse & {
    children: TableRowBlockObjectResponse[];
};
export default function BlockTable(props: {
    block: BlockTableType;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
