import { comfortaa } from '@app/lib/fonts'
import PostFeaturedImage from '@c/PostFeaturedImage'
import { Post } from '@src/interface'
import cn from 'classnames'
import Link from 'next/link'
import Date from 'notion-nextjs-lib/dist/components/Date'

export type PostCardWhiteBgOpts = {
  hideDate?: boolean
}

type PostTitleCateDateProps = {
  post: Post
  options?: PostCardWhiteBgOpts
}

export default function PostCardWhiteBg({ post, options }: PostTitleCateDateProps) {
  const { title, featuredImage, date, uri } = post
  return (
    <div className="group overflow-hidden rounded-md bg-white shadow-lg">
      <Link className={cn(comfortaa.className, 'text-center')} href={uri || '/'}>
        <div className="flex flex-col justify-center ">
          <div className="relative h-28 w-full overflow-hidden ">
            <PostFeaturedImage featuredImage={featuredImage} title={title} />
          </div>
        </div>
        <div className="group-hover:m2it-link-hover px-4 py-3 text-base font-bold">{title}</div>
        {!options?.hideDate && date && (
          <div className="px-2 pb-4 text-sm opacity-80">
            <Date dateString={date} />
          </div>
        )}
      </Link>
    </div>
  )
}
