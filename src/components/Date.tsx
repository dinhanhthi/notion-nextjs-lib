import Moment from 'moment'

export default function Date({ dateString }: { dateString: string }) {
  const date = Moment(dateString).format('DD/MM/YYYY')
  return <span>{date}</span>
}
