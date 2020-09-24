import styled from 'styled-components'
import {
    colorSecondary90,
    borderRadius,
    backgroundBlur2,
    elevation2,
} from '@paper/layout/mixins'

import List from './List'
import Item from './Item'
import Action from './Action'
import Icon from './Icon'

const Dropdown = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    box-shadow: ${elevation2};
    background: ${colorSecondary90};
    backdrop-filter: ${backgroundBlur2};
    border-radius: ${borderRadius};
    box-sizing: border-box;
    padding: 0.75rem 0;
`

Dropdown.List = List
Dropdown.Item = Item
Dropdown.Action = Action
Dropdown.Icon = Icon

export default Dropdown
