import React, { forwardRef } from 'react'

import { Field } from '@paper/layout/forms'

export default forwardRef(({
    name,
    placeholder,
    error,
    helperText,
    ...props
}, ref) => {
    return (
        <Field>
            <Field.Input
                id={name}
                name={name}
                ref={ref}
                placeholder={placeholder}
                modifiers={[ error && 'error' ]}
                {...props}
            />
            {(error || helperText) && (
                <Field.Message modifiers={[ error && 'error' ]}>
                    {error || helperText}
                </Field.Message>
            )}
        </Field>
    )
})
