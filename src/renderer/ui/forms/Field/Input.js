import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    color,
    font,
    fontSize,
    fontWeight,
    borderRadius,
} from '@paper-ui/mixins'

const INPUT_MODIFIERS = {

    'secondary': theme => css`
        color: ${color('brand.neutral')(theme)};
        background: ${color('grey.50')(theme)};
        border: none;

        ::placeholder {
            color: ${color('brand.neutral')(theme)};
        }
    `,

    'error': theme => css`
        border: 1px solid ${color('red.500')(theme)};
        color: ${color('red.500')(theme)};
    `,

}

export default styled.input`
    display: ${({ hidden }) => hidden ? 'none' : 'inline-flex'};
    position: relative;
    width: 100%;
    height: ${({ hidden }) => hidden ? '0' : 'auto'};
    border: 1px solid ${color('grey.50')};
    background: ${color('brand.secondary')};
    padding: 0.75rem 1.5rem;
    box-sizing: border-box;
    font-family: ${font('secondary')};
    font-size: ${fontSize('sm')};
    font-weight: ${fontWeight('semi-bold')};
    color: ${color('brand.primary')};
    appearance: none;
    outline: none;
    border-radius: ${borderRadius('base')};

    ::placeholder {
        color: ${color('brand.primary', 0.5)};
    }

    ${applyStyleModifiers(INPUT_MODIFIERS)};
`

