import { SkeletonProps } from './types'
import FlashBlock from './FlashBlock'
import SlideBlock from './SlideBlock'

const variantMap = {
  flash: FlashBlock,
  slide: SlideBlock,
}

function Skeleton(props: SkeletonProps) {
  const {
    variant = 'text',
    animation = 'flash',
    width = 100,
    height = 100,
    style,
  } = props
  const SkeletonComponent = variantMap[animation]
  return (
    <SkeletonComponent
      width={width}
      height={height}
      variant={variant}
      style={style}
    />
  )
}

export default Skeleton
