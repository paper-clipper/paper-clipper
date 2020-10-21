import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    colorSecondary,
    fontSecondary,
    borderRadius,
    colorPrimary,
} from '@paper/layout/mixins'

const INPUT_MODIFIERS = {

    'append': () => css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `,

    'prepend': () => css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    `,

}

export default styled.input`
    display: inline-flex;
    width: 100%;
    outline: none;
    border: none;
    background: ${colorSecondary};
    padding: 0.75rem 1.5rem;
    box-sizing: border-box;
    font-family: ${fontSecondary};
    border-radius: ${borderRadius};
    font-size: 0.75rem;
    font-weight: 600;
    color: ${colorPrimary};
    appearance: none;

    ::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }

    ${applyStyleModifiers(INPUT_MODIFIERS)}
`

