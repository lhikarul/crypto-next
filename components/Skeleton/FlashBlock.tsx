import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { SkeletonVariant } from './types'

const flash = keyframes`
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
`

const StyledFlashBlock = styled.div<{
  width: number | string
  height: number | string
  variant: SkeletonVariant
}>`
  width: ${(props) =>
    typeof props.width === 'number' ? props.width + 'px' : props.width};
  height: ${(props) =>
    typeof props.height === 'number' ? props.height + 'px' : props.height};
  background: linear-gradient(90deg, #292b30 0%, rgba(41, 43, 48, 0) 100%);
  animation: ${flash} 0.8s ease-in-out alternate-reverse infinite;

  ${(props) => {
    if (props.variant === 'circular') {
      return `border-radius: 50%`
    } else if (props.variant === 'text') {
      return `border-radius: 4px/6.7px;`
    }
  }};
`

const FlashBlock = ({
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
    <StyledFlashBlock
      width={width}
      height={height}
      variant={variant}
      style={style}
    />
  )
}

export default FlashBlock
