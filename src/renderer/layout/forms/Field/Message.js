import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    colorPrimary80,
    colorError,
    fontSecondary,
} from '@paper/layout/mixins'

const MESSAGE_MODIFIERS = {

    'error': theme => css`
        color: ${colorError(theme)};
    `,

}

export default styled.p`
    display: inline-flex;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    color: ${colorPrimary80};
    font-family: ${fontSecondary};
    font-size: 0.625rem;
    ${applyStyleModifiers(MESSAGE_MODIFIERS)};
`
