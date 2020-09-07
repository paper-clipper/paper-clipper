import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const INPUT_MODIFIERS = {

    'invalid': () => css`
        color: #ff1744;

        :active, :focus {
            color: #ff1744;
        }

    `,

}

export default styled.input`
    display: inline-flex;
    width: 100%;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.whiteDarker};
    background: ${({ theme }) => theme.colors.white};
    padding: 0.875rem 1.5rem;
    box-sizing: border-box;
    font-family: 'Open Sans', 'sans-serif';
    border-radius: 12px;
    font-size: .875em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    appearance: none;

    ::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }

    :active, :focus {

    }

    ${applyStyleModifiers(INPUT_MODIFIERS)}
`

