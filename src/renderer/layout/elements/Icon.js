import styled from 'styled-components'
import {
    colorNeutral,
} from '@paper/layout/mixins'

export default styled.i`
    display: inline-flex;
    color: ${colorNeutral};
    font-size: 0.75rem;
    padding: ${({ p }) => p > -1 ? `${p}rem` : 'inherit'};
    box-sizing: border-box;
`
