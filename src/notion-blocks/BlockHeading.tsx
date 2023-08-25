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

import { BlockOptionContext, BlockOptionsContextType } from '../components/BlockRender'
import { convertHeadingIdToSlug, mapColorClass } from '../helpers/block-helpers'
import CiLink from '../icons/CiLink'
import BlockHeadingToggle from './BlockHeadingToggle'
import BlockRichText from './BlockRichText'

type headingType = 'h1' | 'h2' | 'h3'

export const boderLeftClass = (
  type: headingType,
  ctx: BlockOptionsContextType,
  isToggle?: boolean
): string => {
  if (ctx?.headingStyle !== 'borderLeft' || isToggle) return ''
  const common = ' border-l-[4px] pl-2 bg-gradient-to-r py-1'
  switch (type) {
    case 'h1':
      return 'border-sky-600 from-sky-50 to-white' + common
    case 'h2':
      return 'border-sky-600 from-sky-50 to-white' + common
    case 'h3':
      return 'border-orange-700 from-orange-50 to-white' + common
  }
}

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
  let anchorHashEl: JSX.Element
  const h1Size = 'text-3xl'
  const h2Size = 'text-2xl'
  const h3Size = 'text-xl'
  const headingClass = cn('scroll-mt-[70px] mt-0')

  const id = convertHeadingIdToSlug(block.id, (block as any)[`${block.type}`]?.rich_text)

  const anchorRight = (
    <a
      href={`#${id}`}
      className={cn(
        'inline-block',
        'opacity-0 group-hover:opacity-100 text-slate-500 hover:m2it-link-hover text-[25px]'
      )}
    >
      <CiLink />
    </a>
  )

  switch (type) {
    case 'h1':
      heading = (block as Heading1BlockObjectResponse)?.heading_1
      headingElement = (
        <h1 id={id} className={cn(h1Size, headingClass)}>
          {insideHeading(heading)}
        </h1>
      )
      anchorHashEl = (
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
      anchorHashEl = (
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
      anchorHashEl = (
        <a href={`#${id}`} className={cn('text-orange-700 lg:-ml-8', h3Size)}>
          ##
        </a>
      )
      break
  }

  return (
    <div className={props.outerClassName}>
      <div
        className={cn(
          mapColorClass(heading?.color),
          className,
          {
            'flex items-start gap-2': !get(heading, 'is_toggleable') && !ctx?.disableAnchorHeading
          },
          'group',
          boderLeftClass(type, ctx, get(heading, 'is_toggleable'))
        )}
      >
        {get(heading, 'is_toggleable') && children && (
          <BlockHeadingToggle
            headingElement={headingElement}
            anchorRight={anchorRight}
            className={cn(boderLeftClass(type, ctx, false), '!pl-0 !ml-0')}
          >
            {children}
          </BlockHeadingToggle>
        )}
        {!get(heading, 'is_toggleable') && (
          <div className="w-full flex items-center gap-2">
            {!ctx?.disableAnchorHeading &&
              (!ctx?.headingStyle || ctx?.headingStyle === 'hash') &&
              anchorHashEl}
            {headingElement}
            {ctx?.showAnchorRight && anchorRight}
          </div>
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
