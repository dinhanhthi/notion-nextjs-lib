import { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { get } from 'lodash'

import { mapColorClass } from '../lib/block-helpers'
import BlockRichText from './BlockRichText'

export default function BlockCallout(props: {
  block: CalloutBlockObjectResponse

  className?: string
  children?: React.ReactNode
}) {
  const { block, children, className } = props
  return (
    <div className={cn(className)}>
      <div className={cn('flex rounded-md', mapColorClass(block?.callout?.color))}>
        {get(block, 'callout.icon.emoji') && (
          <div className="text-2xl pl-4 pr-2 py-3">{get(block, 'callout.icon.emoji')}</div>
        )}
        <div className="py-4 pl-2 pr-4 w-full">
          {block?.callout?.rich_text.map((richText, index) => (
            <BlockRichText key={index} richText={richText} />
          ))}
          {!!children && <div className="-ml-4 pt-3 m2it-inside-box">{children}</div>}
        </div>
      </div>
    </div>
  )
}
