import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    borderRadius,
    colorSecondary,
} from '@paper/layout/mixins'

const GROUP_MODIFIERS = {

    'append': () => css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    `,

    'prepend': () => css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `,

}

export default styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    border-radius: ${borderRadius};
    background: ${colorSecondary};
    ${applyStyleModifiers(GROUP_MODIFIERS)}
`
