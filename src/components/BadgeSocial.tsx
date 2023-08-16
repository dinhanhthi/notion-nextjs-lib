'use client'

import { Tooltip } from 'react-tooltip'

import { ImageType } from '../interface'
import ImageComponent from './ImageComponent'

export type BadgeSocialProps = {
  id?: string
  icon: ImageType
  url: string
  title: string
  imgClass?: string
}

export default function BadgeSocial(props: BadgeSocialProps) {
  return (
    <>
      <a
        className={`
        group block h-12 w-12 rounded-2xl bg-gray-700 p-2
        shadow-none md:h-10 md:w-10 md:p-1.5
      `}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        data-tooltip-id="badge-social-tooltip"
        data-tooltip-content={props.title}
        data-tooltip-place="bottom"
      >
        <ImageComponent
          image={props.icon}
          alt={props.title}
          className="w-16 h-16 rounded-full bg-slate-100"
          imageProps={{ width: 64, height: 64 }}
        />
      </a>
      <Tooltip id="badge-social-tooltip" noArrow={true} />
    </>
  )
}
