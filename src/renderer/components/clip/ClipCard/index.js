import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import * as moment from 'moment'

import { ClipCard } from '@paper-ui/clip'
import { Tag } from '@paper-ui/misc'
import { Button } from '@paper-ui/button'
import { Margin } from '@paper-ui/layout'
import { Icon } from '@paper-ui/typography'

import ClipIcon from '../ClipIcon'
import { Menu } from '@paper/components/overlay'

import { useOnClickOutside } from '@paper/hooks'

import { openEditClipModal, openDeleteClipPopup } from '@paper/store/clips/actions'
import { openFiles } from '@paper/store/files/actions'

export default ({
    id,
    name,
    files = [],
    tags = [],
    createdAt,
}) => {

    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef()
    useOnClickOutside(menuRef, () => setIsMenuOpen(false))

    const menuItems = [
        {
            name: 'Edit',
            icon: faPen,
            handler: () => dispatch(openEditClipModal({
                id,
                name,
                files,
                tags,
            })),
        },
        {
            name: 'Delete',
            icon: faTrash,
            handler: () => dispatch(openDeleteClipPopup({ id })),
        },
    ]

    const handleOnClick = () => {
        dispatch(openFiles(files))
    }

    return (
        <ClipCard>
            <ClipCard.Actions>
                <Button.Icon
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    modifiers={['md', 'neutral']}
                >
                    <Icon
                        as={FontAwesomeIcon}
                        icon={faEllipsisV}
                        fixedWidth
                    />
                </Button.Icon>
            </ClipCard.Actions>
            {isMenuOpen && (
                <ClipCard.Menu>
                    <Menu ref={menuRef} items={menuItems} />
                </ClipCard.Menu>
            )}
            <ClipCard.Media onClick={handleOnClick}>
                <ClipIcon
                    extension={files.length === 1 ? files[0].extension : 'clip'}
                    showExtension={true}
                />
            </ClipCard.Media>
            <ClipCard.Title>{name}</ClipCard.Title>
            <ClipCard.Subtitle>Added: {moment(createdAt).format('DD-MM-YYYY')}</ClipCard.Subtitle>
            <ClipCard.Tags>
                {tags.map(tag => (
                    <Margin key={tag.id} h="0.5" v="1">
                        <Tag>{tag.name}</Tag>
                    </Margin>
                ))}
            </ClipCard.Tags>
        </ClipCard>
    )
}
