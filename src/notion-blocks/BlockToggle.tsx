'use client'

import { Disclosure } from '@headlessui/react'
import { ToggleBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import { mapColorClass } from '../helpers/block-helpers'
import BsFillCaretRightFill from '../icons/BsFillCaretRightFill'
import BlockRichText from './BlockRichText'

export default function BlockToggle(props: {
  block: ToggleBlockObjectResponse
  children?: React.ReactNode
  className?: string
}) {
  const { block, children, className } = props
  return (
    <div
      className={cn(
        mapColorClass(block?.toggle?.color),
        'rounded-md border-[0.5px] border-slate-200',
        className
      )}
    >
      <Disclosure defaultOpen={false}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cn('flex gap-2 w-full items-start p-2 rounded-md', {
                'bg-gray-100 hover:bg-gray-200': open,
                'bg-gray-50 hover:bg-gray-100': !open
              })}
            >
              <BsFillCaretRightFill
                className={cn(
                  'mt-[4px] text-lg transform ease-in-out transition-all duration-[400ms]',
                  {
                    'rotate-90': open,
                    'rotate-0': !open
                  }
                )}
              />
              <div className="text-start">
                {block?.toggle?.rich_text.map((richText, index) => (
                  <BlockRichText key={index} richText={richText} />
                ))}
              </div>
            </Disclosure.Button>
            {!!children && (
              <Disclosure.Panel className={'pr-4'}>
                {children}
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>
    </div>
  )
}
