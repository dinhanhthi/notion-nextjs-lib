'use client'

import cn from 'classnames'

import { ImageType } from '../interface'
import ImageComponent from './ImageComponent'

export type TechItem = {
  id: string
  name: string
  icon: ImageType
  url: string
  imgClass?: string
}

type BadgeTechProps = {
  tech: TechItem
  hideText?: boolean
}

export default function BadgeTech(props: BadgeTechProps) {
  return (
    <>
      <a
        className={`flex h-6 w-fit items-center justify-center rounded-md border bg-[#ededed] px-1
        align-baseline text-base text-[#1e293b] shadow-sm transition duration-200
        duration-200 ease-in-out ease-in-out hover:-translate-y-0.5 dark:border-[#3b3e54]
        dark:bg-[#343e4c] dark:text-[#f8fafc] tooltip-auto`}
        href={props.tech.url}
        data-title={props.tech.name}
      >
        <ImageComponent
          image={props.tech.icon}
          alt={props.tech.name}
          className={cn('w-[18px] h-[18px]', props.tech.imgClass)}
          imageProps={{ width: 32, height: 32 }}
        />
        {!props.hideText && (
          <span className="ml-1.5 whitespace-nowrap text-[81%] tracking-wide">
            {props.tech.name}
          </span>
        )}
      </a>
    </>
  )
}
