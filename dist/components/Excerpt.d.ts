import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
type ExcerptProps = {
    defaultExcerpt?: string;
    excerpt: RichTextItemResponse[];
};
export default function Excerpt(props: ExcerptProps): import("react/jsx-runtime").JSX.Element | "Undefined excerpt";
export {};
