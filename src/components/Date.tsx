'use client'

import Moment from 'moment'
import { useEffect, useState } from 'react'

import BiDotsHorizontalRounded from '../icons/BiDotsHorizontalRounded'

type DateProps = {
  dateString: string
  dateLabel?: string // Eg: 'Updated at:'
  format?: string
  className?: string
  humanize?: boolean
  humanizeOpts?: {
    today?: string
    yesterday?: string
    daysAgo?: string
    weeksAgo?: string
    monthsAgo?: string
  }
}

export default function DateComponent(props: DateProps) {
  const [hydrated, setHydrated] = useState(false)
  const [humanized, setHumanized] = useState('')
  const fullDate = Moment(props.dateString).format(props.format || 'DD/MM/YYYY')

  useEffect(() => {
    const date = new Date(props.dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays <= 1) {
      setHumanized(props.humanizeOpts?.today || 'today')
    } else if (diffDays <= 2) {
      setHumanized(props.humanizeOpts?.yesterday || 'yesterday')
    } else if (diffDays <= 7) {
      setHumanized(`${diffDays} ${props.humanizeOpts?.daysAgo || 'days ago'}`)
    } else if (diffDays <= 30) {
      setHumanized(`${Math.ceil(diffDays / 7)} ${props.humanizeOpts?.weeksAgo || 'weeks ago'}`)
    } else if (diffDays <= 365) {
      setHumanized(`${Math.ceil(diffDays / 30)} ${props.humanizeOpts?.monthsAgo || 'months ago'}`)
    } else {
      setHumanized(fullDate)
    }

    setHydrated(true)
  }, [])

  if (!hydrated) return <BiDotsHorizontalRounded className="opacity-70 animate-ping" />

  return (
    <span className={props.className}>
      {props.dateLabel ? props.dateLabel + ' ' : ''}
      {props.humanize ? humanized : fullDate}
    </span>
  )
}
