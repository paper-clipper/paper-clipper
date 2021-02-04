import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    spacing,
} from '@paper-ui/mixins'

const MARGIN_PROPS = [
    {
        aliases: [ 'all' ],
        properties: [ 'margin' ],
    },
    {
        aliases: [ 'horizontal', 'h' ],
        properties: [ 'margin-left', 'margin-right' ],
    },
    {
        aliases: [ 'vertical', 'v' ],
        properties: [ 'margin-top', 'margin-bottom' ],
    },
    {
        aliases: [ 'top' ],
        properties: [ 'margin-top' ],
    },
    {
        aliases: [ 'bottom' ],
        properties: [ 'margin-bottom' ],
    },
    {
        aliases: [ 'left' ],
        properties: [ 'margin-left' ],
    },
    {
        aliases: [ 'right' ],
        properties: [ 'margin-right' ],
    },
]

const stylePropsToCSSProperties = (properties, value) =>
    properties.reduce((acc, x) => `${acc}${`${x}: ${value};`}`, '')

const marginPropsMixin = ({ theme, ...props }) =>
    Object.keys(props).reduce((acc, key) => {
        const { properties } = MARGIN_PROPS.find((mapping) =>
            mapping.aliases.includes(key)
        ) || {}

        const value = spacing(`${props[key]}`)({ theme }) || props[key]

        return properties
            ? css`${acc}${stylePropsToCSSProperties(properties, value)}`
            : acc
    }, '')

const MARGIN_MODIFIERS = {

    'flex': () => css`
        display: flex;
    `,

    'inline-flex': () => css`
        display: inline-flex;
    `,

}

export default styled.div`
    ${marginPropsMixin}
    ${applyStyleModifiers(MARGIN_MODIFIERS)};
`
