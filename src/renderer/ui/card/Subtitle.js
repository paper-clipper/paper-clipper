import styled from 'styled-components'
import {
    font,
    fontSize,
    fontWeight,
    color,
} from '@paper-ui/mixins'

export default styled.h4`
    font-family: ${font('primary')};
    font-size: ${fontSize('sm')};
    font-weight: ${fontWeight('normal')};
    color: ${color('brand.primary', 0.5)};
`
