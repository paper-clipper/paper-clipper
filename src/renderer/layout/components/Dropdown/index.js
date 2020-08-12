import styled from 'styled-components'

import List from './List'
import Item from './Item'
import Action from './Action'
import Icon from './Icon'

const Dropdown = styled.div`
    display: flex;
    position: absolute;
    width: 143px;
    height: 106px;
    top: -6px;
    right: -3px;
    box-shadow: 0 2px 8px rgba(90, 90, 90, 0.2);
    background: rgba(255, 255, 255, 0.70);
    backdrop-filter: blur(50px) brightness(0.95) opacity(100%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 0.75rem 0;
`

Dropdown.List = List
Dropdown.Item = Item
Dropdown.Action = Action
Dropdown.Icon = Icon

export default Dropdown
