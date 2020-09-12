import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons'

import { Navigation } from '@paper/layout/components'

export default () => {
    return (
        <Navigation>
            <Navigation.List>

                <Navigation.Item>
                    <Navigation.Link modifiers="active">
                        <FontAwesomeIcon icon={faThLarge} fixedWidth />
                    </Navigation.Link>
                </Navigation.Item>

                <Navigation.Item>
                    <Navigation.Link>
                        <FontAwesomeIcon icon={faThList} fixedWidth />
                    </Navigation.Link>
                </Navigation.Item>

            </Navigation.List>
        </Navigation>
    )
}
