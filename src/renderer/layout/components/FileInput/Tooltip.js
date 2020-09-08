import styled from 'styled-components'

export default styled.p`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
`
