import React from 'react'

import { Header } from '@paper/layout/components'

import Search from '@paper/components/Search'

export default () => {
    return (
        <Header>
            <Search onSearch={console.log} />
        </Header>
    )
}
