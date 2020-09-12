import styled from 'styled-components'

export default styled.li`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0;

    :first-of-type {
        margin-top: 0;
    }

    :last-of-type {
        margin-bottom: 0;
    }
`
