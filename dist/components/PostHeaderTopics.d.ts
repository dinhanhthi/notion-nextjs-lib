import * as react_jsx_runtime from 'react/jsx-runtime';
import { Category, Tag } from '../interface.js';
import '@notionhq/client/build/src/api-endpoints';
import 'next/image';

type PostHeaderTopicsProps = {
    className?: string;
    categories?: Category[];
    tags?: Tag[];
    selectedUri?: string;
    selectedName?: string;
    TiTagClass?: string;
    tagClass?: string;
};
declare function PostHeaderTopics(props: PostHeaderTopicsProps): react_jsx_runtime.JSX.Element;

export { PostHeaderTopics as default };
