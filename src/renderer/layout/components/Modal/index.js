import styled from 'styled-components'
import {
    borderRadius,
    colorSecondary90,
    backgroundBlur2,
    elevation1,
} from '@paper/layout/mixins'

import Header from './Header'
import Title from './Title'
import Subtitle from './Subtitle'
import Content from './Content'
import Footer from './Footer'
import Actions from './Actions'

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: ${borderRadius};
    width: 724px;
    background: ${colorSecondary90};
    backdrop-filter: ${backgroundBlur2};
    box-shadow: ${elevation1};
`

Modal.Header = Header
Modal.Actions = Actions
Modal.Title = Title
Modal.Subtitle = Subtitle
Modal.Content = Content
Modal.Footer = Footer

export default Modal
