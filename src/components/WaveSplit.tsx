import cn from 'classnames'

type WaveSplitProps = {
  topColorClass?: string
  middleColorClass?: string
  bottomColorClass?: string
}

export default function WaveSplit(props: WaveSplitProps) {
  return (
    <div
      className={cn(props.middleColorClass || 'after:bg-wave after:block after:h-8 after:w-full')}
    ></div>
  )
}
