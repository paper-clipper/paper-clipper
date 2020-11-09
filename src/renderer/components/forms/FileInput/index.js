import React, { useState } from 'react'

import { Field } from '@paper/layout/forms'
import { Text, Anchor } from '@paper/layout/elements'

export default ({
    name,
    onFile = () => null,
}) => {

    const [ isActive, setIsActive ] = useState(false)
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ file, setFile ] = useState(null)

    const handleOnChange = e => {

        const reader = new FileReader()
        const file = e.dataTransfer
            ? e.dataTransfer.files[0]
            : e.target.files[0]

        console.log(file)

        reader.onload = () => {
            setFile(reader.result)
            setIsLoaded(true)
            onFile(({ target: { name, value: reader.result } }))
        }

        reader.readAsDataURL(file)

    }

    const handleOnDrop = e => {
        e.preventDefault()
        setIsActive(false)
        handleOnChange(e)
    }

    return (
        <Field>
            <Field.Label
                modifiers={[ 'input', 'border-dashed', 'align-center' ]}
                onDragEnter={() => setIsActive(true)}
                onDragLeave={() => setIsActive(false)}
                onDragOver={e => e.preventDefault()}
                onDrop={handleOnDrop}
            >
                <Field.Input
                    type="file"
                    hidden={true}
                    onChange={handleOnChange}
                />
                <Text modifiers={[ 'secondary', 'semibold' ]}>Drop files here to add or <Anchor>browse file</Anchor></Text>
            </Field.Label>
        </Field>
    )
}
