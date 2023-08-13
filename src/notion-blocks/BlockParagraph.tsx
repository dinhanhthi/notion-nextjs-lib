import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import { mapColorClass } from '../helpers/block-helpers'
import BlockRichText from './BlockRichText'

export default function BlockParagraph(props: {
  block: ParagraphBlockObjectResponse
  children?: React.ReactNode
  className?: string
}) {
  const { block, children, className } = props
  return (
    // We don't use <p> here because there may be other not-supported tags in the <p> tag.
    <div className={cn(mapColorClass(block?.paragraph?.color), className)}>
      {block?.paragraph?.rich_text.map((richText, index) => (
        <BlockRichText key={index} richText={richText} />
      ))}
      {children}
    </div>
  )
}
