import styled from 'styled-components'

export default styled.h3`
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.black};
`