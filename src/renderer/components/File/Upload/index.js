import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { Upload } from '@paper-ui/file'
import { Button } from '@paper-ui/button'
import { Text, Icon } from '@paper-ui/typography'

import ClipIcon from '@paper/components/clip/ClipIcon'

export default ({
    name,
    path,
    extension,
    onRemove = () => null,
}) => {
    return (
        <Upload>
            <Upload.File>
                <ClipIcon extension={extension} size='3xl' />
            </Upload.File>
            <Upload.Info>
                <Text modifiers={[ 'sm', 'semi-bold', 'font-secondary' ]}>{name}</Text>
                <Text modifiers={[ 'xs', 'font-secondary', 'light', 'line-height-shorter']}>{path}</Text>
            </Upload.Info>
            <Upload.Actions>
                <Button.Icon onClick={onRemove} modifiers={'neutral'}>
                    <Icon
                        as={FontAwesomeIcon}
                        icon={faTrash}
                        fixedWidth
                    />
                </Button.Icon>
            </Upload.Actions>
        </Upload>
    )
}
