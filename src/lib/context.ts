import { createContext } from 'react'

export type BlockOptionContextType = {
  disableAnchorHeading?: boolean
}

export const defaultBlockOptionContext: BlockOptionContextType = {
  disableAnchorHeading: false
}

export const BlockOptionContext = createContext<BlockOptionContextType>(defaultBlockOptionContext)
