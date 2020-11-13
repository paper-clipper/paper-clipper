import React from 'react'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Modal } from '@paper/layout/components'
import { Form } from '@paper/layout/forms'
import { Overlay, Button } from '@paper/layout/elements'
import { TextInput, MultiSelectInput, FileInput } from '@paper/components/forms'

import Portal from '@paper/components/Portal'
import Upload from '@paper/components/Upload'

export default ({
    onClose = () => null,
}) => {

    const formik = useFormik({
        initialValues: {
            fileName: '',
            tags: [],
            files: [],
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <Portal>
            <Overlay>
                <Modal>
                    <Modal.Header>
                        <Modal.Actions onClick={onClose}>
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    fixedWidth
                                />
                        </Modal.Actions>
                        <Modal.Title>Add file</Modal.Title>
                        <Modal.Subtitle>Add new file to your library</Modal.Subtitle>
                    </Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={formik.handleSubmit}>
                            <TextInput
                                name="fileName"
                                placeholder="File name"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                            <MultiSelectInput
                                name="tags"
                                placeholder="Tags"
                                onChange={formik.handleChange}
                                value={formik.values.tags}
                            />
                            <FileInput
                                name="files"
                                onChange={formik.handleChange}
                            />
                        </Form>
                        {(formik.values.files || []).map((item, index) => (
                            <Upload key={index} {...item} />
                        ))}
                    </Modal.Content>
                    <Modal.Footer>
                        <Button.Text
                            modifiers="secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </Button.Text>
                        <Button.Text>Add</Button.Text>
                    </Modal.Footer>
                </Modal>
            </Overlay>
        </Portal>
    )
}
