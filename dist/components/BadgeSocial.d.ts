import * as react_jsx_runtime from 'react/jsx-runtime';
import { ImageType } from '../interface.js';
import '@notionhq/client/build/src/api-endpoints';
import 'next/image';

type BadgeSocialProps = {
    id?: string;
    icon: ImageType;
    url: string;
    title: string;
    imgClass?: string;
};
declare function BadgeSocial(props: BadgeSocialProps): react_jsx_runtime.JSX.Element;

export { BadgeSocialProps, BadgeSocial as default };
