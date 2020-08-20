import React from 'react'

import { App } from '../../layout/containers'
import { Header } from '../../layout/components'

import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'

export default () => {
    return (
        <App>
            <App.Header>
                <Header />
            </App.Header>
            <App.Sidebar>
                <Sidebar />
            </App.Sidebar>
            <App.Content>
                {new Array(20).fill(0)
                    .map((_, i) => (
                        <Card key={i} />
                    ))}
            </App.Content>
        </App>
    )
}

