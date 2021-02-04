import styled from 'styled-components'
import {
    elevation,
    borderRadius,
    color,
    backgroundBlur,
} from '@paper-ui/mixins'

import List from './List'
import Item from './Item'

const Menu = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    box-shadow: ${elevation('elevated')};
    background: ${color('brand.secondary', 0.9)};
    backdrop-filter: ${backgroundBlur('base')};
    border-radius: ${borderRadius('base')};
    box-sizing: border-box;
    padding: 0.75rem 0;
`

Menu.List = List
Menu.Item = Item

export default Menu
