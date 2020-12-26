import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import * as moment from 'moment'

import { Card } from '@paper/layout/components'
import { Tag } from '@paper/layout/elements'

import File from '@paper/components/File'
import Dropdown from '@paper/components/Dropdown'

import { useOnClickOutside } from '@paper/hooks'

import { openFiles } from '@paper/actions/files'

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

export default ({
    name,
    files = [],
    createdAt,
    tags = [],
}) => {

    const dispatch = useDispatch()
    const dropdownRef = useRef()
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false)
    useOnClickOutside(dropdownRef, () => setIsDropdownOpen(false))

    const handleOnClick = () => {
        dispatch(openFiles(files))
            .then(console.log)
    }

    const handleOpenDropdown = e => {
        e.stopPropagation()
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <Card>
            <Card.Actions>
                <FontAwesomeIcon
                    icon={faEllipsisV}
                    fixedWidth={true}
                    onClick={handleOpenDropdown}
                />
            </Card.Actions>
            {isDropdownOpen && (
                <Card.Dropdown>
                    <Dropdown ref={dropdownRef} items={dropdownItems} />
                </Card.Dropdown>
            )}
            <Card.Media onClick={handleOnClick}>
                <File
                    extension={files.length === 1 ? files[0].extension : 'clip'}
                    showExtension={true}
                />
            </Card.Media>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>Added: {moment(createdAt).format('DD-MM-YYYY')}</Card.Subtitle>
            <Card.Tags>
                {tags.map(tag => (
                    <Tag key={tag.id}>{tag.name}</Tag>
                ))}
            </Card.Tags>
        </Card>
    )
}
