import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import BlockRichText from './BlockRichText'

export type BlockNumberedListItemType = NumberedListItemBlockObjectResponse & { list_item: number }

export default function BlockNumberedListItem(props: {
  block: BlockNumberedListItemType
  children?: React.ReactNode
  className?: string
}) {
  const { block, className, children } = props
  return (
    <div className={cn(className)}>
      <div className="flex items-baseline gap-2">
        <div className="flex items-center justify-center">{block['list_item']}</div>
        <div className="block">
          {block?.numbered_list_item?.rich_text.map((richText, index) => (
            <BlockRichText key={index} richText={richText} />
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}
