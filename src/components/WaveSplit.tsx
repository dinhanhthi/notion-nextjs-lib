import cn from 'classnames'

export default function WaveSplit() {
  return (
    <>
      <div
        className={cn('after:block after:h-8 after:w-full after:bg-wave dark:after:bg-wave-dark')}
      ></div>
      <div className={cn('h-8 bg-white')}></div>
    </>
  )
}
