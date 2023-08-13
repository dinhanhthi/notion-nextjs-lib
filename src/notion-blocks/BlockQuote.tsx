import { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import { mapColorClass } from '../helpers/block-helpers'
import BlockRichText from './BlockRichText'

/**
 * TODO: Current version of Notion API doesn't support quote size!
 */

export default function BlockQuote(props: {
  block: QuoteBlockObjectResponse
  children?: React.ReactNode
  className?: string
}) {
  const { block, children, className } = props
  return (
    <div className={cn(className)}>
      <div
        className={cn(
          mapColorClass(block?.quote?.color),
          'border border-y-0 border-r-0 border-l-4 border-slate-500'
        )}
      >
        <div className={cn('py-1 pl-4')}>
          {block?.quote?.rich_text.map((richText, index) => (
            <BlockRichText key={index} richText={richText} />
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}
