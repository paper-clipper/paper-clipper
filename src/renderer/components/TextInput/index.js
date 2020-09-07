import React, { forwardRef } from 'react'

import { TextInput } from '@paper/layout/components'

export default forwardRef(({
    name,
    placeholder,
    error,
    ...props
}, ref) => {

    return (
        <TextInput>
            <TextInput.Input
                id={name}
                name={name}
                ref={ref}
                placeholder={placeholder}
                modifiers={[ error && 'invalid' ]}
                {...props}
            />
        </TextInput>
    )
})
