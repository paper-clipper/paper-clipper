import styled from 'styled-components'
import {
    font,
    fontWeight,
    fontSize,
    color,
} from '@paper-ui/mixins'

export default styled.li`
    display: inline-flex;
    align-items: center;
    font-family: ${font('secondary')};
    font-weight: ${fontWeight('semi-bold')};
    font-size: ${fontSize('md')};
    color: ${color('brand.primary')};
    cursor: pointer;
    min-height: 32px;
    transition: background-color 200ms ease-in-out;

    &:hover {
        background: ${color('brand.primary', 0.1)};
    }

    &:active {
        background: ${color('brand.primary', 0.1)};
    }
`
