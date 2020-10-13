import styled from 'styled-components'
import {
    borderRadius,
    colorSecondary90,
    backgroundBlur2,
    elevation1,
} from '@paper/layout/mixins'

import Title from './Title'
import Text from './Text'
import Actions from './Actions'

const Popup = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    border-radius: ${borderRadius};
    max-width: 381px;
    background: ${colorSecondary90};
    backdrop-filter: ${backgroundBlur2};
    box-shadow: ${elevation1};
`

Popup.Title = Title
Popup.Text = Text
Popup.Actions = Actions

export default Popup
