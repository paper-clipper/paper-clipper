import styled from 'styled-components'
import {
    colorNeutral,
} from '@paper/layout/mixins'

export default styled.span`
    display: inline-flex;
    font-size: 100%;
    color: ${({ color, theme }) => color || colorNeutral(theme)};
    text-align: center;
`
