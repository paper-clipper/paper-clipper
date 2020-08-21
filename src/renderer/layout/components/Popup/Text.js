import styled from 'styled-components'

export default styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.blackLighter};
    font-family: ${({ theme }) => theme.fonts.secondary};
    line-height: 1.75;
    font-weight: 400;
    margin: 1rem 0;
`
