import React, { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Menu } from '@paper-ui/overlay'
import { Icon, Text } from '@paper-ui/typography'
import { Margin, Padding } from '@paper-ui/layout'

export default forwardRef(({ items = [] }, ref) => {
    return (
        <Menu ref={ref}>
            <Menu.List>
                {items.map((item, i) => (
                    <Menu.Item key={i}>
                        <Padding h="1" modifiers="full">
                            <Text as="a" onClick={item.handler} modifiers={[ 'sm', 'semi-bold', 'font-secondary', 'full' ]}>
                                {item.icon && (
                                    <Margin h="2.5">
                                        <Icon
                                            as={FontAwesomeIcon}
                                            icon={item.icon}
                                            fixedWidth
                                            modifiers={[ 'xs' ]}
                                        />
                                    </Margin>
                                )}
                                {item.name}
                            </Text>
                        </Padding>
                    </Menu.Item>
                ))}
            </Menu.List>
        </Menu>
    )
})
