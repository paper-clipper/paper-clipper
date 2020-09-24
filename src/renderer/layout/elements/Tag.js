import styled from 'styled-components'
import {
    fontPrimary,
    colorPrimary,
    colorSecondaryDarker,
} from '@paper/layout/mixins'

export default styled.span`
    display: inline-flex;
    font-family: ${fontPrimary};
    font-size: 0.675rem;
    font-weight: bold;
    color: ${colorPrimary};
    box-sizing: border-box;
    background: ${colorSecondaryDarker};
    padding: 0.5rem 0.75rem;
    margin: 2px;
    border-radius: 5rem;
`
