import styled from 'styled-components'

export default styled.span`
    display: inline-flex;
    font-size: 100%;
    color: ${({ color, theme }) => color || theme.colors.blackLighter};
    text-align: center;
`
