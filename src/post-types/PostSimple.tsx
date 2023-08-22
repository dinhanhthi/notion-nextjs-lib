'use client'

import cn from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import DateComponent from '../components/Date'
import { isDateAfter } from '../helpers/helpers'
import FaPenNib from '../icons/FaPenNib'
import HiOutlineDocumentText from '../icons/HiOutlineDocumentText'
import { Post } from '../interface'

export type PostSimpleOpts = {
  hideDate?: boolean
  fontClassName?: string
  customIcon?: React.ReactNode
  updatedOnLabel?: string
  draftLabel?: string
}

type PostSimpleProps = {
  post: Post
  options?: PostSimpleOpts
}

export default function PostSimple(props: PostSimpleProps) {
  const [isIn7Days, setIsIn7Days] = useState(false)
  const { post, options } = props

  // check if the last modified date is around 7 days
  useEffect(() => {
    const lastModifiedDate = new Date(post.date)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - lastModifiedDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays <= 7) {
      setIsIn7Days(true)
    }
  }, [])

  return (
    <div className="group hover:bg-gray-50">
      <Link
        className={cn(options?.fontClassName, 'flex items-start gap-3 py-3 px-2')}
        href={post.uri || '/'}
      >
        <div className="mt-[3px] text-slate-600">
          {!!options?.customIcon && options.customIcon}
          {!options?.customIcon && !post.isBlog && <HiOutlineDocumentText className="text-xl" />}
          {!options?.customIcon && post.isBlog && <FaPenNib className="text-lg" />}
        </div>
        <h3 className="flex-1">
          {post.title}{' '}
          {post.isDraft && (
            <span className="bg-slate-200 text-slate-800 px-2 py-0 text-[0.8rem] rounded-md">
              {options.draftLabel || 'draft'}
            </span>
          )}
        </h3>
        {(post.createdDate || post.date) && (
          <div className="gap-2 hidden md:flex">
            {post.date && post.createdDate && isDateAfter(post.date, post.createdDate) && (
              <div
                className={cn(
                  'px-3 py-0.5 text-[0.8rem] items-start rounded-md whitespace-nowrap',
                  {
                    'bg-slate-200 text-slate-800': !isIn7Days,
                    'bg-green-200 text-green-900': isIn7Days
                  }
                )}
              >
                {options?.updatedOnLabel || 'updated'}{' '}
                <DateComponent
                  className="hidden lg:inline-block"
                  dateString={post.date}
                  format="MMM DD, YYYY"
                />
              </div>
            )}
            {post.createdDate && (
              <DateComponent
                className="text-[0.9rem] text-slate-800"
                dateString={post.createdDate}
                format="MMM DD, YYYY"
              />
            )}
          </div>
        )}
      </Link>
    </div>
  )
}
