import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View } from '@paper-ui/view'
import { Margin } from '@paper-ui/layout'

import { Header } from '@paper/components/layout'
import { ClipCard, AddClipModal } from '@paper/components/clip'

import { fetchClips, openAddClipModal, closeAddClipModal } from '@paper/store/clips/actions'

export default () => {

    const dispatch = useDispatch()
    const { data, addClipModal } = useSelector(state => state.clips)

    useEffect(() => {
        dispatch(fetchClips())
    }, [])

    const handleOnFileDrop = (event) => {
        const files = event.dataTransfer.files
        dispatch(openAddClipModal({
            files: Array.from(files).map(file => ({
                name: file.name,
                path: file.path,
                extension: file.name.split('.').pop(),
            })),
        }))
    }

    return (
        <View>
            <View.Header>
                <Header />
            </View.Header>
            <View.Content
                onDragOver={e => e.preventDefault()}
                onDrop={handleOnFileDrop}
            >
                {(data || []).map((clip, i) => (
                    <Margin key={i} all="3">
                        <ClipCard {...clip} />
                    </Margin>
                ))}
            </View.Content>
            {addClipModal.isOpen && <AddClipModal onClose={() => dispatch(closeAddClipModal())} />}
        </View>
    )
}

