import * as react_jsx_runtime from 'react/jsx-runtime';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type PostTocProps = {
    showToc?: boolean;
    contentBlocks: BlockObjectResponse[];
    inPost?: boolean;
    minNumHeadingsToShowToc?: number;
    labelTocTitle?: string;
};
declare function PostToc(props: PostTocProps): react_jsx_runtime.JSX.Element;

export { PostToc as default };
