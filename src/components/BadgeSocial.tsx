'use client'

import Tippy from '@tippyjs/react'

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
    <Tippy content={props.title} placement="bottom" arrow={false}>
      <a
        className={`
          group block h-12 w-12 rounded-2xl bg-gray-700 p-2
          shadow-none md:h-10 md:w-10 md:p-1.5
        `}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageComponent
          image={props.icon}
          alt={props.title}
          className="w-16 h-16 rounded-full bg-slate-100"
          imageProps={{ width: 64, height: 64 }}
        />
      </a>
    </Tippy>
  )
}
