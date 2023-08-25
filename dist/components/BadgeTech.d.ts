import * as react_jsx_runtime from 'react/jsx-runtime';
import { ImageType } from '../interface.js';
import '@notionhq/client/build/src/api-endpoints';
import 'next/image';

type TechItem = {
    id: string;
    name: string;
    icon: ImageType;
    url: string;
    imgClass?: string;
};
type BadgeTechProps = {
    tech: TechItem;
    hideText?: boolean;
    useLink?: boolean;
    hideTooltip?: boolean;
};
declare function BadgeTech(props: BadgeTechProps): react_jsx_runtime.JSX.Element;

export { TechItem, BadgeTech as default };
