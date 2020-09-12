import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Sidebar } from '@paper/layout/components'
import { Button } from '@paper/layout/elements'

import Navigation from '@paper/components/Navigation'

export default () => {
    return (
        <Sidebar>
            <Sidebar.Navigation>
                <Navigation />
            </Sidebar.Navigation>
            <Sidebar.Actions>
                <Button.Contained modifiers="icon">
                    <FontAwesomeIcon icon={faPlus} fixedWidth />
                </Button.Contained>
            </Sidebar.Actions>
        </Sidebar>
    )
}
