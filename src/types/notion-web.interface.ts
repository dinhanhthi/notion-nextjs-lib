export interface NotionPageChunk {
  recordMap: NotionRecordMap
  cursor: {
    stack: any[]
  }
}

export interface NotionRecordMap {
  block: NotionBlockMap
}

export interface NotionBlockMap {
  [key: string]: NotionBlock
}

export interface NotionMap<T> {
  [key: string]: {
    role: NotionRole
    value: T
  }
}

export type NotionRole = 'editor' | 'reader' | 'none' | 'read_and_write'

// TODO: add more types
export type NotionBlock = any
