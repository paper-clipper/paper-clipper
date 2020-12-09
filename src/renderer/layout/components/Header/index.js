import styled from 'styled-components'
import {
    colorSecondary90,
    backgroundBlur2,
} from '@paper/layout/mixins'

import Search from './Search'

const Header = styled.header`
    width: 100%;
    height: 100%;
    background: ${colorSecondary90};
    backdrop-filter: ${backgroundBlur2};
    display: flex;
    justify-content: center;
    align-items: center;
`

Header.Search = Search

export default Header
