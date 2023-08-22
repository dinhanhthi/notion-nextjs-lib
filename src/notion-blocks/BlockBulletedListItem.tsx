import { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import GoSquareFill from '../icons/GoSquareFill'
import RxDot from '../icons/RxDot'
import RxDotFilled from '../icons/RxDotFilled'
import BlockRichText from './BlockRichText'

export type BlockBulletedListItemType = BulletedListItemBlockObjectResponse & {
  list_item: BulletLevelType
}

export default function BlockBulletedListItem(props: {
  block: BlockBulletedListItemType
  children?: React.ReactNode
  className?: string
}) {
  const { block, className, children } = props
  return (
    <div className={cn(className)}>
      <div className="flex items-start gap-1">
        <div className="flex items-center justify-center">{bulletType(block['list_item'])}</div>
        <div className="block">
          {block?.bulleted_list_item?.rich_text.map((richText, index) => (
            <BlockRichText key={index} richText={richText} />
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}

type BulletLevelType = '1' | '2' | '3'
function bulletType(level: BulletLevelType): JSX.Element {
  switch (level) {
    case '1':
      return <RxDotFilled className="mt-0.5 text-xl text-slate-600" />
    case '2':
      return <RxDot className="mt-1 text-lg" />
    case '3':
      return <GoSquareFill className="mr-1 mt-1.5 text-xs" />
  }
}
