import styled from 'styled-components'
import {
    font,
    color,
    fontSize,
    fontWeight,
    lineHeight,
} from '@paper-ui/mixins'

export default styled.h6`
    font-family: ${font('secondary')};
    color: ${color('brand.primary', 0.5)};
    font-size: ${fontSize('sm')};
    font-weight: ${fontWeight('normal')};
    line-height: ${lineHeight('base')};
`
