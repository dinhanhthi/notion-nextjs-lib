import * as react_jsx_runtime from 'react/jsx-runtime';
import { StaticImageData } from 'next/image';
import { ImageType } from '../interface.js';
import '@notionhq/client/build/src/api-endpoints';

type PostHeaderCoverProps = {
    cover: ImageType;
    defaultCover: StaticImageData;
    alt: string;
    coverHeight?: string;
    bookCover?: ImageType;
    altBookCover?: string;
};
declare function PostHeaderCover(props: PostHeaderCoverProps): react_jsx_runtime.JSX.Element;

export { PostHeaderCover as default };
