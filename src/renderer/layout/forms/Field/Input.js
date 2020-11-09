import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    colorSecondaryDarker,
    colorSecondary,
    colorPrimary50,
    colorNeutral,
    fontSecondary,
    colorPrimary,
    borderRadius,
    colorError,
} from '@paper/layout/mixins'

const INPUT_MODIFIERS = {

    'secondary': theme => css`
        color: ${colorNeutral(theme)};
        background: ${colorSecondaryDarker(theme)};
        border: none;

        ::placeholder {
            color: ${colorNeutral(theme)};
        }
    `,

    'error': theme => css`
        border: 1px solid ${colorError(theme)};
        color: ${colorError(theme)};
    `,

}

export default styled.input`
    display: ${({ hidden }) => hidden ? 'none' : 'inline-flex'};
    position: relative;
    width: 100%;
    height: ${({ hidden }) => hidden ? '0' : 'auto'};
    border: 1px solid ${colorSecondaryDarker};
    background: ${colorSecondary};
    padding: 0.75rem 1.5rem;
    box-sizing: border-box;
    font-family: ${fontSecondary};
    font-size: 0.75rem;
    font-weight: 600;
    color: ${colorPrimary};
    appearance: none;
    outline: none;
    border-radius: ${borderRadius};

    ::placeholder {
        color: ${colorPrimary50};
    }

    ${applyStyleModifiers(INPUT_MODIFIERS)};
`

