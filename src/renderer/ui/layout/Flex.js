import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const FLEX_MODIFIERS = {

    'full': () => css`
        width: 100%;
        height: 100%;
    `,

    'center': () => css`
        justify-content: center;
        align-items: center;
    `,

}

export default styled.div`
    display: flex;
    ${applyStyleModifiers(FLEX_MODIFIERS)};
`
