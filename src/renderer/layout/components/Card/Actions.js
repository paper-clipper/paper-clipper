import styled from 'styled-components'

export default styled.div`
    position: absolute;
    top: 12px;
    right: 8px;
    display: flex;
    flex-direction: row-reverse;
    color: ${({ theme }) => theme.colors.blackLighter};
    cursor: pointer;
`