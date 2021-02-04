import styled from 'styled-components'
import {
    color,
    zIndex,
} from '@paper-ui/mixins'

export default styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${color('black', 0.1)};
    z-index: ${zIndex('overlay')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
