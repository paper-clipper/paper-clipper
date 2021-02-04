import React from 'react'

import { Popup } from '@paper/components/overlay'
import { Button } from '@paper-ui/button'

export default () => {
    return (
        <Popup>
            <Popup.Title>Remove this file? {'🗑️'}</Popup.Title>
            <Popup.Text>Remember file will be only removed from the application and it steel exists on the hard drive.</Popup.Text>
            <Popup.Actions>
                <Button.Text modifiers="secondary">Cancel</Button.Text>
                <Button.Text>Remove</Button.Text>
            </Popup.Actions>
        </Popup>
    )
}
