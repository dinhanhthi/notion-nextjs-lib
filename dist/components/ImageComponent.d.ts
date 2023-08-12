import { ImageType } from '@src/interface';
import { ImageProps, StaticImageData } from 'next/image';
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
export default function ImageComponent(props: ImageComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
