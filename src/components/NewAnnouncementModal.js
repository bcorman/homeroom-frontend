import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import AnnouncementForm from './AnnouncementForm'

class NewAnnouncementModal extends Component {

  render() {
    return (
      <Modal trigger={<Button circular className='new-announcement-button' floated='right' color='green'>New Post</Button>}>
        <Modal.Header>New Post</Modal.Header>
        <Modal.Content>
          <AnnouncementForm />
        </Modal.Content>
      </Modal>
    )
  }
}

export default NewAnnouncementModal
