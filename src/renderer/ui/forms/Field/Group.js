import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    color,
    borderRadius,
} from '@paper-ui/mixins'

import Input from './Input'

const GROUP_MODIFIERS = {

    'beside': () => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 0 1rem;
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
        color: ${color('brand.neutral')(theme)};
        background: ${color('grey.50')(theme)};

        & ${Input} {
            color: ${color('brand.neutral')(theme)};
            background: ${color('grey.50')(theme)};
            border: none;

            ::placeholder {
                color: ${color('brand.neutral')(theme)};
            }
        }
    `,

    'error': theme => css`
        border: 1px solid ${color('red.500')(theme)};

        & ${Input} {
            color: ${color('red.500')(theme)};
        }
    `,

}

export default styled.div`
    display: inline-flex;
    width: 100%;
    border-radius: ${borderRadius('base')};
    overflow: hidden;
    background: ${color('brand.secondary')};
    border: 1px solid ${color('grey.50')};

    & ${Input} {
        border: none;
    }

    ${applyStyleModifiers(GROUP_MODIFIERS)}
`
