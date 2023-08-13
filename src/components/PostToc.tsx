'use client'

import { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { convertHeadingIdToSlug } from '../helpers/block-helpers'
import { useHeadsObserver } from '../lib/hooks'
import BlockRichText from '../notion-blocks/BlockRichText'

type PostTocProps = {
  showToc?: boolean // The property coming from the header of Notion page
  contentBlocks: BlockObjectResponse[]
  inPost?: boolean // This component is used in 2 places: post-body and [postSlug]
  minNumHeadingsToShowToc?: number
}

export default function PostToc(props: PostTocProps) {
  const [showContent, setShowContent] = useState(true)
  const headingBlocks = props.contentBlocks.filter(
    block => block.type === 'heading_2' || block.type === 'heading_3'
  )

  const showToc = props.showToc && headingBlocks.length >= (props.minNumHeadingsToShowToc || 4)

  const { activeId } = useHeadsObserver()

  if (!showToc) return null

  return (
    <nav
      className={cn('h-fit w-full flex gap-2 flex-col px-4 py-3', {
        '2xl:hidden': props.inPost, // hide on large screens
        'max-h-full p-3': !props.inPost,
        'bg-gray-100 rounded-xl m2it-box-shadow border-[0.5px]': !props.inPost,
        'max-h-[350px] bg-slate-50 rounded-xl mt-8 mb-10 m2it-box-shadow': props.inPost,
        border: props.inPost
      })}
      aria-label="Table of contents"
    >
      <button
        className={cn(
          'flex items-center justify-between text-md font-semibold text-slate-700 pb-0'
        )}
        onClick={() => setShowContent(!showContent)}
      >
        <div>Trong bài này</div>
        <div>
          <IoIosArrowDown
            className={cn('text-2xl ease-in-out transition-all duration-[400ms]', {
              'rotate-0': showContent,
              'rotate-[-90deg]': !showContent
            })}
          />
        </div>
      </button>
      {showContent && (
        <div
          className={cn('pt-3 pl-1 overflow-auto m2it-scrollbar m2it-scrollbar-small border-t', {
            'columns-1 md:columns-2': props.inPost
          })}
        >
          {headingBlocks.map(block => {
            const anchor = convertHeadingIdToSlug(
              block.id,
              (block as any)[`${block.type}`]?.rich_text
            )
            return (
              <a
                key={block.id}
                href={`#${anchor}`}
                className={cn('flex items-baseline gap-2 hover:m2it-link text-sm py-1', {
                  'pl-4 border-l': block.type === 'heading_3',
                  '-ml-1': block.type === 'heading_2',
                  'm2it-link-hover': activeId === anchor && !props.inPost,
                  'text-slate-700': activeId !== anchor || props.inPost
                })}
              >
                {block.type === 'heading_2' && (
                  <span className="text-[0.7rem] text-slate-400">◆</span>
                )}
                {block.type === 'heading_3' && (
                  <span className="text-[0.6rem] text-slate-400">○</span>
                )}
                <span className="block">
                  {((block as any)[`${block.type}`].rich_text as RichTextItemResponse[]).map(
                    (richText, index) => (
                      <BlockRichText
                        key={index}
                        richText={richText}
                        ignore={['hyperlink', 'color', 'underline', 'bold', 'italic']}
                        mathFontSize="text-[0.83rem]"
                      />
                    )
                  )}
                </span>
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}
