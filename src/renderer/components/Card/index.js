import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Card } from '@paper/layout/components'
import { Tag } from '@paper/layout/elements'

import File from '@paper/components/File'
import Dropdown from '@paper/components/Dropdown'

import { useOnClickOutside } from '@paper/hooks'

const dropdownItems = [
    {
        name: 'Edit',
        icon: faPen,
        handler: () => null,
    },
    {
        name: 'Delete',
        icon: faTrash,
        handler: () => null,
    },
]

export default () => {

    const dropdownRef = useRef()
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false)
    useOnClickOutside(dropdownRef, () => setIsDropdownOpen(false))

    return (
        <Card>
            <Card.Actions>
                <FontAwesomeIcon
                    icon={faEllipsisV}
                    fixedWidth={true}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
            </Card.Actions>
            {isDropdownOpen && (
                <Card.Dropdown>
                    <Dropdown ref={dropdownRef} items={dropdownItems} />
                </Card.Dropdown>
            )}
            <Card.Media>
                <File extension={'pdf'} showExtension={true} />
            </Card.Media>
            <Card.Title>Invoice 05/2020</Card.Title>
            <Card.Subtitle>Added: 05-05-2020</Card.Subtitle>
            <Card.Tags>
                <Tag>Document</Tag>
                <Tag>Invoices</Tag>
                <Tag>Tag</Tag>
                <Tag>Tag</Tag>
                <Tag>Tag</Tag>
            </Card.Tags>
        </Card>
    )
}
