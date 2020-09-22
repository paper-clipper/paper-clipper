import styled from 'styled-components'

import Header from './Header'
import Title from './Title'
import Subtitle from './Subtitle'
import Content from './Content'
import Footer from './Footer'

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 12px;
    width: 787px;
    height: 473px;
    background: rgba(255, 255, 255, 0.90);
    backdrop-filter: blur(50px) brightness(100%) opacity(100%);
    box-shadow: ${({ theme }) => theme.elevations[0]};
`

Modal.Header = Header
Modal.Title = Title
Modal.Subtitle = Subtitle
Modal.Content = Content
Modal.Footer = Footer

export default Modal
