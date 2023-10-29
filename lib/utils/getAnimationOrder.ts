import {CSSProperties} from 'react'

export const getAnimationOrder = (order: number): CSSProperties => <CSSProperties>{'--animation-order': order}
