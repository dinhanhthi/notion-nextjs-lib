import cn from 'classnames'

type WaveSplitProps = {
  topColorClass?: string
  bottomColorClass?: string
}

export default function WaveSplit(props: WaveSplitProps) {
  return (
    <>
      <div
        className={cn(props.topColorClass || 'after:bg-wave after:block after:h-8 after:w-full')}
      ></div>
      <div className={cn('h-8', props.bottomColorClass || 'bg-white')}></div>
    </>
  )
}
