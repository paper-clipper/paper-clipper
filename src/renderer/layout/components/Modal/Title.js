import styled from 'styled-components'

export default styled.h4`
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.25;
`
