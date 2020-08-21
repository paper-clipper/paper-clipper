import styled from 'styled-components'

export default styled.h5`
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1rem;
    font-weight: 700;
`
