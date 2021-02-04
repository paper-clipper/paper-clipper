import { transparentize } from 'polished'
import {
    pipe,
    split,
    path,
    uncurryN,
    curry,
} from 'ramda'

const get = uncurryN(2, pipe(split(/[[\].]/), path))

const mixinFactory = curry((key, value, { theme }) =>
    get(value, get(key, theme))
)

export const borderRadius = mixinFactory('borderRadius')
export const color = (value, transparency = 1) => ({ theme }) =>
    transparentize(1 - transparency, mixinFactory('colors', value, { theme }) || value)
export const backgroundBlur = mixinFactory('effects.backgroundBlur')
export const elevation = mixinFactory('elevations')
export const size = mixinFactory('sizes')
export const spacing = curry((value, { theme }) =>
    path([ 'spacings', value ])(theme)
)
export const font = mixinFactory('typography.fonts')
export const fontSize = mixinFactory('typography.fontSizes')
export const fontWeight = mixinFactory('typography.fontWeights')
export const lineHeight = mixinFactory('typography.lineHeights')
export const letterSpacing = mixinFactory('typography.letterSpacings')
export const zIndex = mixinFactory('zIndecies')

export default {
    borderRadius,
    color,
    backgroundBlur,
    size,
    spacing,
    font,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    zIndex,
}
