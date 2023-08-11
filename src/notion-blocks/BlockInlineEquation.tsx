'use client'

import Katex from '@matejmazur/react-katex'
import { EquationRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

import { generateTextAnnotationClasses } from '../lib/block-helpers'
import { mathFontSize } from './BlockEquation'

type BlockInlineEquationProps = {
  equation: EquationRichTextItemResponse
  fontSize?: string
}

export default function BlockInlineEquation(props: BlockInlineEquationProps) {
  return (
    <span className={generateTextAnnotationClasses(props.equation.annotations)}>
      <Katex
        className={props.fontSize ?? mathFontSize}
        math={props.equation.plain_text}
        settings={{
          throwOnError: false,
          strict: false
        }}
      />
    </span>
  )
}
