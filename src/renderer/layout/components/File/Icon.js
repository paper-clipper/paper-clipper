import styled from 'styled-components'

export default styled.span`
    display: inline-flex;
    font-size: 4.125rem;
    color: ${({ color, theme }) => color || theme.colors.blackLighter};
    text-align: center;
`