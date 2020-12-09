import React, { forwardRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Search } from '@paper/layout/components'

import { fetchClipsLike } from '@paper/actions'

export default forwardRef(({
    name = 'search',
    ...props
}, ref) => {

    const [ searchInput, setSearchInput ] = useState('')
    const dispatch = useDispatch()

    const handleChange = event => {
        const { value } = event.target
        setSearchInput(value)
        dispatch(fetchClipsLike({ name: value }))
    }

    return (
        <Search>
            <Search.Input
                id={name}
                name={name}
                ref={ref}
                placeholder="Search for files, tags, extensions…"
                value={searchInput}
                onChange={handleChange}
                {...props}
            />
            <Search.Icon>
                <FontAwesomeIcon icon={faSearch} fixedWidth />
            </Search.Icon>
        </Search>
    )
})
