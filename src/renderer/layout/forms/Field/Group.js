import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    borderRadius,
    colorNeutral,
    colorSecondaryDarker,
    colorError,
    colorSecondary,
} from '@paper/layout/mixins'

import Input from './Input'

const GROUP_MODIFIERS = {

    'beside': () => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 0 0.5rem;
        box-sizing: border-box;
        border: none;
    `,

    'prepend': () => css`
        & ${Input} {
            padding-left: 0;
        }
    `,

    'append': () => css`
        & ${Input} {
            padding-right: 0;
        }
    `,

    'secondary': theme => css`
        color: ${colorNeutral(theme)};
        background: ${colorSecondaryDarker(theme)};

        & ${Input} {
            color: ${colorNeutral(theme)};
            background: ${colorSecondaryDarker(theme)};
            border: none;

            ::placeholder {
                color: ${colorNeutral(theme)};
            }
        }
    `,

    'error': theme => css`
        border: 1px solid ${colorError(theme)};
    `,

}

export default styled.div`
    display: inline-flex;
    width: 100%;
    border-radius: ${borderRadius};
    overflow: hidden;
    background: ${colorSecondary};
    border: 1px solid ${colorSecondaryDarker};

    & ${Input} {
        border: none;
    }

    ${applyStyleModifiers(GROUP_MODIFIERS)}
`
