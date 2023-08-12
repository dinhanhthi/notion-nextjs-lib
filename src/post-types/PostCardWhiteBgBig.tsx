import { comfortaa } from '@app/lib/fonts'
import PostFeaturedImage from '@c/PostFeaturedImage'
import { Post } from '@src/interface'
import cn from 'classnames'
import Link from 'next/link'
import Date from 'notion-nextjs-lib/dist/components/Date'
import Excerpt from 'notion-nextjs-lib/dist/components/Excerpt'

export type PostCardWhiteBgBigOpts = {
  hideDate?: boolean
  hideAuthor?: boolean
  hideExcerpt?: boolean
}

type PostTitleCateDateProps = {
  post: Post
  options?: PostCardWhiteBgBigOpts
}

export const CWBBHeightClass = 'h-36'

export default function PostCardWhiteBgBig({ post, options }: PostTitleCateDateProps) {
  const { title, featuredImage, date, uri, excerpt, authors } = post
  return (
    <div className="group overflow-hidden rounded-md bg-white shadow-lg h-full">
      <Link className={cn(comfortaa.className, 'text-center')} href={uri || '/'}>
        <div className="flex flex-col justify-center">
          <div className={cn('relative w-full overflow-hidden', CWBBHeightClass)}>
            <PostFeaturedImage featuredImage={featuredImage} title={title} />
          </div>
        </div>
        <div className="p-4">
          <div className="group-hover:m2it-link-hover text-base font-bold leading-[1.35]">
            {title}
          </div>
          {(!options?.hideDate || !options?.hideAuthor) && (
            <div className="flex justify-center gap-2 p-2">
              {!options?.hideDate && date && (
                <div className="text-sm opacity-80">
                  <i className="icon-clock mr-1"></i>
                  <Date dateString={date} />
                </div>
              )}
              {!options?.hideAuthor && authors?.length && (
                <div className="flex gap-1 text-sm opacity-80">
                  {authors?.length > 1 && (
                    <>
                      <i className="icon-users-outline"></i>
                      <span>Nhiều tác giả</span>
                    </>
                  )}
                  {authors?.length <= 1 && (
                    <>
                      <i className="icon-user-outline -mr-1"></i>
                      <span>{authors[0].name}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
          {!options?.hideExcerpt && excerpt && (
            <div className="pt-2 text-[0.8rem] opacity-80 group-hover:opacity-100">
              <Excerpt excerpt={excerpt} defaultExcerpt="Một bài viết trên Math2IT"></Excerpt>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
