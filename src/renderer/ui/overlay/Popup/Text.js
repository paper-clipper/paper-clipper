import styled from 'styled-components'
import {
    color,
    font,
    fontSize,
    fontWeight,
    lineHeight,
} from '@paper-ui/mixins'

export default styled.p`
    color: ${color('brand.primary', 0.5)};
    font-size: ${fontSize('sm')};
    font-family: ${font('secondary')};
    font-weight: ${fontWeight('normal')};
    line-height: ${lineHeight('taller')};
    margin: 0 1rem;
`
