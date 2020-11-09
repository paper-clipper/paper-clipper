import styled from 'styled-components'
import {
    colorPrimary,
    fontSecondary,
} from '@paper/layout/mixins'

export default styled.a`
    color: ${colorPrimary};
    font-family: ${fontSecondary};
    text-decoration: underline;
    font-size: 0.75rem;
    cursor: pointer;
`
