import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import fileTypes from './file.types'

import { Margin } from '@paper-ui/layout'
import { ClipIcon } from '@paper-ui/clip'

export default ({
    extension,
    showExtension = false,
}) => {

    const { icon, color } = fileTypes[extension] || {
        color: '#a7a6ab',
        icon: faFile,
    }

    return (
        <ClipIcon>
            <ClipIcon.Icon
                as={FontAwesomeIcon}
                icon={icon}
                color={color}
                fixedWidth
            />
            {showExtension && (
                <Margin all="2" modifiers="inline-flex">
                     <ClipIcon.Extension color={color}>{extension}</ClipIcon.Extension>
                </Margin>
            )}
        </ClipIcon>
    )
}
