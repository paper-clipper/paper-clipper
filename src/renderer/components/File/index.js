import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import fileTypes from './file.types'

import { File } from '@paper/layout/components'

export default ({
    extension,
    showExtension = false,
}) => {

    const { icon, color } = fileTypes[extension] || {
        color: '#a7a6ab',
        icon: faFile,
    }

    return (
        <File>
            <File.Icon color={color}>
               <FontAwesomeIcon icon={icon} />
            </File.Icon>
            {showExtension && <File.Extension color={color}>{extension}</File.Extension>}
        </File>
    )
}
