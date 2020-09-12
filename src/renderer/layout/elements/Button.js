import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {

    'icon': () => css`
        min-width: auto;
        width: 40px;
        height: 40px;
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
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    padding: 0 0.5rem;
    min-width: 80px;
    height: 36px;
    border-radius: 12px;
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const TEXT_BUTTON_MODIFIERS = {

    'primary': ({ theme }) => css`
        color: ${theme.colors.highlight};
    `,

}

Button.Text = styled(Button)`
    ${applyStyleModifiers(TEXT_BUTTON_MODIFIERS)};
`

const CONTAINED_BUTTON_MODIFIERS = {

    'primary': ({ theme }) => css`
        color: ${theme.colors.highlight};
    `,

}

Button.Contained = styled(Button)`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black};
    transition: all 200ms ease-in-out;

    &:hover {
        transform: translate(0, -2px);
        background: rgba(0, 0, 0, 0.85);
    }
    ${applyStyleModifiers(CONTAINED_BUTTON_MODIFIERS)};
`

export default Button
