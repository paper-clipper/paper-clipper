import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    colorPrimary,
    colorPrimary10,
    colorPrimary80,
    colorSecondary,
    fontSecondary,
    transition1,
} from '@paper/layout/mixins'

const BUTTON_MODIFIERS = {

    'icon': () => css`
        min-width: auto;
        width: 40px;
        height: 40px;
        padding: 0;
    `,

}

const Button = styled.button`
    display: inline-flex;
    position: relative;
    text-decoration: none;
    background: none;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    outline: none;
    line-height: inherit;
    user-select: none;
    overflow: visible;
    cursor: pointer;
    font-size: 0.75rem;
    font-family: ${fontSecondary};
    font-weight: 700;
    color: ${colorPrimary};
    padding: 0 1rem;
    height: 32px;
    border-radius: 12px;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const TEXT_BUTTON_MODIFIERS = {}

Button.Text = styled(Button)`
    ${applyStyleModifiers(TEXT_BUTTON_MODIFIERS)};
`

const OUTLINED_BUTTON_MODIFIERS = {}

Button.Outlined = styled(Button)`
    border: 1px solid ${colorPrimary};
    transition: all ${transition1};

    &:hover {
        background: ${colorPrimary10};
        transform: translate(0, -2px);
    }
    ${applyStyleModifiers(OUTLINED_BUTTON_MODIFIERS)};
`

const CONTAINED_BUTTON_MODIFIERS = {}

Button.Contained = styled(Button)`
    color: ${colorSecondary};
    background: ${colorPrimary};
    transition: all ${transition1};

    &:hover {
        transform: translate(0, -2px);
        background: ${colorPrimary80};
    }
    ${applyStyleModifiers(CONTAINED_BUTTON_MODIFIERS)};
`

export default Button
