import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fileTypes from './file.types'

import { File } from '@paper/layout/components'

export default ({
    extension,
    showExtension = false,
}) => {

    const { icon, title, color } = fileTypes[extension] || {
        title: 'xyz',
        color: '#a7a6ab',
    }

    return (
        <File>
            <File.Icon color={color}>
               <FontAwesomeIcon icon={icon} />
            </File.Icon>
            {showExtension && <File.Extension color={color}>{title}</File.Extension>}
        </File>
    )
}
