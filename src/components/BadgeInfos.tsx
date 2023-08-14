import Link from 'next/link'

export type BadgeInfosProps = {
  id?: string
  url: string
  title: string
  external?: boolean
  icon?: any
  className?: string
  targetSelf?: boolean
}

export default function BadgeInfos(props: BadgeInfosProps) {
  const aLinkClass = `
    block py-2.5 bg-transparent text-main-dark rounded-3xl border-gray-600 text-sm
    uppercase font-bold tracking-widest${
      props?.className ? ` ${props.className}` : ' px-5 hover:bg-gray-700'
    } transition duration-300 shadow-md md:shadow-none`

  if (props.external || props.url.includes('//')) {
    return (
      <a
        className={aLinkClass}
        href={props.url}
        target={props.targetSelf ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        {props.icon && <span className="mr-3">{props.icon}</span>}
        <span>{props.title}</span>
      </a>
    )
  }
  return (
    <Link className={aLinkClass} href={props.url} target="_blank" rel="noopener noreferrer">
      {props.icon && <span className="mr-3">{props.icon}</span>}
      <span>{props.title}</span>
    </Link>
  )
}
