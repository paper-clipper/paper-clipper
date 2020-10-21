import styled from 'styled-components'
import {
    colorSecondaryDarker,
} from '@paper/layout/mixins'

export default styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    border-bottom: 1px solid ${colorSecondaryDarker};
`
