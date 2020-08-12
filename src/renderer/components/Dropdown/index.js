import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Dropdown } from '../../layout/components'

export default () => {
    return (
        <Dropdown>
            <Dropdown.List>
                <Dropdown.Item>
                    <Dropdown.Action>
                        <Dropdown.Icon>
                            <FontAwesomeIcon icon={faPen} fixedWidth />
                        </Dropdown.Icon>
                        Edit
                    </Dropdown.Action>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Action>
                        <Dropdown.Icon>
                            <FontAwesomeIcon icon={faTrash} fixedWidth />
                        </Dropdown.Icon>
                        Delete
                    </Dropdown.Action>
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    )
}
