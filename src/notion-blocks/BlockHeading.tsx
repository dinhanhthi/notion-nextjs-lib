'use client'

import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  RichTextItemResponse
} from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { get } from 'lodash'
import { useContext } from 'react'

import { BlockOptionContext } from '../components/BlockRender'
import { convertHeadingIdToSlug, mapColorClass } from '../helpers/block-helpers'
import BlockHeadingToggle from './BlockHeadingToggle'
import BlockRichText from './BlockRichText'

type headingType = 'h1' | 'h2' | 'h3'

export default function BlockHeading(props: {
  type: headingType
  block: Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse
  children?: React.ReactNode
  className?: string
  // 👇 in case headings are inside another block, we need this to style the spacing for the entire heading block
  outerClassName?: string
}) {
  const ctx = useContext(BlockOptionContext) as any

  const { type, block, className, children } = props
  let heading: { rich_text: RichTextItemResponse[]; color: string }
  let headingElement: JSX.Element
  let anchorElement: JSX.Element
  const h1Size = 'text-3xl'
  const h2Size = 'text-2xl'
  const h3Size = 'text-xl'
  const headingClass = 'scroll-mt-[70px] mt-0'

  const id = convertHeadingIdToSlug(block.id, (block as any)[`${block.type}`]?.rich_text)

  switch (type) {
    case 'h1':
      heading = (block as Heading1BlockObjectResponse)?.heading_1
      headingElement = (
        <h1 id={id} className={cn(h1Size, headingClass)}>
          {insideHeading(heading)}
        </h1>
      )
      anchorElement = (
        <a href={`#${id}`} className={cn('text-sky-600 lg:-ml-6', h1Size)}>
          #
        </a>
      )
      break

    case 'h2':
      heading = (block as Heading2BlockObjectResponse)?.heading_2
      headingElement = (
        <h2 id={id} className={cn(h2Size, headingClass)}>
          {insideHeading(heading)}
        </h2>
      )
      anchorElement = (
        <a href={`#${id}`} className={cn('text-sky-600 lg:-ml-6', h2Size)}>
          #
        </a>
      )
      break

    case 'h3':
      heading = (block as Heading3BlockObjectResponse)?.heading_3
      headingElement = (
        <h3 id={id} className={cn(h3Size, headingClass)}>
          {insideHeading(heading)}
        </h3>
      )
      anchorElement = (
        <a href={`#${id}`} className={cn('text-orange-700 lg:-ml-8', h3Size)}>
          ##
        </a>
      )
      break
  }

  return (
    <div className={props.outerClassName}>
      <div
        className={cn(mapColorClass(heading?.color), className, {
          'flex items-start gap-2': !get(heading, 'is_toggleable') && !ctx?.disableAnchorHeading
        })}
      >
        {get(heading, 'is_toggleable') && children && (
          <BlockHeadingToggle headingElement={headingElement}>{children}</BlockHeadingToggle>
        )}
        {!get(heading, 'is_toggleable') && (
          <>
            {!ctx?.disableAnchorHeading && anchorElement}
            {headingElement}
          </>
        )}
      </div>
    </div>
  )
}

function insideHeading(heading: { rich_text: RichTextItemResponse[] }): JSX.Element {
  return (
    <>
      {heading?.rich_text.map((richText, index) => (
        <BlockRichText key={index} richText={richText} />
      ))}
    </>
  )
}
