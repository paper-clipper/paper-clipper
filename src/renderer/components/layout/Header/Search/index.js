import React, { forwardRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Field } from '@paper-ui/forms'
import { Icon } from '@paper-ui/typography'

import { fetchClipsLike } from '@paper/store/clips/actions'

export default forwardRef(({
    name = 'search',
    ...props
}, ref) => {

    const [ searchInput, setSearchInput ] = useState('')
    const dispatch = useDispatch()

    const handleChange = event => {
        const { value } = event.target
        setSearchInput(value)
        dispatch(fetchClipsLike({ name: value, extension: value, tag: value }))
    }

    return (
        <Field>
            <Field.Group modifiers={[ 'secondary', 'append' ]}>
                <Field.Input
                    id={name}
                    name={name}
                    ref={ref}
                    placeholder="Search for files, tags, extensions…"
                    value={searchInput}
                    onChange={handleChange}
                    {...props}
                />
                <Field.Group modifiers={[ 'secondary', 'beside' ]}>
                    <Icon modifiers="sm" as={FontAwesomeIcon} icon={faSearch} fixedWidth />
                </Field.Group>
            </Field.Group>
        </Field>
    )
})
