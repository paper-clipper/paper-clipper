import React from 'react'

import { Header } from '@paper-ui/layout'

import Search from './Search'

export default () => {
    return (
        <Header>
            <Header.Search>
                <Search />
            </Header.Search>
        </Header>
    )
}
