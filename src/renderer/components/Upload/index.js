import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { Upload } from '@paper/layout/components'

import File from '@paper/components/File'

export default () => {
    return (
        <Upload>
            <Upload.File>
                <File extension={'pdf'} />
            </Upload.File>
            <Upload.Info>
                <Upload.Title>invoice_may_2020.pdf</Upload.Title>
                <Upload.Meta>/Users/dummy/Documents/Invoices/invoice_may_2020.pdf</Upload.Meta>
            </Upload.Info>
            <Upload.Actions>
                <Upload.Action>
                    <FontAwesomeIcon icon={faTrash} fixedWidth />
                </Upload.Action>
            </Upload.Actions>
        </Upload>
    )
}
