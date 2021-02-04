import styled from 'styled-components'
import {
    color,
    backgroundBlur,
} from '@paper-ui/mixins'

import Search from './Search'

export const Header = styled.header`
    width: 100%;
    height: 100%;
    background: ${color('brand.secondary', 0.9)};
    backdrop-filter: ${backgroundBlur('base')};
    display: flex;
    justify-content: center;
    align-items: center;
`

Header.Search = Search

export default Header
