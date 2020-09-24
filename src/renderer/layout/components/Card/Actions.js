import styled from 'styled-components'
import {
    colorNeutral,
} from '@paper/layout/mixins'

export default styled.div`
    position: absolute;
    top: 12px;
    right: 8px;
    display: flex;
    flex-direction: row-reverse;
    font-size: 0.875rem;
    color: ${colorNeutral};
    cursor: pointer;
`
