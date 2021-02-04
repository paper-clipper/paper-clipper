import React from 'react'

import { Overlay, Modal as StyledModal } from '@paper-ui/overlay'

import Portal from '../Portal'
import { useLockBodyScroll } from '@paper/hooks'

const Modal = ({ id, children }) => {
    useLockBodyScroll()

    return (
        <Portal id={id}>
            <StyledModal>
                {children}
            </StyledModal>
            <Overlay />
        </Portal>
    )
}

Modal.Header = StyledModal.Header
Modal.Title = StyledModal.Title
Modal.Subtitle = StyledModal.Subtitle
Modal.Actions = StyledModal.Actions
Modal.Content = StyledModal.Content
Modal.Footer = StyledModal.Footer

export default Modal
