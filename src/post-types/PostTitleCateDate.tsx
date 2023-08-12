import { defaultCategoryBgColor, defaultCategoryTextColor } from '@app/lib/config'
import { comfortaa } from '@app/lib/fonts'
import PostFeaturedImage from '@c/PostFeaturedImage'
import { Post } from '@src/interface'
import cn from 'classnames'
import Link from 'next/link'
import Date from 'notion-nextjs-lib/dist/components/Date'
import { IoBookOutline } from 'react-icons/io5'

export type PostTitleCateDateOpts = {
  hideCategory?: boolean
  hideDate?: boolean
}

type PostTitleCateDateProps = {
  post: Post
  options?: PostTitleCateDateOpts
}

export const TCDFIHeightClass = 'h-28'

export default function PostTitleCateDate({ post, options }: PostTitleCateDateProps) {
  const { title, featuredImage, date, categories, uri } = post
  const category = categories ? categories[0] : null
  return (
    <div className="group">
      <Link className={cn(comfortaa.className, 'text-center')} href={uri || '/'}>
        <div
          className={cn('flex flex-col justify-center overflow-hidden rounded-t-md shadow-sm', {
            'rounded-b-md': !category || options?.hideCategory
          })}
        >
          <div className={cn('relative w-full overflow-hidden', TCDFIHeightClass)}>
            <PostFeaturedImage
              className="duration-300 group-hover:scale-110"
              featuredImage={featuredImage}
              title={title}
            />
          </div>
          {!options?.hideCategory && category && (
            <div
              style={{
                backgroundColor: `${category.style?.bgColor || defaultCategoryBgColor}`,
                color: `${category.style?.textColor || defaultCategoryTextColor}`
              }}
              className={cn('rounded-b-md px-2 py-1 text-xs font-semibold')}
            >
              {category?.name}
            </div>
          )}
        </div>
        <div
          className={cn(
            'group-hover:m2it-link-hover p-2 text-[0.95rem] font-semibold leading-[1.35]'
          )}
        >
          {title}
          {!!post.bookCover && (
            <IoBookOutline className="group-hover:m2it-link-hover mb-[2px] ml-2 inline text-sm text-slate-700" />
          )}
        </div>
        {!options?.hideDate && (
          <div className="text-sm opacity-80">
            <i className="icon-clock mr-1"></i>
            {date && <Date dateString={date} />}
          </div>
        )}
      </Link>
    </div>
  )
}
