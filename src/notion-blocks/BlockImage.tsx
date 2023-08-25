'use client'

import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { get } from 'lodash'
import mediumZoom from 'medium-zoom'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { getJoinedRichText } from '../helpers/block-helpers'
import { defaultBlurDataURL } from '../lib/config'
import BlockRichText from './BlockRichText'

export default function BlockImage(props: {
  block: ImageBlockObjectResponse & {
    imageInfo?: { width: number; height: number }
    imgUrl?: string
  }
  className?: string
}) {
  const [isImageReady, setIsImageReady] = useState(false)
  const { block, className } = props
  const width = Math.min(get(block, 'imageInfo.width', 1000), 1000)
  const height = Math.min(get(block, 'imageInfo.height', 700), 700)
  const blurDataURL = get(block, 'imageInfo.base64', defaultBlurDataURL)
  const caption = block?.image?.caption

  const zoomRef = useRef(null)
  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom({
        background: '#000000a6',
        margin: 20
      })
    }

    return zoomRef.current
  }

  function attachZoom(image) {
    const zoom = getZoom()

    if (image) {
      zoom.attach(image)
    } else {
      zoom.detach()
    }
  }

  return (
    <div className={cn(className, 'flex flex-col justify-center items-center gap-2')}>
      {block.imgUrl && (
        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <Image
            className={cn({
              'blur-lg': !isImageReady,
              'blur-0': isImageReady
            })}
            src={block.imgUrl}
            alt={getJoinedRichText(block?.image?.caption)}
            width={width}
            height={height}
            blurDataURL={blurDataURL}
            placeholder="blur"
            onLoadingComplete={() => setIsImageReady(true)}
            data-zoomable
            ref={attachZoom}
          />
        </div>
      )}
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
