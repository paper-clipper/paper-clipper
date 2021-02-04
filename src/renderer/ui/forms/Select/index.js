import styled from 'styled-components'

import List from './List'
import Item from './Item'

const Select = styled.div`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    display: flex;
    z-index: 2;
`

Select.List = List
Select.Item = Item

export default Select
