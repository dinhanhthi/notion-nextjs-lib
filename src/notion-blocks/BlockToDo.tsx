import { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { BsCheckSquare, BsSquare } from 'react-icons/bs'

import BlockRichText from './BlockRichText'

export default function BlockToDo(props: {
  block: ToDoBlockObjectResponse
  children?: React.ReactNode
  className?: string
}) {
  const { block, className, children } = props
  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-2">
        {block?.to_do?.checked && <BsCheckSquare />}
        {!block?.to_do?.checked && <BsSquare />}
        {block?.to_do?.rich_text.map((richText, index) => (
          <BlockRichText key={index} richText={richText} />
        ))}
      </div>
      {children}
    </div>
  )
}
