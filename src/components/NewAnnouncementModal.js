import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import AnnouncementForm from './AnnouncementForm'

class NewAnnouncementModal extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen = () => this.setState({modalOpen: true})
  handleClose = () => this.setState({modalOpen: false})

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button
                        circular
                        className='new-announcement-button'
                        floated='right'
                        color='green'
                        onClick={this.handleOpen}>New Post</Button>}
>
        <Modal.Header>New Post</Modal.Header>
        <Modal.Content>
          <AnnouncementForm close={this.handleClose}/>
        </Modal.Content>
      </Modal>
    )
  }
}

export default NewAnnouncementModal
