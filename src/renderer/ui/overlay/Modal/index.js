import styled from 'styled-components'
import {
    borderRadius,
    color,
    backgroundBlur,
    elevation,
    zIndex,
} from '@paper-ui/mixins'

import Header from './Header'
import Title from './Title'
import Subtitle from './Subtitle'
import Content from './Content'
import Footer from './Footer'
import Actions from './Actions'

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: ${borderRadius('base')};
    width: 724px;
    max-height: 95%;
    overflow-y: auto;
    background: ${color('brand.secondary', 0.9)};
    backdrop-filter: ${backgroundBlur('base')};
    box-shadow: ${elevation('base')};
    z-index: ${zIndex('modal')};
`

Modal.Header = Header
Modal.Actions = Actions
Modal.Title = Title
Modal.Subtitle = Subtitle
Modal.Content = Content
Modal.Footer = Footer

export default Modal
