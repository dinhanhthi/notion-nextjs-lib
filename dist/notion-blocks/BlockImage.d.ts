import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
export default function BlockImage(props: {
    block: ImageBlockObjectResponse & {
        imageInfo?: {
            width: number;
            height: number;
        };
        imgUrl?: string;
    };
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
