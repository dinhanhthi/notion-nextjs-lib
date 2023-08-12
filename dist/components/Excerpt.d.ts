import * as react_jsx_runtime from 'react/jsx-runtime';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type ExcerptProps = {
    defaultExcerpt?: string;
    excerpt: RichTextItemResponse[];
};
declare function Excerpt(props: ExcerptProps): react_jsx_runtime.JSX.Element | "Undefined excerpt";

export { Excerpt as default };
