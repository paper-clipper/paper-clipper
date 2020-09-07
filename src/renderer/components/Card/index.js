import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import { Card } from '../../layout/components'
import { Tag } from '../../layout/elements'

import File from '../File'

export default () => {
    return (
        <Card>
            <Card.Actions>
                <FontAwesomeIcon icon={faEllipsisV} fixedWidth />
            </Card.Actions>
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
