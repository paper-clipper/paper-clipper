import styled from 'styled-components'
import {
    font,
    fontSize,
    fontWeight,
    lineHeight,
    color,
} from '@paper-ui/mixins'

export default styled.h3`
    font-family: ${font('primary')};
    font-size: ${fontSize('md')};
    font-weight: ${fontWeight('bold')};
    line-height: ${lineHeight('base')};
    color: ${color('brand.primary')};
`
