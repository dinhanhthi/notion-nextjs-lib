import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
type BlockRenderProps = {
    block: BlockObjectResponse;
    level: number;
    isInsideList?: boolean;
};
export default function BlockRender(props: BlockRenderProps): import("react/jsx-runtime").JSX.Element;
export {};
