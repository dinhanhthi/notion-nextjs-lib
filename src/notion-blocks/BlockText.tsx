import {
  MentionRichTextItemResponse,
  TextRichTextItemResponse
} from '@notionhq/client/build/src/api-endpoints'
import { AnnotationIgnoreField, TextIgnoreField } from '@src/interface'
import cn from 'classnames'
import { get } from 'lodash'
import Link from 'next/link'

import { generateTextAnnotationClasses } from '../lib/block-helpers'

type TextProps = {
  richText: TextRichTextItemResponse | MentionRichTextItemResponse
  ignore?: TextIgnoreField[]
}

export default function BlockText(props: TextProps) {
  if (props.richText.plain_text.includes('\n')) {
    const lines = props.richText.plain_text.split('\n')
    return (
      <>
        {lines.map((line, index) => (
          <span key={index}>
            {line}
            {index !== lines.length - 1 && <br />}
          </span>
        ))}
      </>
    )
  }

  // Hyperlink
  if (
    props.richText.type === 'text' &&
    !props.ignore?.includes('hyperlink') &&
    props.richText.href
  ) {
    // Link contains "math2it.com"
    // This is the link coming from the current version of math2it, not the old ones
    if (props.richText.href.includes('math2it.com') && !props.richText.href.includes('@')) {
      const uri = getUriFromUrl(props.richText.href)
      return (
        <Link
          className={generateTextAnnotationClasses(
            props.richText.annotations,
            props.ignore as AnnotationIgnoreField[]
          )}
          href={uri}
        >
          {props.richText.plain_text}
        </Link>
      )
    } else {
      return (
        <a
          className={cn(
            'm2it-link',
            generateTextAnnotationClasses(
              props.richText.annotations,
              props.ignore as AnnotationIgnoreField[]
            )
          )}
          href={props.richText.href}
          target="_blank"
          rel="noreferrer"
        >
          {props.richText.plain_text}
        </a>
      )
    }
  }

  // Mention a page
  if (
    !props.ignore?.includes('hyperlink') &&
    props.richText.type === 'mention' &&
    props.richText.mention?.type === 'page' &&
    get(props.richText, 'mention.page.uri') // "uri" is a custom property defined by Math2IT
  ) {
    return (
      <Link
        className={generateTextAnnotationClasses(
          props.richText.annotations,
          props.ignore as AnnotationIgnoreField[]
        )}
        href={get(props.richText, 'mention.page.uri', '/')}
      >
        {props.richText.plain_text}
      </Link>
    )
  }

  // Mention a date
  if (props.richText.type === 'mention' && props.richText.mention?.type === 'date') {
    return (
      <span
        className={generateTextAnnotationClasses(
          props.richText.annotations,
          props.ignore as AnnotationIgnoreField[]
        )}
      >
        {formatDate(props.richText.plain_text)}
      </span>
    )
  }

  const noDecoration =
    !props.richText.annotations.bold &&
    !props.richText.annotations.italic &&
    !props.richText.annotations.underline &&
    !props.richText.annotations.strikethrough &&
    !props.richText.annotations.code &&
    props.richText.annotations.color === 'default' &&
    !props.richText.href

  if (noDecoration) return props.richText.plain_text

  return (
    <span
      className={generateTextAnnotationClasses(
        props.richText.annotations,
        props.ignore as AnnotationIgnoreField[]
      )}
    >
      {props.richText.plain_text}
    </span>
  )
}

function getUriFromUrl(url: string) {
  // Remove the protocol (http:// or https://)
  const withoutProtocol = url.replace(/^(https?:\/\/)/, '')

  // Remove "www" if present
  const withoutWWW = withoutProtocol.replace(/^www\./, '')

  // Remove trailing slashes
  const withoutTrailingSlashes = withoutWWW.replace(/\/+$/, '')

  // Remove "math2it.com" if present
  const withoutDomain = withoutTrailingSlashes.replace(/math2it.com/, '')

  // Add "/" at the beginning and the end
  const slug = `${withoutDomain}/`

  return slug
}

function formatDate(inputString: string) {
  // Split the input string by the hyphen '-'
  const [year, month, day] = inputString.split('-')

  // Concatenate the day, month, and year with forward slashes '/'
  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}
