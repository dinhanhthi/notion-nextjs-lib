import * as react_jsx_runtime from 'react/jsx-runtime';
import { PostType, PostListStyle } from './PostsList.js';
import '../interface.js';
import '@notionhq/client/build/src/api-endpoints';
import 'next/image';

type SkeletonPostListProps = {
    count: number;
    postType?: PostType;
    listStyle?: PostListStyle;
    options?: {
        className?: string;
    };
};
declare function SkeletonPostList(props: SkeletonPostListProps): react_jsx_runtime.JSX.Element;
declare const PostSimpleSkeleton: () => react_jsx_runtime.JSX.Element;

export { PostSimpleSkeleton, SkeletonPostList as default };
