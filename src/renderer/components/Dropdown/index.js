import React, { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Dropdown } from '../../layout/components'

export default forwardRef(({ items = [] }, ref) => {
    return (
        <Dropdown ref={ref}>
            <Dropdown.List>
                {items.map((item, i) => (
                    <Dropdown.Item key={i}>
                        <Dropdown.Action onClick={item.handler}>
                            {item.icon && (
                                <Dropdown.Icon>
                                    <FontAwesomeIcon icon={item.icon} fixedWidth />
                                </Dropdown.Icon>
                            )}
                            {item.name}
                        </Dropdown.Action>
                    </Dropdown.Item>
                ))}
            </Dropdown.List>
        </Dropdown>
    )
})
