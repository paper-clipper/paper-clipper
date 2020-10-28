import styled from 'styled-components'
import {
    colorSecondaryDarker,
    borderRadius,
} from '@paper/layout/mixins'

import Input from './Input'
import Group from './Group'
import Dropdown from './Dropdown'
import List from './List'
import Item from './Item'
import Tags from './Tags'

const MultiSelectField = styled.div`
    display: inline-flex;
    position: relative;
    border: 1px solid ${colorSecondaryDarker};
    border-radius: ${borderRadius};
    width: 100%;
`

MultiSelectField.Input = Input
MultiSelectField.Group = Group
MultiSelectField.Dropdown = Dropdown
MultiSelectField.List = List
MultiSelectField.Item = Item
MultiSelectField.Tags = Tags

export default MultiSelectField
