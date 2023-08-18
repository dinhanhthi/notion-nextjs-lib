import Moment from 'moment'

type DateProps = {
  dateString: string
  format?: string
}

export default function Date(props: DateProps) {
  const date = Moment(props.dateString).format(props.format || 'DD/MM/YYYY')
  return <span>{date}</span>
}
