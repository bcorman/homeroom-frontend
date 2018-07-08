import React, { Component } from 'react'
import { Button, Modal, Menu } from 'semantic-ui-react'

export default class SignOutModal extends Component {

  render() {

    return (
      <Modal
        size='small'
        trigger={<Menu.Item name='logout'>
                    Sign Out
                 </Menu.Item>}>
        <Modal.Header>Sign Out</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to sign out?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>No</Button>
          <Button positive icon='checkmark' labelPosition='right' content='Yes' />
        </Modal.Actions>
      </Modal>
    )
  }
}
