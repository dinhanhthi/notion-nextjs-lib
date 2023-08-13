'use client'

import cn from 'classnames'
import React from 'react'

import { Post } from '../interface'
import PostCardWave from '../post-types/PostCardWave'
import PostCardWhiteBg, { PostCardWhiteBgOpts } from '../post-types/PostCardWhiteBg'
import PostCardWhiteBgBig, { PostCardWhiteBgBigOpts } from '../post-types/PostCardWhiteBgBig'
import PostImageBackground, { PostImageBackgroundOpts } from '../post-types/PostImageBackground'
import PostTitleCateDate, { PostTitleCateDateOpts } from '../post-types/PostTitleCateDate'
import { Carousel, CarouselItem } from './Carousel'

export type PostType =
  | 'PostTitleCateDate'
  | 'PostCardWhiteBg'
  | 'PostCardWhiteBgBig'
  | 'PostImageBackground'
  | 'PostCardWave'

export type PostListStyle = 'default' | 'carousel'

export type PostTypeOpts =
  | PostTitleCateDateOpts
  | PostCardWhiteBgOpts
  | PostCardWhiteBgBigOpts
  | PostImageBackgroundOpts

type PostListProps = {
  listStyle?: PostListStyle
  posts: Post[]
  postType: PostType
  postTypeOpts?: PostTypeOpts
  options?: {
    className?: string
  }
  fontClassName?: string
}

export const postListGridCLass = cn(
  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-4'
)

export default function PostList(props: PostListProps) {
  const className = props.options?.className ? props.options.className : postListGridCLass
  return (
    <section>
      {(!props.listStyle || props.listStyle === 'default') && (
        <div className={className}>
          {props.posts.map((post, index) => (
            <React.Fragment key={post.uri}>
              {getPostTypeElement(props.postType, post, props.postTypeOpts, index)}
            </React.Fragment>
          ))}
        </div>
      )}
      {props.listStyle === 'carousel' && (
        <Carousel
          items={props.posts}
          renderItem={({ item, isSnapPoint, index }) => (
            <CarouselItem key={item.id} isSnapPoint={isSnapPoint} widthClass={'w-80'}>
              {getPostTypeElement(props.postType, item, props.postTypeOpts, index)}
            </CarouselItem>
          )}
        />
      )}
    </section>
  )
}

function getPostTypeElement(
  postType: PostType,
  post: Post,
  postTypeOpts?: PostTypeOpts,
  index?: number
) {
  switch (postType) {
    case 'PostTitleCateDate':
      return <PostTitleCateDate post={post} options={postTypeOpts} />
    case 'PostCardWhiteBg':
      return <PostCardWhiteBg post={post} options={postTypeOpts} />
    case 'PostCardWhiteBgBig':
      return <PostCardWhiteBgBig post={post} options={postTypeOpts} />
    case 'PostImageBackground':
      return <PostImageBackground post={post} />
    case 'PostCardWave':
      return <PostCardWave post={post} colorIndex={index} />
  }
}
