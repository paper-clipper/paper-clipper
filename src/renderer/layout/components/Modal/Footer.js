import styled from 'styled-components'
import {
    colorSecondaryDarker,
} from '@paper/layout/mixins'

export default styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    border-top: 1px solid ${colorSecondaryDarker};
`
