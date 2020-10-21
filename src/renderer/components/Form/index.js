import React from 'react'
import { Form } from '@paper/layout/components'

export default ({ children }) => {
    return (
        <Form>
            {children && React.Children.map(children, child => (
                <Form.Field>
                    {child}
                </Form.Field>
            ))}
        </Form>
    )
}
