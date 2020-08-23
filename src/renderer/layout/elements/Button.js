import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

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
`

const TEXT_BUTTON_MODIFIERS = {

    'primary': ({ theme }) => css`
        color: ${theme.colors.highlight};
    `,

}

Button.Text = styled(Button)`
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    padding: 0 0.5rem;
    min-width: 64px;
    height: 36px;
    border-radius: 12px;
    ${applyStyleModifiers(TEXT_BUTTON_MODIFIERS)};
`

export default Button
