import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    color,
    font,
    fontSize,
    fontWeight,
    lineHeight,
} from '@paper-ui/mixins'

const TEXT_MODIFIERS = {

    'line-height-shorter': (theme) => css`
        line-height: ${lineHeight('shorter')(theme)};
    `,

    'light': (theme) => css`
        color: ${color('brand.primary', 0.5)(theme)};
    `,

    'neutral': (theme) => css`
        color: ${color('brand.neutral')(theme)};
    `,

    'semi-bold': (theme) => css`
        font-weight: ${fontWeight('semi-bold')(theme)};
    `,

    'bold': (theme) => css`
        font-weight: ${fontWeight('bold')(theme)};
    `,

    'font-primary': (theme) => css`
        font-family: ${font('primary')(theme)};
    `,

    'font-secondary': (theme) => css`
        font-family: ${font('secondary')(theme)};
    `,

    'xs': (theme) => css`
        font-size: ${fontSize('xs')(theme)};
    `,

    'sm': (theme) => css`
        font-size: ${fontSize('sm')(theme)};
    `,

    'lg': (theme) => css`
        font-size: ${fontSize('lg')(theme)};
    `,

    'full': () => css`
        width: 100%;
        height: 100%;
        display: inline-flex;
    `,

    'underline': () => css`
        text-decoration: underline;
    `,

    'action': () => css`
        cursor: pointer;
    `,

}

export default styled.p`
    color: ${color('brand.primary')};
    font-family: ${font('primary')};
    font-size: ${fontSize('md')};
    font-weight: ${fontWeight('normal')};
    line-height: ${lineHeight('base')};
    ${applyStyleModifiers(TEXT_MODIFIERS)}
`
