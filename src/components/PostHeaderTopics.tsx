import cn from 'classnames'
import Link from 'next/link'

import { Category, Tag } from '../interface'

type PostHeaderTopicsProps = {
  className?: string
  categories?: Category[]
  tags?: Tag[]
  selectedUri?: string
  selectedName?: string
}

const topTagClass = `flex items-center justify-center rounded-2xl px-3 py-0.5 text-xs uppercase
hover:-translate-y-0.5 transition-all duration-300 font-bold
whitespace-nowrap`

export default function PostHeaderTopics(props: PostHeaderTopicsProps) {
  const { categories, tags, className, selectedUri, selectedName } = props
  const usedTags = tags?.filter(tag => tag.uri !== props.selectedUri) || []
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {!!selectedUri && !!categories && (
        <Link
          className={`${topTagClass} border border-amber-300 bg-amber-50 !text-amber-600`}
          key={'selected'}
          href={selectedUri}
        >
          <i className="icon-star-circled mr-1"></i> {selectedName || 'Selected' }
        </Link>
      )}
      {!!categories?.length &&
        categories?.length > 0 &&
        categories
          .filter(cat => !!cat)
          .map(category => (
            <Link
              className={topTagClass}
              style={{
                backgroundColor: `${category!.style?.bgColor}`,
                color: `${category!.style?.textColor}`,
                border: category!.style?.bdColor
                  ? `1px solid ${category!.style?.bdColor}`
                  : undefined
              }}
              key={category!.uri}
              href={category!.uri || '/'}
            >
              {category!.fontello && <i className={`${category!.fontello} mr-1 text-sm`}></i>}
              {category!.name}
            </Link>
          ))}
      {usedTags.length > 0 && (
        <span className="text-gray-600">
          <i className="icon-tag-2"></i>
        </span>
      )}
      {usedTags.length > 0 &&
        usedTags.map(tag => (
          <Link
            className={cn(topTagClass, 'boder-slate-300 border text-slate-600')}
            key={tag.uri}
            href={tag.uri || '/'}
          >
            {tag.name}
          </Link>
        ))}
    </div>
  )
}
