import React from 'react'

import Portal from '../Portal'

import { Popup as StyledPopup, Overlay } from '@paper-ui/overlay'
import { useLockBodyScroll } from '@paper/hooks'

const Popup = ({ id, children }) => {
    useLockBodyScroll()

    return (
        <Portal id={id}>
            <StyledPopup>
                {children}
            </StyledPopup>
            <Overlay />
        </Portal>
    )
}

Popup.Title = StyledPopup.Title
Popup.Text = StyledPopup.Text
Popup.Actions = StyledPopup.Actions

export default Popup
