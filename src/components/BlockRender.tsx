'use client'

import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { createContext } from 'react'

import Renderer from './Renderer'

export type BlockOptionsContextType = {
  headingStyle?: 'hash' | 'borderLeft' | 'borderLeftH2Only'
  headingScrollMarginTopClass?: string // anchor scroll margin top class, depend on the height of nav
  showAnchorRight?: boolean // useful when headingStyle === 'borderLeft'
  disableAnchorHeading?: boolean // used in BlockHeading (when headingStyle === 'hash')
  siteDomain?: string // used in BlockText to recognize external links (eg. math2it.com -> alike @mention)
  blockCodeCopyText?: string // used in BlockCode to customize copy text
  blockCodeCopiedText?: string // used in BlockCode to customize copied text
}

const defaultBlockOptionContext: BlockOptionsContextType = {
  headingStyle: 'hash',
  headingScrollMarginTopClass: 'scroll-mt-[70px]',
  showAnchorRight: false,
  disableAnchorHeading: false,
  siteDomain: 'dinhanhthi.com'
}

export type BlockRenderProps = {
  block: BlockObjectResponse
  level: number
  insideColumn?: boolean
  insideList?: boolean
  insideQuoteCallout?: boolean
  insideToggle?: boolean
  blockOptionsContext?: BlockOptionsContextType
}

export const BlockOptionContext = createContext<BlockOptionsContextType>(defaultBlockOptionContext)

export default function BlockRender(props: BlockRenderProps) {
  return (
    <BlockOptionContext.Provider value={props.blockOptionsContext}>
      <Renderer
        block={props.block}
        level={props.level}
        insideColumn={props.insideColumn}
        insideList={props.insideList}
        insideQuoteCallout={props.insideQuoteCallout}
      />
    </BlockOptionContext.Provider>
  )
}
