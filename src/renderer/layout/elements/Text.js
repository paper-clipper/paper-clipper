import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    colorPrimary,
    colorPrimary50,
    fontSecondary,
} from '@paper/layout/mixins'

const TEXT_MODIFIERS = {

    'secondary': theme => css`
        color: ${colorPrimary50(theme)};
    `,

    'semibold': () => css`
        font-weight: 600;
    `,

}

export default styled.p`
    color: ${colorPrimary};
    font-family: ${fontSecondary};
    font-size: 0.75rem;
    ${applyStyleModifiers(TEXT_MODIFIERS)}
`
