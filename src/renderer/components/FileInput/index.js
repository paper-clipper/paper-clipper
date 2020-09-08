import React from 'react'

import { FileInput } from '@paper/layout/components'

export default () => {
    return (
        <FileInput>
            <FileInput.Label>
                <FileInput.Input
                    type="file"
                />
                <FileInput.Tooltip>
                    Drop files here to add or <FileInput.Action>browse file</FileInput.Action>
                </FileInput.Tooltip>
            </FileInput.Label>
        </FileInput>
    )
}
