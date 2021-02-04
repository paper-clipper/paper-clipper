import styled from 'styled-components'
import {
    borderRadius,
    color,
    backgroundBlur,
    elevation,
    zIndex,
} from '@paper-ui/mixins'

import Title from './Title'
import Text from './Text'
import Actions from './Actions'

const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 1rem;
    border-radius: ${borderRadius('base')};
    max-width: 381px;
    background: ${color('brand.secondary', 0.9)};
    backdrop-filter: ${backgroundBlur('base')};
    box-shadow: ${elevation('base')};
    z-index: ${zIndex('popover')};
`

Popup.Title = Title
Popup.Text = Text
Popup.Actions = Actions

export default Popup
