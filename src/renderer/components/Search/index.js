import React, { forwardRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Search } from '@paper/layout/components'

export default forwardRef(({
    name = 'search',
    onSearch = () => null,
    ...props
}, ref) => {

    const [ searchInput, setSearchInput ] = useState('')

    const handleChange = event => {
        const { value } = event.target
        setSearchInput(value)
        onSearch(value)
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
