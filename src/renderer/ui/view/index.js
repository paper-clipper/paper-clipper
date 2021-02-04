import styled from 'styled-components'
import {
    color,
} from '@paper-ui/mixins'

import Header from './Header'
import Content from './Content'

export const View = styled.div`
    grid-area: header;
    display: grid;
    position: relative;
    width: 100%;
    height: 100%;
    background: ${color('brand.secondary')};
    grid-template-rows: 64px auto;
    grid-template-areas:
      "header"
      "content";
`

View.Header = Header
View.Content = Content

export default View
