import styled from 'styled-components'

export default styled.p`
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.black};
`
