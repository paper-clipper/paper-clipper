import React from 'react'

import { Modal } from '@paper/layout/components'
import { Overlay, Button } from '@paper/layout/elements'

import Portal from '@paper/components/Portal'
import TextInput from '@paper/components/TextInput'
import FileInput from '@paper/components/FileInput'
// import Upload from '@paper/components/Upload'

export default () => {
    return (
        <Portal>
            <Overlay>
                <Modal>
                    <Modal.Header>
                        <Modal.Title>Add file {'📁'}</Modal.Title>
                        <Modal.Subtitle>Add new file to your library</Modal.Subtitle>
                    </Modal.Header>
                    <Modal.Content>
                        <TextInput
                            name="file-name"
                            placeholder="File name"
                        />
                        {/* <Upload /> */}
                        <FileInput />
                    </Modal.Content>
                    <Modal.Footer>
                        <Button.Text>Cancel</Button.Text>
                        <Button.Text modifiers="primary">Add</Button.Text>
                    </Modal.Footer>
                </Modal>
            </Overlay>
        </Portal>
    )
}
