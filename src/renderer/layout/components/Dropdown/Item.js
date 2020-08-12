import styled from 'styled-components'

export default styled.li`
    display: inline-flex;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.black};
    min-height: 40px;
`
