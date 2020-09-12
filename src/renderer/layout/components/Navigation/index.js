import styled from 'styled-components'

import List from './List'
import Item from './Item'
import Link from './Link'

const Navigation = styled.nav`
    width: 100%;
    display: flex;
`

Navigation.List = List
Navigation.Item = Item
Navigation.Link = Link

export default Navigation
