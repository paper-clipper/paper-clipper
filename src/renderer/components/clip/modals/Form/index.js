import React, { useEffect } from 'react'
import { useFormik } from 'formik'

import { Form } from '@paper-ui/forms'
import { Margin } from '@paper-ui/layout'


import { Upload } from '@paper/components/file'
import { TextInput, MultiSelectInput, FileInput } from '@paper/components/forms'

export default ({
    initialValues,
    submitForm,
    onSubmit = () => null,
}) => {
    const validate = values => {
        const { name, tags, files } = values
        const errors = {}

        if (!name) {
            errors.name = 'Required'
        } else if (name.length < 3) {
            errors.name = 'Name must be at least 3 characters long'
        }

        if (tags.length === 0) {
            errors.tags = 'Required'
        }

        if (files.length === 0) {
            errors.files = 'Required'
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: initialValues.name || '',
            tags: initialValues.tags || [],
            files: initialValues.files || [],
        },
        validate,
        onSubmit,
    })

    useEffect(() => {
        if (submitForm) {
            formik.submitForm()
        }
    }, [ submitForm ])

    const handleOnTagChange = event => {
        const { name, value } = event.target
        const { tags } = formik.values
        formik.handleChange({
            target: {
                name,
                value: value.map(item => ({
                    name: item,
                    ...(tags.find(tag => tag.name === item) || {}),
                })),
            },
        })
    }

    const handleOnFileChange = event => {
        const { name, value } = event.target
        const { files } = formik.values
        formik.handleChange({
            target: {
                name,
                value: [ ...value, ...files ],
            },
        })
    }

    const handleRemoveFile = file => {
        const { files } = formik.values
        formik.handleChange({
            target: {
                name: 'files',
                value: files.filter(f => f.path !== file.path),
            },
        })
    }

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Margin v="1">
                    <TextInput
                        name="name"
                        placeholder="File name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={formik.touched.name && formik.errors.name}
                    />
                </Margin>
                <Margin v="1">
                    <MultiSelectInput
                        name="tags"
                        placeholder="Tags"
                        onChange={handleOnTagChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tags.map(tag => tag.name)}
                        error={formik.touched.tags && formik.errors.tags}
                    />
                </Margin>
                <Margin v="1">
                    <FileInput
                        name="files"
                        onChange={handleOnFileChange}
                        value={formik.values.files}
                        error={formik.touched.files && formik.errors.files}
                    />
                </Margin>
            </Form>
            {(formik.values.files || []).map((item, index) => (
                <Margin v="1" key={index}>
                    <Upload
                        {...item}
                        onRemove={() => handleRemoveFile(item)}
                    />
                </Margin>
            ))}
        </>
    )
}
