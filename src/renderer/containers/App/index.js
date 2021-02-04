import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View } from '@paper-ui/view'
import { Margin } from '@paper-ui/layout'

import { Header } from '@paper/components/layout'
import { ClipCard, AddClip } from '@paper/components/clip'

import { fetchClips } from '@paper/store/clips/actions'

export default () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.clips)

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        dispatch(fetchClips())
    }, [])

    return (
        <View>
            <View.Header>
                <Header />
            </View.Header>
            <View.Content>
                {(data || []).map((clip, i) => (
                    <Margin key={i} all="3">
                        <ClipCard {...clip} />
                    </Margin>
                ))}
            </View.Content>
            {isModalOpen && <AddClip onClose={() => setIsModalOpen(false)} />}
        </View>
    )
}

