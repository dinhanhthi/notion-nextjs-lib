'use client'

import Katex from '@matejmazur/react-katex'
import { EquationBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

export const mathFontSize = 'text-base'

export default function BlockEquation(props: {
  block: EquationBlockObjectResponse
  className?: string
}) {
  const { block, className } = props
  return (
    <div className={cn(className, 'text-center overflow-auto md:overflow-visible')}>
      <Katex
        className={mathFontSize}
        math={block?.equation?.expression}
        settings={{
          throwOnError: false,
          strict: false
        }}
        block
      />
    </div>
  )
}
