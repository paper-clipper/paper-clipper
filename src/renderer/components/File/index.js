import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import fileTypes from './file.types'

import { File } from '../../layout/components'

export default ({
    extension,
}) => {
    
    const { icon, color, title } = fileTypes[extension] || {
        title: 'xyz',
        icon: faFile,
        color: '#a7a6ab',
    }

    return (
        <File>
            <File.Icon color={color}>
                <FontAwesomeIcon icon={icon} fixedWidth />
            </File.Icon>
            <File.Extension color={color}>{title}</File.Extension>
        </File>
    )
}