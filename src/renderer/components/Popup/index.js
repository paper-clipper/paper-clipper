import React from 'react'

import Portal from '../Portal'

import { Popup } from '@paper/layout/components'
import { Overlay, Button } from '@paper/layout/elements'

export default () => {
    return (
        <Portal>
            <Overlay>
                <Popup>
                    <Popup.Title>Remove this file? {'🗑'}</Popup.Title>
                    <Popup.Text>Remember file will be only removed from the application and it steel exisit on the hard drive.</Popup.Text>
                    <Popup.Actions>
                        <Button.Text modifiers="secondary">Cancel</Button.Text>
                        <Button.Text>Remove</Button.Text>
                    </Popup.Actions>
                </Popup>
            </Overlay>
        </Portal>
    )
}
