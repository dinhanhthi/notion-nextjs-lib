import * as react_jsx_runtime from 'react/jsx-runtime';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type BlockRenderProps = {
    block: BlockObjectResponse;
    level: number;
    isInsideList?: boolean;
};
declare function BlockRender(props: BlockRenderProps): react_jsx_runtime.JSX.Element;

export { BlockRender as default };
