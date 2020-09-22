import styled from 'styled-components'

import Navigation from './Navigation'
import Actions from './Actions'

const Sidebar = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(50px) brightness(0.95) opacity(100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

Sidebar.Navigation = Navigation
Sidebar.Actions = Actions

export default Sidebar