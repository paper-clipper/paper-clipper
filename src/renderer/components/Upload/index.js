import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { Upload } from '@paper/layout/components'
import { Button } from '@paper/layout/elements'

import File from '@paper/components/File'

export default ({
    name,
    path,
    extension,
    onRemove = () => null,
}) => {
    return (
        <Upload>
            <Upload.File>
                <File extension={extension} />
            </Upload.File>
            <Upload.Info>
                <Upload.Title>{name}</Upload.Title>
                <Upload.Meta>{path}</Upload.Meta>
            </Upload.Info>
            <Upload.Actions>
                <Upload.Action
                    onClick={onRemove}
                >
                    <FontAwesomeIcon icon={faTrash} fixedWidth />
                </Upload.Action>
            </Upload.Actions>
        </Upload>
    )
}
