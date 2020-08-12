import styled from 'styled-components'

export default styled.h4`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blackLighter};
`