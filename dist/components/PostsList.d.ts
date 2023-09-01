import * as react_jsx_runtime from 'react/jsx-runtime';
import { Post } from '../interface.js';
import '@notionhq/client/build/src/api-endpoints';
import 'next/image';

type PostCardWaveOpts = {
    fontClassName?: string;
    colorIndex?: number;
};

type PostCardWhiteBgOpts = {
    hideDate?: boolean;
    fontClassName?: string;
};

type PostCardWhiteBgBigOpts = {
    hideDate?: boolean;
    hideAuthor?: boolean;
    hideExcerpt?: boolean;
    fontClassName?: string;
};

type PostImageBackgroundOpts = {
    fontClassName?: string;
};

type PostSimpleOpts = {
    hideDate?: boolean;
    fontClassName?: string;
    customIcon?: React.ReactNode;
    updatedOnLabel?: string;
    newLabel?: string;
    draftLabel?: string;
    tooltipDraftLabel?: string;
    humanizeDate?: boolean;
    wellWrittenLabel?: string;
};

type PostTitleCateDateOpts = {
    hideCategory?: boolean;
    hideDate?: boolean;
    fontClassName?: string;
    defaultCategoryBgColor?: string;
    defaultCategoryTextColor?: string;
};

type PostType = 'PostTitleCateDate' | 'PostCardWhiteBg' | 'PostCardWhiteBgBig' | 'PostImageBackground' | 'PostCardWave' | 'PostSimple';
type PostListStyle = 'default' | 'carousel';
type PostTypeOpts = PostTitleCateDateOpts | PostCardWhiteBgOpts | PostCardWhiteBgBigOpts | PostImageBackgroundOpts | PostCardWaveOpts | PostSimpleOpts;
type PostListProps = {
    listStyle?: PostListStyle;
    posts: Post[];
    postType: PostType;
    postTypeOpts?: PostTypeOpts;
    options?: {
        className?: string;
    };
    fontClassName?: string;
};
declare const postListGridCLass: string;
declare function PostList(props: PostListProps): react_jsx_runtime.JSX.Element;

export { PostListStyle, PostType, PostTypeOpts, PostList as default, postListGridCLass };
