import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalComponent = ({ title, cancelButton, confirmButton, content, onClose, open, enabledFunction }) => (
    <Modal
        open={open}
        onClose={onClose}
        closeIcon
    >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
            <h3>{content}</h3>
        </Modal.Content>
        {cancelButton ?
            <Modal.Actions>
                <Button onClick={onClose} negative>
                    {cancelButton}
                </Button>
                <Button
                    onClick={enabledFunction}
                    positive
                    labelPosition='right'
                    icon='checkmark'
                    content={confirmButton}
                />
            </Modal.Actions> : null}
    </Modal>
)



export default ModalComponent