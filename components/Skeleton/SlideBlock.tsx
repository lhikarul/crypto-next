import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { SkeletonVariant } from './types'

const slide = keyframes`
    from {
        left: -150%;
    }
    to {
        left: 100%;
    }
`

const StyledSlideBlock = styled.div<{
  width: number | string
  height: number | string
  variant: SkeletonVariant
}>`
  width: ${(props) =>
    typeof props.width === 'number' ? props.width + 'px' : props.width};
  height: ${(props) =>
    typeof props.height === 'number' ? props.height + 'px' : props.height};

  ${(props) => {
    if (props.variant === 'circular') {
      return `border-radius: 50%`
    } else if (props.variant === 'text') {
      return `border-radius: 4px/6.7px;`
    }
  }};

  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 80px;
    top: 0px;
    background: linear-gradient(90deg, #292b30 0%, rgba(41, 43, 48, 0) 100%);
    animation: ${slide} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`

const SlideBlock = ({
  width,
  height,
  variant,
  style,
}: {
  width: number | string
  height: number | string
  variant: SkeletonVariant
  style?: React.CSSProperties
}) => {
  return (
    <StyledSlideBlock
      width={width}
      height={height}
      variant={variant}
      style={style}
    />
  )
}

export default SlideBlock
