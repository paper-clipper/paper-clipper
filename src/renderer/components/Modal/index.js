import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Modal } from '@paper/layout/components'
import { Overlay, Button } from '@paper/layout/elements'

import Form from '@paper/components/Form'
import Portal from '@paper/components/Portal'
import TextField from '@paper/components/TextField'
import MultiSelectField from '@paper/components/MultiSelectField'
import FileInput from '@paper/components/FileInput'

export default () => {
    return (
        <Portal>
            <Overlay>
                <Modal>
                    <Modal.Header>
                        <Modal.Actions>
                            <FontAwesomeIcon
                                icon={faTimes}
                                fixedWidth
                            />
                        </Modal.Actions>
                        <Modal.Title>Add file {'📁'}</Modal.Title>
                        <Modal.Subtitle>Add new file to your library</Modal.Subtitle>
                    </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <TextField
                                name="file-name"
                                placeholder="File name"
                            />
                            <MultiSelectField
                                name="tags"
                                placeholder="Tags"
                            />
                            <FileInput />
                        </Form>
                    </Modal.Content>
                    <Modal.Footer>
                        <Button.Text modifiers="secondary">Cancel</Button.Text>
                        <Button.Text>Add</Button.Text>
                    </Modal.Footer>
                </Modal>
            </Overlay>
        </Portal>
    )
}
