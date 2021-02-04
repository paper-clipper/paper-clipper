import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import {
    fontSize,
} from '@paper-ui/mixins'

const ICON_MODIFIERS = {

    'xs': (theme) => css`
        font-size: ${fontSize('xs')(theme)};
    `,

    'sm': (theme) => css`
        font-size: ${fontSize('sm')(theme)};
    `,

    'action': () => css`
        cursor: pointer;
    `,

}

export default styled.div`
    ${applyStyleModifiers(ICON_MODIFIERS)};
`
