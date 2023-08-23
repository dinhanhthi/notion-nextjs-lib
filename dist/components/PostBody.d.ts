import * as react_jsx_runtime from 'react/jsx-runtime';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { BlockOptionsContextType } from './BlockRender.js';
import 'react';

declare const postBodyContainerClass = "mx-auto container pb-8 pt-4";
type PostBodyProps = {
    contentBlocks: BlockObjectResponse[];
    className?: string;
    showToc?: boolean;
    blockOptionsContext?: BlockOptionsContextType;
    noContentMessage?: string;
    labelTocTitle?: string;
};
declare function PostBody(props: PostBodyProps): react_jsx_runtime.JSX.Element;

export { PostBody as default, postBodyContainerClass };
