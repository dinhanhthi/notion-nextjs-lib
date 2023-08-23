'use client'

import Moment from 'moment'
import { useEffect, useState } from 'react'

type DateProps = {
  dateString: string
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
  const [humanized, setHumanized] = useState('')
  const fullDate = Moment(props.dateString).format(props.format || 'DD/MM/YYYY')

  useEffect(() => {
    const date = new Date(props.dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays <= 0) {
      setHumanized(props.humanizeOpts?.today || 'today')
    } else if (diffDays <= 1) {
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
  }, [])
  return <span className={props.className}>{props.humanize ? humanized : fullDate}</span>
}
