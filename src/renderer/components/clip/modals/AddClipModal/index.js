import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Form from '../Form'
import Modal from '@paper/components/overlay/Modal'

import { Button } from '@paper-ui/button'
import { Icon } from '@paper-ui/typography'

import { createClip } from '@paper/store/clips/actions'

export default ({
    onClose = () => null,
}) => {

    const dispatch = useDispatch()
    const { addClipModal } = useSelector(state => state.clips)
    const [ submitForm, setSubmitForm ] = useState(false)

    const handleOnSubmit = (values) => {
        dispatch(createClip(values))
            .then(() => onClose())
    }

    const handleOnAdd = () => setSubmitForm(true)

    return (
        <Modal>
            <Modal.Header>
                <Modal.Actions>
                    <Button.Icon
                        onClick={onClose}
                        modifiers={[ 'md', 'neutral' ]}
                    >
                        <Icon
                            as={FontAwesomeIcon}
                            icon={faTimes}
                            fixedWidth
                        />
                    </Button.Icon>
                </Modal.Actions>
                <Modal.Title>Add file {'📁'}</Modal.Title>
                <Modal.Subtitle>Add new file to your library</Modal.Subtitle>
            </Modal.Header>
            <Modal.Content>
                <Form
                    initialValues={addClipModal.initialValues}
                    submitForm={submitForm}
                    onSubmit={handleOnSubmit}
                />
            </Modal.Content>
            <Modal.Footer>
                <Button.Text
                    modifiers="secondary"
                    onClick={onClose}
                >
                    Cancel
                </Button.Text>
                <Button.Text
                    onClick={handleOnAdd}
                >
                    Add
                </Button.Text>
            </Modal.Footer>
        </Modal>
    )
}
