import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { BookmarkPreview } from '../interface';
export default function BlockBookmark(props: {
    block: BookmarkBlockObjectResponse & {
        bookmark?: BookmarkPreview;
    };
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
