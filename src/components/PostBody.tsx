import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import BlockRender, { BlockOptionsContextType } from './BlockRender'
import PostToc from './PostToc'

export const postBodyContainerClass = 'mx-auto container pb-8 pt-4'

type PostBodyProps = {
  contentBlocks: BlockObjectResponse[]
  className?: string
  showToc?: boolean
  blockOptionsContext?: BlockOptionsContextType
  noContentMessage?: string
}

export default function PostBody(props: PostBodyProps) {
  const { contentBlocks, className } = props
  return (
    <div className={cn('m2it-prose', postBodyContainerClass, className)}>
      <PostToc
        showToc={props.showToc}
        inPost={true}
        contentBlocks={contentBlocks as BlockObjectResponse[]}
      />
      {!!contentBlocks.length &&
        contentBlocks.map(block => (
          <BlockRender
            blockOptionsContext={props.blockOptionsContext}
            key={block.id}
            block={block}
            level={0}
          />
        ))}
      {!contentBlocks.length && <p>{props.noContentMessage || 'Bài viết này chưa có nội dung.'}</p>}
    </div>
  )
}
