import * as react_jsx_runtime from 'react/jsx-runtime';
import { StaticImageData } from 'next/image';
import { I as ImageType } from '../interface.d-1ae9c039.js';
import '@notionhq/client/build/src/api-endpoints';

type PostFeaturedImageProps = {
    title: string;
    featuredImage: ImageType;
    className?: string;
    defaultImage?: StaticImageData;
};
/**
 * This component is used for displaying featured image of a post IN A POST LIST ONLY.
 */
declare function PostFeaturedImage(props: PostFeaturedImageProps): react_jsx_runtime.JSX.Element;

export { PostFeaturedImage as default };
