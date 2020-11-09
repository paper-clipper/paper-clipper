import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Modal } from '@paper/layout/components'
import { Form } from '@paper/layout/forms'
import { Overlay, Button } from '@paper/layout/elements'

import { TextInput, MultiSelectInput, FileInput } from '@paper/components/forms'
import Portal from '@paper/components/Portal'

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
                            <TextInput
                                name="file-name"
                                placeholder="File name"
                            />
                            <MultiSelectInput
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
