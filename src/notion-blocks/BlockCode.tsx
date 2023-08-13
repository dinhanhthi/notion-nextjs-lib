'use client'

import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Tippy from '@tippyjs/react'
import cn from 'classnames'
import { useState } from 'react'
import Clipboard from 'react-clipboard.js'
import { FiCheck } from 'react-icons/fi'
import { RxCopy } from 'react-icons/rx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Mermaid from '../components/Mermaid'
import { getJoinedRichText } from '../helpers/block-helpers'
import { defaultCodeLanguage } from '../lib/config'
import BlockRichText from './BlockRichText'

export default function BlockCode(props: { block: CodeBlockObjectResponse; className?: string }) {
  const { block, className } = props
  const language = block?.code?.language?.toLowerCase() || defaultCodeLanguage

  const [copied, setCopied] = useState(false)
  const onSuccess = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className={cn(className, 'group')}>
      <div className={`language-${formatCodeLang(language)} syntax-highlighter relative`}>
        <SyntaxHighlighter
          language={formatCodeLang(language)}
          style={dracula}
          className="syntax-highlighter-pre text-sm"
          showLineNumbers={true}
        >
          {/* We don't use <BlockRichText> because the package react-syntax-highlighter requires a string. */}
          {getJoinedRichText(block?.code?.rich_text)}
        </SyntaxHighlighter>

        <Tippy
          content={copied ? 'Đã sao chép' : 'Sao chép đoạn code'}
          arrow={false}
          placement="top"
        >
          <div
            className={cn(
              'absolute right-2 top-2 duration-100 hover:cursor-pointer',
              {
                'opacity-0': !copied
              },
              'group-hover:opacity-100'
            )}
          >
            <Clipboard
              data-clipboard-text={getJoinedRichText(block?.code?.rich_text)}
              onSuccess={onSuccess}
            >
              <>
                {!copied && <RxCopy className="text-lg text-slate-200 hover:text-pink-300" />}
                {copied && <FiCheck className="text-lg text-green-300" />}
              </>
            </Clipboard>
          </div>
        </Tippy>
      </div>

      {block?.code?.caption && (
        <div className="italic opacity-60">
          {block?.code?.caption?.map((richText, index) => (
            <BlockRichText key={index} richText={richText} />
          ))}
        </div>
      )}

      {block?.code?.language === 'mermaid' && (
        <Mermaid chart={getJoinedRichText(block?.code?.rich_text)} />
      )}
    </div>
  )
}

/**
 * Convert the code language notation of the Notion api to the code language notation of react-syntax-highlighter.
 * https://developers.notion.com/reference/block#code-blocks
 * https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
 */
const formatCodeLang = (lang: string) => {
  switch (lang) {
    case 'plain text':
      return 'plaintext'
    case 'objective-c':
      return 'objectivec'
    default:
      return lang
  }
}
