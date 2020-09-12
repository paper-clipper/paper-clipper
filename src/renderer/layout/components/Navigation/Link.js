import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const LINK_MODIFIERS = {

    'active': ({ theme }) => css`
        color: ${theme.colors.black};
    `,

}

export default styled.a`
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    font-size: 1.15rem;
    ${applyStyleModifiers(LINK_MODIFIERS)};
`
