import styled from 'styled-components'

export default styled.span`
    display: inline-flex;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 0.675rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.whiteDarker};
    padding: 0.5rem 0.75rem;
    margin: 2px;
    border-radius: 5rem;
`