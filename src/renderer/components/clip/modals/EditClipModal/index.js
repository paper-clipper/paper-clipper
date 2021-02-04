import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
    const [submitForm, setSubmitForm] = useState(false)

    const handleOnSubmit = (values) => {
        dispatch(createClip(values))
            .then(() => onClose())
    }

    const handleOnAdd = () => setSubmitForm(true)

    const handleOnCancel = onClose

    return (
        <Modal>
            <Modal.Header>
                <Modal.Actions>
                    <Button.Icon
                        onClick={() => null}
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
                    submitForm={submitForm}
                    onSubmit={handleOnSubmit}
                />
            </Modal.Content>
            <Modal.Footer>
                <Button.Text
                    modifiers="secondary"
                    onClick={handleOnCancel}
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
