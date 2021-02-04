import styled from 'styled-components'
import {
    color,
    font,
    fontSize,
    fontWeight,
} from '@paper-ui/mixins'

export default styled.h4`
    color: ${color('brand.primary')};
    font-family: ${font('secondary')};
    font-size: ${fontSize('lg')};
    font-weight: ${fontWeight('bold')};
    margin: 1rem;
`
