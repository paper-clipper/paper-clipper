import { css } from 'styled-components'
import { identity } from 'ramda'

const stylePropsToCSSProperties = (properties, value) =>
    properties.reduce((acc, x) => `${acc}${`${x}: ${value};`}`, '')

export const stylePropsMixin = (styleProps, mixin = identity) => ({ theme, ...props }) =>
    Object.keys(props).reduce((acc, key) => {
        const { properties } = styleProps.find((mapping) =>
            mapping.aliases.includes(key)
        ) || {}

        const value = mixin(`${props[key]}`)({ theme }) || props[key]

        return properties
            ? css`${acc}${stylePropsToCSSProperties(properties, value)}`
            : acc
    }, '')
