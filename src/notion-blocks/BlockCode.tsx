'use client'

import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'
import { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { BlockOptionContext } from '../components/BlockRender'
import Mermaid from '../components/Mermaid'
import { getJoinedRichText } from '../helpers/block-helpers'
import FiCheck from '../icons/FiCheck'
import RxCopy from '../icons/RxCopy'
import { defaultCodeLanguage } from '../lib/config'
import BlockRichText from './BlockRichText'

type BlockCodeProps = {
  block: CodeBlockObjectResponse
  className?: string
}

export default function BlockCode(props: BlockCodeProps) {
  const ctx = useContext(BlockOptionContext) as any
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
        <div
          className={cn(
            'tooltip-auto !absolute right-2 top-2 duration-100 hover:cursor-pointer group-hover:opacity-100',
            {
              'opacity-0': !copied
            }
          )}
          data-title={
            copied ? ctx?.blockCodeCopiedText || 'Copied' : ctx?.blockCodeCopyText || 'Copy'
          }
        >
          <CopyToClipboard text={getJoinedRichText(block?.code?.rich_text)} onCopy={onSuccess}>
            <button>
              {!copied && <RxCopy className="text-lg text-slate-200 hover:text-pink-300" />}
              {copied && <FiCheck className="text-lg text-green-300" />}
            </button>
          </CopyToClipboard>
        </div>
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
