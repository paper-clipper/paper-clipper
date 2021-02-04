import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    color,
    font,
    fontSize,
} from '@paper-ui/mixins'

const MESSAGE_MODIFIERS = {

    'error': theme => css`
        color: ${color('red.500')(theme)};
    `,

}

export default styled.p`
    display: inline-flex;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    color: ${color('brand.primary', 0.8)};
    font-family: ${font('secondary')};
    font-size: ${fontSize('xs')};
    ${applyStyleModifiers(MESSAGE_MODIFIERS)};
`
