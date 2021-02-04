import styled from 'styled-components'
import {
    zIndex,
} from '@paper-ui/mixins'

export default styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 64px;
    background: transparent;
    z-index: ${zIndex('docked')};
    -webkit-user-select: none;
    -webkit-app-region: drag;
`
