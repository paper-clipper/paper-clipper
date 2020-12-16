import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    colorSecondaryDarker,
    colorSecondary,
    fontSecondary,
    colorPrimary,
    colorError,
    borderRadius,
} from '@paper/layout/mixins'

const LABEL_MODIFIERS = {

    'input': theme => css`
        display: inline-flex;
        position: relative;
        width: 100%;
        border: 1px solid ${colorSecondaryDarker(theme)};
        background: ${colorSecondary(theme)};
        padding: 3rem 1.5rem;
        box-sizing: border-box;
        font-family: ${fontSecondary(theme)};
        font-size: 0.75rem;
        font-weight: 600;
        color: ${colorPrimary(theme)};
        appearance: none;
        outline: none;
        border-radius: ${borderRadius(theme)};
        /* pointer-events: none; */
    `,

    'error': theme => css`
        border-color: ${colorError(theme)};
        color: ${colorError(theme)}
    `,

    'align-center': () => css`
        justify-content: center;
        align-items: center;
    `,

    'border-dashed': theme => css`
        border: 1px dashed ${colorSecondaryDarker(theme)};
    `,

}

export default styled.label`
    font-family: ${fontSecondary};
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.5rem 1rem 0.25rem 1rem;
    box-sizing: border-box;
    color: ${colorPrimary};
    ${applyStyleModifiers(LABEL_MODIFIERS)};
`
