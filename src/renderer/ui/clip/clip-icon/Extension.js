import styled from 'styled-components'
import {
    font,
    fontSize,
    fontWeight,
    color,
} from '@paper-ui/mixins'

export default styled.p`
    display: inline-flex;
    font-size: ${fontSize('sm')};
    font-weight: ${fontWeight('bold')};
    font-family: ${font('secondary')};
    color: ${({ color: c, theme }) => c || color('brand.neutral')(theme)};
    text-align: center;
    text-transform: uppercase;
`
