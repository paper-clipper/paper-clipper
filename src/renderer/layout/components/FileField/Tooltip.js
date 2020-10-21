import styled from 'styled-components'
import {
    fontSecondary,
    colorPrimary50,
} from '@paper/layout/mixins'

export default styled.p`
    font-family: ${fontSecondary};
    font-size: 0.75rem;
    font-weight: 600;
    color: ${colorPrimary50};
    pointer-events: auto;
`
