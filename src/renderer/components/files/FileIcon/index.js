import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import fileTypes from './file.types'

import { Flex } from '@paper-ui/layout'
import { Text, Icon } from '@paper-ui/typography'

export default ({
    extension,
    showExtension = false,
}) => {

    const { icon, color } = fileTypes[extension] || {
        color: '#a7a6ab',
        icon: faFile,
    }

    return (
        <Flex justify='center' align='center'>
            <Icon color={color}>
                <FontAwesomeIcon icon={icon} />
            </Icon>
            {showExtension && <Text color={color}>{extension}</Text>}
        </Flex>
    )
}
