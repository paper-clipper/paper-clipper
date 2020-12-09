import React, { forwardRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Field } from '@paper/layout/forms'
import { Icon } from '@paper/layout/elements'

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
                    <Icon p={0.75}>
                        <FontAwesomeIcon icon={faSearch} fixedWidth />
                    </Icon>
                </Field.Group>
            </Field.Group>
        </Field>
    )
})
