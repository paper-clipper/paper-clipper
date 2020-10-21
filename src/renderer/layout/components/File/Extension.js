import styled from 'styled-components'
import {
    colorNeutral,
    fontSecondary,
} from '@paper/layout/mixins'

export default styled.p`
    display: inline-flex;
    font-size: 0.75rem;
    font-weight: 700;
    font-family: ${fontSecondary};
    color: ${({ color, theme }) => color || colorNeutral(theme)};
    text-align: center;
    text-transform: uppercase;
    margin: 0.5rem;
`
