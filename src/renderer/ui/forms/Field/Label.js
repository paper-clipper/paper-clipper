import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    color,
    font,
    fontSize,
    fontWeight,
    borderRadius,
} from '@paper-ui/mixins'

const LABEL_MODIFIERS = {

    'input': theme => css`
        display: inline-flex;
        position: relative;
        width: 100%;
        border: 1px solid ${color('grey.50')(theme)};
        background: ${color('brand.secondary')(theme)};
        padding: 3rem 1.5rem;
        box-sizing: border-box;
        font-family: ${font('secondary')(theme)};
        font-size: ${fontSize('sm')(theme)};
        font-weight: ${fontWeight('semi-bold')(theme)};
        color: ${color('brand.primary')(theme)};
        appearance: none;
        outline: none;
        border-radius: ${borderRadius('base')(theme)};
        /* pointer-events: none; */
    `,

    'error': theme => css`
        border-color: ${color('red.500')(theme)};
        color: ${color('red.500')(theme)};
    `,

    'align-center': () => css`
        justify-content: center;
        align-items: center;
    `,

    'border-dashed': theme => css`
        border: 1px dashed ${color('grey.50')(theme)};
    `,

}

export default styled.label`
    font-family: ${font('secondary')};
    font-size: ${fontSize('sm')};
    font-weight: ${fontWeight('semi-bold')};
    padding: 0.5rem 1rem 0.25rem 1rem;
    box-sizing: border-box;
    color: ${color('brand.primary')};
    ${applyStyleModifiers(LABEL_MODIFIERS)};
`
