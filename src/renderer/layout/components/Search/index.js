import styled from 'styled-components'

import Input from './Input'
import Icon from './Icon'

const Search = styled.div`
    display: inline-flex;
    flex-direction: row;
    height: 32px;
    width: 512px;
`

Search.Input = Input
Search.Icon = Icon

export default Search
