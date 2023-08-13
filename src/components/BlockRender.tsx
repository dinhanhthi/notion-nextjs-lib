'use client'

import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { createContext } from 'react'

import Renderer from './Renderer'

export type BlockOptionsContextType = {
  disableAnchorHeading?: boolean
}

const defaultBlockOptionContext: BlockOptionsContextType = {
  disableAnchorHeading: false
}

export type BlockRenderProps = {
  block: BlockObjectResponse
  level: number
  isInsideList?: boolean
  blockOptionsContext?: BlockOptionsContextType
}

export const BlockOptionContext = createContext<BlockOptionsContextType>(defaultBlockOptionContext)

export default function BlockRender(props: BlockRenderProps) {
  return (
    <BlockOptionContext.Provider value={props.blockOptionsContext}>
      <Renderer block={props.block} level={props.level} isInsideList={props.isInsideList} />
    </BlockOptionContext.Provider>
  )
}
