import React from 'react'

export type SkeletonVariant = 'circular' | 'rectangular' | 'text'

export interface SkeletonProps {
  variant?: SkeletonVariant
  animation?: 'slide' | 'flash'
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
}
