import React, { useState } from 'react'

import { Field } from '@paper/layout/forms'
import { Text, Anchor } from '@paper/layout/elements'

export default ({
    name,
    onChange = () => null,
}) => {

    // const [ isActive, setIsActive ] = useState(false)
    // const [ isLoaded, setIsLoaded ] = useState(false)
    // const [ file, setFile ] = useState(null)

    const handleOnChange = e => {

        const files = e.dataTransfer
            ? e.dataTransfer.files
            : e.target.files

        onChange(({
            target: {
                name,
                value: Array.from(files).map(file => ({
                    name: file.name,
                    path: file.path,
                    extension: file.name.split('.').pop(),
                })),
            },
        }))

    }

    const handleOnDrop = e => {
        e.preventDefault()
        // setIsActive(false)
        handleOnChange(e)
    }

    return (
        <Field>
            <Field.Label
                htmlFor={name}
                modifiers={[ 'input', 'border-dashed', 'align-center' ]}
                // onDragEnter={() => setIsActive(true)}
                // onDragLeave={() => setIsActive(false)}
                onDragOver={e => e.preventDefault()}
                onDrop={handleOnDrop}
            >
                <Field.Input
                    id={name}
                    name={name}
                    type="file"
                    multiple={true}
                    hidden={true}
                    onChange={handleOnChange}
                />
                <Text modifiers={[ 'secondary', 'semibold' ]}>Drop files here to add or <Anchor>browse file</Anchor></Text>
            </Field.Label>
        </Field>
    )
}
