import {
  BlockObjectResponse,
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import BlockRender from '../components/BlockRender'

/**
 * TODO: Current version of Notion API doesn't support different column widths!
 */

export type BlockColumnListType = ColumnListBlockObjectResponse & {
  children: (ColumnBlockObjectResponse & { children: ColumnBlockObjectResponse[] })[]
}

export default function BlockColumnList(props: { block: BlockColumnListType; className?: string }) {
  const { block, className } = props
  const children = block['children']
  if (children?.length === 0) return null
  return (
    <div className={cn('w-full grid gap-3 !my-0', parseColumnClasses(children.length), className)}>
      {children.map((col, index1: number) => {
        return (
          <div key={index1} className={cn('w-full flex flex-col')}>
            {col['children'].map((child: BlockObjectResponse, index2: number) => (
              <BlockRender key={index2} block={child} level={0} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

/**
 * On Notion, the number of columns is fixed no matter the width of the screen. When the screen is
 * small, the size of each column is really small. We don't want that, so we change the way each row
 * is rendered based on the number of columns and the width of the screen.
 */
function parseColumnClasses(numCols: number): string {
  switch (numCols) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-1 md:grid-cols-2'
    case 3:
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    case 4:
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    default:
      return 'grid-cols-1'
  }
}
