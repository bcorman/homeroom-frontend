import React, { Component } from 'react'
import { Button, Header, Modal, Menu } from 'semantic-ui-react'
import SignUpForm from './SignUpForm'

export default class SignUpModal extends Component {

  render() {
    return (
      <Modal
        trigger={<Menu.Item
                  name='signUp'>
                  Sign Up
                </Menu.Item>}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <SignUpForm />
        </Modal.Content>
      </Modal>
    )
  }
}
