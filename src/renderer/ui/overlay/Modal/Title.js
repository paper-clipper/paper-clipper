import styled from 'styled-components'
import {
    font,
    color,
    fontSize,
    fontWeight,
    lineHeight,
} from '@paper-ui/mixins'

export default styled.h4`
    font-family: ${font('secondary')};
    color: ${color('brand.primary')};
    font-size: ${fontSize('lg')};
    font-weight: ${fontWeight('bold')};
    line-height: ${lineHeight('shorter')};
`
