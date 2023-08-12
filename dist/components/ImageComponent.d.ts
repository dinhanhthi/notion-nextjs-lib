import * as react_jsx_runtime from 'react/jsx-runtime';
import { I as ImageType } from '../interface.d-45d1a809.js';
import { StaticImageData, ImageProps } from 'next/image';

type ImageComponentProps = {
    image: ImageType;
    defaultImage?: StaticImageData;
    alt?: string;
    className?: string;
    imageProps?: Partial<ImageProps>;
};
/**
 * This component is used for all image-related purposes.
 * For example, featured images, book cover image, notion-block's images, etc.
 */
declare function ImageComponent(props: ImageComponentProps): react_jsx_runtime.JSX.Element;

export { ImageComponent as default };
