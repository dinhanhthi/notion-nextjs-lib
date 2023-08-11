'use client'

import { VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { get } from 'lodash'
import YouTube from 'react-youtube'

import { getJoinedRichText, getYoutubeVideoId } from '../lib/block-helpers'
import BlockRichText from './BlockRichText'

type BlockVideoProps = {
  block: VideoBlockObjectResponse
  className?: string
}

export default function BlockVideo(props: BlockVideoProps) {
  const videoUrl = get(props.block, 'video.external.url')
  const videoId = getYoutubeVideoId(videoUrl)
  if (!videoId) return null
  const caption = get(props.block, 'video.caption')
  const title = caption ? getJoinedRichText(caption) : ''
  return (
    <div className={cn(props.className, 'flex flex-col justify-center items-center gap-2')}>
      <div className="w-full">
        <YouTube videoId={videoId} title={title} className="aspect-video w-full" />
      </div>
      {caption && caption.length > 0 && (
        <div className="text-sm italic opacity-90">
          {caption.map((richText, index) => (
            <BlockRichText key={index} richText={richText} />
          ))}
        </div>
      )}
    </div>
  )
}
