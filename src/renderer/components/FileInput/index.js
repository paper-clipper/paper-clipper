import React from 'react'

import { FileField } from '@paper/layout/components'

export default () => {
    return (
        <FileField>
            <FileField.Label>
                <FileField.Input
                    type="file"
                />
                <FileField.Tooltip>
                    Drop files here to add or <FileField.Action>browse file</FileField.Action>
                </FileField.Tooltip>
            </FileField.Label>
        </FileField>
    )
}
