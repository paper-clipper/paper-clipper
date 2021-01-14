import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { App } from '@paper/layout/containers'

import Header from '@paper/components/Header'
import Sidebar from '@paper/components/Sidebar'
import FileCard from '@paper/components/core/FileCard'

import { fetchClips } from '@paper/actions'

export default () => {

    const { loading, error, data } = useSelector(state => state.clips)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchClips())
    }, [])

    return (
        <App>
            <App.Header>
                <Header />
            </App.Header>
            <App.Sidebar>
                <Sidebar />
            </App.Sidebar>
            <App.Content>
                {(data || []).map((clip, i) => (
                    <FileCard key={i} {...clip} />
                ))}
            </App.Content>
        </App>
    )
}

