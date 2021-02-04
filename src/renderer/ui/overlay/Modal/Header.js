import styled from 'styled-components'
import {
    color,
} from '@paper-ui/mixins'

export default styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    border-bottom: 1px solid ${color('grey.50')};
`
