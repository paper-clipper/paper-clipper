import styled from 'styled-components'
import {
    colorSecondaryDarker,
    borderRadius,
} from '@paper/layout/mixins'

import Input from './Input'
import Group from './Group'
import List from './List'
import Item from './Item'

const MultiSelectField = styled.div`
    display: inline-flex;
    position: relative;
    border: 1px solid ${colorSecondaryDarker};
    border-radius: ${borderRadius};
    width: 100%;
`

MultiSelectField.Input = Input
MultiSelectField.Group = Group
MultiSelectField.List = List
MultiSelectField.Item = Item

export default MultiSelectField
