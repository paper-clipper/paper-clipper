import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    fontSize,
    font,
    fontWeight,
    color,
    borderRadius,
} from '@paper-ui/mixins'

const BUTTON_MODIFIERS = {

    'md': theme => css`
        font-size: ${fontSize('md')(theme)};
    `,

    'neutral': theme => css`
        color: ${color('brand.neutral')(theme)};
    `,

}

export const Button = styled.button`
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
    font-size: ${fontSize('sm')};
    font-family: ${font('secondary')};
    font-weight: ${fontWeight('bold')};
    color: ${color('brand.primary')};
    padding: 0 1rem;
    height: 32px;
    border-radius: ${borderRadius('base')};
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`

const ICON_BUTTON_MODIFIERS = {

    'md': () => css`
        height: 32px;
        width: 32px;
    `,

    'full': () => css`
        display: flex;
        width: 100%;
        height: 100%;
    `,

    'neutral': (theme) => css`
        color: ${color('brand.neutral')(theme)};
    `,

}

Button.Icon = styled(Button)`
    display: flex;
    height: 28px;
    width: 28px;
    padding: 0;
    transition: background-color 200ms ease-in-out;

    &:hover {
        background: ${color('grey.50')};
    }

    &:active {
        background: ${color('grey.50')};
    }

    ${applyStyleModifiers(ICON_BUTTON_MODIFIERS)};
`

const TEXT_BUTTON_MODIFIERS = {

    'primary': theme => css`
        color: ${color('brand.primary')(theme)};
    `,

    'secondary': theme => css`
        color: ${color('brand.primary', 0.50)(theme)};
    `,

}

Button.Text = styled(Button)`
    transition: background-color 200ms ease-in-out;

    &:hover {
        background: ${color('grey.50')};
    }

    &:active {
        background: ${color('grey.50')};
    }

    ${applyStyleModifiers(TEXT_BUTTON_MODIFIERS)};

`
