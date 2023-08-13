import * as react_jsx_runtime from 'react/jsx-runtime';
import { BlockRenderProps } from './BlockRender.js';
import 'react';
import '@notionhq/client/build/src/api-endpoints';

declare function Renderer(props: BlockRenderProps): react_jsx_runtime.JSX.Element;

export { Renderer as default };
