import React from 'react'

import { Popup } from '@paper/components/overlay'
import { Button } from '@paper-ui/button'

export default ({
    onCancel = () => null,
    onDelete = () => null,
}) => {
    return (
        <Popup>
            <Popup.Title>Delete this file? {'🗑️'}</Popup.Title>
            <Popup.Text>Remember file will be only deleted from the application and it steel exists on the hard drive.</Popup.Text>
            <Popup.Actions>
                <Button.Text modifiers="secondary" onClick={onCancel}>Cancel</Button.Text>
                <Button.Text onClick={onDelete}>Delete</Button.Text>
            </Popup.Actions>
        </Popup>
    )
}
