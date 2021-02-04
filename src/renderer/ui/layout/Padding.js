import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    spacing,
    stylePropsMixin,
} from '@paper-ui/mixins'

const PADDING_PROPS = [
    {
        aliases: [ 'all' ],
        properties: [ 'padding' ],
    },
    {
        aliases: [ 'horizontal', 'h' ],
        properties: [ 'padding-left', 'padding-right' ],
    },
    {
        aliases: [ 'vertical', 'v' ],
        properties: [ 'padding-top', 'padding-bottom' ],
    },
    {
        aliases: [ 'top' ],
        properties: [ 'padding-top' ],
    },
    {
        aliases: [ 'bottom' ],
        properties: [ 'padding-bottom' ],
    },
    {
        aliases: [ 'left' ],
        properties: [ 'padding-left' ],
    },
    {
        aliases: [ 'right' ],
        properties: [ 'padding-right' ],
    },
]

const PADDING_MODIFIERS = {

    'full': () => css`
        display: inline-flex;
        width: 100%;
        height: 100%;
    `,

}

export default styled.div`
    display: inline-flex;
    ${stylePropsMixin(PADDING_PROPS, spacing)};
    ${applyStyleModifiers(PADDING_MODIFIERS)}
`
