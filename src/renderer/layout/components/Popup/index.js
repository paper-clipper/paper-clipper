import styled from 'styled-components'

import Title from './Title'
import Text from './Text'
import Actions from './Actions'

const Popup = styled.div`
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.90);
    backdrop-filter: blur(50px) brightness(100%) opacity(100%);
    box-shadow: ${({ theme }) => theme.elevations[0]};
`

Popup.Title = Title
Popup.Text = Text
Popup.Actions = Actions

export default Popup
