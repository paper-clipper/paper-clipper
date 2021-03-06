import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View } from '@paper-ui/view'
import { Flex, Margin } from '@paper-ui/layout'
import { Text } from '@paper-ui/typography'
import { Image } from '@paper-ui/misc'

import introSplashScreen from '@paper/assets/images/intro-splash-screen.svg'
import emptySearchResults from '@paper/assets/images/empty-search-results.svg'

import { Header } from '@paper/components/layout'

import {
    ClipCard,
    AddClipModal,
    EditClipModal,
    DeleteClipPopup,
} from '@paper/components/clip'
import {
    fetchClips,
    deleteClip,
    openAddClipModal,
    closeAddClipModal,
    closeEditClipModal,
    closeDeleteClipPopup,
} from '@paper/store/clips/actions'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchClips())
    }, [])

    const handleOnFileDrop = (event) => {
        const files = event.dataTransfer.files
        if (files.length > 0) {
            dispatch(openAddClipModal({
                files: Array.from(files).map(file => ({
                    name: file.name,
                    path: file.path,
                    extension: file.name.split('.').pop(),
                })),
            }))
        }
    }

    return (
        <>
            <View>
                <View.Header>
                    <Header />
                </View.Header>
                <View.Content
                    onDragOver={e => e.preventDefault()}
                    onDrop={handleOnFileDrop}
                >
                    <AppContent />
                </View.Content>
            </View>
            <AppModals />
        </>
    )
}

const AppContent = () => {
    const { search, data } = useSelector(state => state.clips)

    if (data.length === 0) {
        return (
            <Flex modifiers={[ 'full', 'center', 'column' ]}>
                {!search ? (
                    <>
                        <Image src={introSplashScreen} width='350px' />
                        <Text modifiers={[ 'font-secondary', 'lg', 'semi-bold' ]}>Drag and Drop your first file 🤟🏻</Text>
                        <Text modifiers={[ 'font-secondary', 'md', 'neutral' ]}>and start organizing!</Text>
                    </>
                ) : (
                    <>
                        <Image src={emptySearchResults} width='350px' />
                        <Text modifiers={[ 'font-secondary', 'lg', 'semi-bold' ]}>No files found</Text>
                        <Text modifiers={[ 'font-secondary', 'md', 'neutral' ]}>Maybe try different search query</Text>
                    </>
                )}
            </Flex>
        )
    }

    return (data || []).map((clip, i) => (
        <Margin key={i} all="3">
            <ClipCard {...clip} />
        </Margin>
    ))
}

const AppModals = () => {

    const dispatch = useDispatch()
    const {
        addClipModal,
        editClipModal,
        deleteClipPopup,
    } = useSelector(state => state.clips)

    return (
        <>
            {addClipModal.isOpen && (
                <AddClipModal
                    onClose={() => dispatch(closeAddClipModal())}
                />
            )}
            {editClipModal.isOpen && (
                <EditClipModal
                    onClose={() => dispatch(closeEditClipModal())}
                />
            )}
            {deleteClipPopup.isOpen && (
                <DeleteClipPopup
                    onCancel={() => dispatch(closeDeleteClipPopup())}
                    onDelete={() => {
                        dispatch(closeDeleteClipPopup())
                        dispatch(deleteClip({ id: deleteClipPopup.clip.id }))
                    }}
                />
            )}
        </>
    )
}


export default App
