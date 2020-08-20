import styled from 'styled-components'

import Header from './Header'
import Content from './Content'
import Sidebar from './Sidebar'

const App = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    grid-template-columns: auto 80px;
    grid-template-rows: auto auto;
    grid-template-areas:
      "header  sidebar"
      "content sidebar";
`

App.Header = Header
App.Content = Content
App.Sidebar = Sidebar

export default App
