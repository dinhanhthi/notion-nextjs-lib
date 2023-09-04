'use client'

import {
  BlockObjectResponse,
  BookmarkBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { get } from 'lodash'
import dynamic from 'next/dynamic'

import { getIndentLevelClass } from '../helpers/block-helpers'
import { BookmarkPreview } from '../interface'
import BlockBookmark from '../notion-blocks/BlockBookmark'
import BlockBulletedListItem, {
  BlockBulletedListItemType
} from '../notion-blocks/BlockBulletedListItem'
import BlockCallout from '../notion-blocks/BlockCallout'
import BlockColumnList, { BlockColumnListType } from '../notion-blocks/BlockColumnList'
import BlockHeading from '../notion-blocks/BlockHeading'
import BlockNumberedListItem, {
  BlockNumberedListItemType
} from '../notion-blocks/BlockNumberedListItem'
import BlockParagraph from '../notion-blocks/BlockParagraph'
import BlockQuote from '../notion-blocks/BlockQuote'
import { BlockTableType } from '../notion-blocks/BlockTable'
import BlockToDo from '../notion-blocks/BlockToDo'
import BlockToggle from '../notion-blocks/BlockToggle'
import { BlockRenderProps } from './BlockRender'

const DynamicImage = dynamic(() => import('../notion-blocks/BlockImage'))
const DynamicCode = dynamic(() => import('../notion-blocks/BlockCode'))
const DynamicEquation = dynamic(() => import('../notion-blocks/BlockEquation'))
const DynamicTable = dynamic(() => import('../notion-blocks/BlockTable'))
const DynamicVideo = dynamic(() => import('../notion-blocks/BlockVideo'))

export default function Renderer(props: BlockRenderProps) {
  const { block, level } = props
  let children: React.ReactNode

  const isList = ['bulleted_list_item', 'numbered_list_item'].includes(block.type)
  const isQuoteCallout = ['quote', 'callout'].includes(block.type)
  const isToggle = block.type === 'toggle'

  if (block.has_children) {
    children = get(block, 'children', [])?.map(childBlock => (
      <Renderer
        key={(childBlock as BlockObjectResponse).id}
        block={childBlock}
        level={['synced_block', 'callout'].includes(block.type) ? level : level + 1}
        insideList={isList}
        insideQuoteCallout={isQuoteCallout || props.insideQuoteCallout}
        insideToggle={isToggle || props.insideToggle}
      />
    ))
  }

  const basicBlockGap = cn(
    getIndentLevelClass({
      level,
      isList,
      insideList: props.insideList,
      insideColumn: props.insideColumn,
      insideQuoteCallout: props.insideQuoteCallout,
      insideToggle: props.insideToggle
    })
  )
  const basicBlockGapHeading = 'mt-6'

  switch (block.type) {
    case 'synced_block':
      return <>{children}</>

    case 'divider':
      return <hr className={basicBlockGap} />

    case 'paragraph':
      return (
        <BlockParagraph block={block} className={cn(basicBlockGap)}>
          {children}
        </BlockParagraph>
      )

    case 'numbered_list_item':
      return (
        <BlockNumberedListItem
          block={block as BlockNumberedListItemType}
          className={cn(basicBlockGap)}
        >
          {children}
        </BlockNumberedListItem>
      )

    case 'bulleted_list_item':
      return (
        <BlockBulletedListItem
          block={block as BlockBulletedListItemType}
          className={cn(basicBlockGap)}
        >
          {children}
        </BlockBulletedListItem>
      )

    case 'to_do':
      return (
        <BlockToDo block={block} className={cn(basicBlockGap)}>
          {children}
        </BlockToDo>
      )

    case 'heading_1':
      return (
        <BlockHeading
          type={'h1'}
          block={block}
          outerClassName={getIndentLevelClass({
            level
          })}
          className={cn(basicBlockGap, basicBlockGapHeading)}
        >
          {children}
        </BlockHeading>
      )

    case 'heading_2':
      return (
        <BlockHeading
          type={'h2'}
          block={block}
          outerClassName={getIndentLevelClass({
            level
          })}
          className={cn(basicBlockGap, basicBlockGapHeading)}
        >
          {children}
        </BlockHeading>
      )

    case 'heading_3':
      return (
        <BlockHeading
          type={'h3'}
          block={block}
          outerClassName={getIndentLevelClass({
            level
          })}
          className={cn(basicBlockGap, basicBlockGapHeading)}
        >
          {children}
        </BlockHeading>
      )

    case 'quote':
      return (
        <BlockQuote block={block} className={cn(basicBlockGap)}>
          {children}
        </BlockQuote>
      )

    // For both code and mermaid
    case 'code':
      return <DynamicCode block={block} className={cn(basicBlockGap)} />

    case 'equation':
      return <DynamicEquation block={block} className={cn(basicBlockGap)} />

    case 'column_list':
      return <BlockColumnList block={block as BlockColumnListType} className={cn(basicBlockGap)} />

    case 'table':
      return <DynamicTable block={block as BlockTableType} className={cn(basicBlockGap)} />

    case 'toggle':
      return (
        <BlockToggle block={block} className={cn(basicBlockGap)}>
          {children}
        </BlockToggle>
      )

    case 'callout':
      return (
        <BlockCallout block={block} className={cn(basicBlockGap)}>
          {children}
        </BlockCallout>
      )

    case 'image':
      return <DynamicImage block={block} className={cn(basicBlockGap)} />

    case 'video':
      return <DynamicVideo block={block} className={cn(basicBlockGap)} />

    case 'bookmark':
      return (
        <BlockBookmark
          block={
            block as BookmarkBlockObjectResponse & {
              bookmark?: BookmarkPreview
            }
          }
          className={cn(basicBlockGap)}
        />
      )

    default:
      return null
  }
}
