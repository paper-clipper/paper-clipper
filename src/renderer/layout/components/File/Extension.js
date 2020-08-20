import styled from 'styled-components'

export default styled.p`
    display: inline-flex;
    font-size: 0.75rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ color, theme }) => color || theme.colors.blackLighter};
    text-align: center;
    text-transform: uppercase;
    margin: 0.5rem;
`
