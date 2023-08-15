'use client'

import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import { BookmarkPreview } from '../interface'

export default function BlockBookmark(props: {
  block: BookmarkBlockObjectResponse & {
    bookmark?: BookmarkPreview
  }
  className?: string
}) {
  const data = props.block.bookmark

  return (
    <>
      {data && (
        <a
          className={cn(
            'flex w-full overflow-hidden rounded-md border border-slate-200 p-3',
            'hover:cursor-pointer hover:border-sky-300 hover:shadow-sm'
          )}
          href={data.url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-[4_1_180px] flex-col justify-between gap-4 overflow-hidden">
            <div className="flex flex-col gap-1.5">
              <div className="truncate font-normal">{data.title}</div>
              <div className="truncate text-sm font-normal text-slate-600">{data.description}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="relative h-4 w-4">
                <img className="h-full w-full" src={data.favicon} alt={data.title} />
              </div>
              <div className="text-sm font-normal text-slate-500">{data.url}</div>
            </div>
          </div>
          {data.imageSrc && (
            <div className="relative hidden flex-[1_1_100px] sm:block">
              <img className="h-full w-full" src={data.imageSrc} alt={data.title} />
            </div>
          )}
        </a>
      )}
    </>
  )
}
