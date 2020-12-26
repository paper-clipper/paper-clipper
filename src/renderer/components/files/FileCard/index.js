import React from 'react'
import * as moment from 'moment'

import { Card } from '@paper-ui/card'
import { Tag } from '@paper-ui/misc'
import { Wrap, Flex } from '@paper-ui/layout'

import FileIcon from '../FileIcon'

export default ({
    name,
    files,
    createdAt,
    tags = [],
}) => {
    return (
        <Card>
            <Card.Actions></Card.Actions>
            <Flex justify='center' align='center'>
                <FileIcon
                    extension={files.length === 1 ? files[0].extension : 'clip'}
                    showExtension={true}
                />
            </Flex>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>Added: {moment(createdAt).format('DD-MM-YYYY')}</Card.Subtitle>
            <Wrap>
                {tags.map(tag => (
                    <Tag key={tag.id}>{tag.name}</Tag>
                ))}
            </Wrap>
        </Card>
    )
}
