import styled from 'styled-components'
import {
    color,
    font,
    fontSize,
    fontWeight,
} from '@paper-ui/mixins'

export default styled.li`
    display: inline-flex;
    width: 100%;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    background: ${color('brand.secondary')};
    font-family: ${font('secondary')};
    color: ${color('brand.primary')};
    font-size: ${fontSize('sm')};
    font-weight: ${fontWeight('semi-bold')};
    cursor: pointer;
    transition: background-color 200ms ease-in-out;

    &:hover {
        background: ${color('grey.50')};
    }
`
