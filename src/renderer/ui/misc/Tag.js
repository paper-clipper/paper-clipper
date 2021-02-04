import styled from 'styled-components'
import {
    font,
    fontSize,
    fontWeight,
    color,
    borderRadius,
} from '@paper-ui/mixins'

export default styled.span`
    display: inline-flex;
    font-family: ${font('primary')};
    font-size: ${fontSize('xs')};
    font-weight: ${fontWeight('bold')};
    color: ${color('brand.primary')};
    box-sizing: border-box;
    background: ${color('grey.50')};
    padding: 0.5rem 0.75rem;
    border-radius: ${borderRadius('pill')};
    user-select: none;
    outline: none;
`
