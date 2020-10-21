import React, { forwardRef } from 'react'

import { TextField } from '@paper/layout/components'

export default forwardRef(({
    name,
    placeholder,
    error,
    ...props
}, ref) => {

    return (
        <TextField>
            <TextField.Input
                id={name}
                name={name}
                ref={ref}
                placeholder={placeholder}
                modifiers={[ error && 'invalid' ]}
                {...props}
            />
        </TextField>
    )
})
