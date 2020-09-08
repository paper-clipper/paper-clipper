import styled from 'styled-components'

export default styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px dashed ${({ theme }) => theme.colors.whiteDarker};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
    pointer-events: none;
`
