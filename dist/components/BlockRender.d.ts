import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type BlockOptionsContextType = {
    headingStyle?: 'hash' | 'borderLeft' | 'borderLeftH2Only';
    headingScrollMarginTopClass?: string;
    showAnchorRight?: boolean;
    disableAnchorHeading?: boolean;
    siteDomain?: string;
    blockCodeCopyText?: string;
    blockCodeCopiedText?: string;
};
type BlockRenderProps = {
    block: BlockObjectResponse;
    level: number;
    insideColumn?: boolean;
    insideList?: boolean;
    insideQuoteCallout?: boolean;
    insideToggle?: boolean;
    blockOptionsContext?: BlockOptionsContextType;
};
declare const BlockOptionContext: React.Context<BlockOptionsContextType>;
declare function BlockRender(props: BlockRenderProps): react_jsx_runtime.JSX.Element;

export { BlockOptionContext, BlockOptionsContextType, BlockRenderProps, BlockRender as default };
