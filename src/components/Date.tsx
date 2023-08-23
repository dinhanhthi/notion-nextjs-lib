'use client'

import Moment from 'moment'
import { useEffect, useState } from 'react'

type DateProps = {
  dateString: string
  format?: string
  toDuration?: boolean
  className?: string
  humanize?: boolean
}

export default function DateComponent(props: DateProps) {
  const [humanized, setHumanized] = useState('')

  // useEffect(() => {
  //   const date = new Date(props.dateString)
  //   const today = new Date()
  //   const diffTime = Math.abs(today.getTime() - lastModifiedDate.getTime())
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  //   if (diffDays <= maxDays) {
  //     setIsIn7Days(true)
  //   }

  //   const createdDate = new Date(post.createdDate)
  //   const diffTime2 = Math.abs(today.getTime() - createdDate.getTime())
  //   const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24))
  //   if (diffDays2 <= maxDays) {
  //     setIsNew(true)
  //   }
  // }, [])

  const date = Moment(props.dateString).format(props.format || 'DD/MM/YYYY')
  return <span className={props.className}>{date}</span>
}
