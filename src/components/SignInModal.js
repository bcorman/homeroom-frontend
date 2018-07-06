import React, { Component } from 'react'
import { Button, Header, Modal, Menu } from 'semantic-ui-react'
import SignInForm from './SignInForm'

export default class SignInModal extends Component {

  render() {

    return (
      <Modal
        trigger={<Menu.Item name='signIn'>
                  Sign In
                </Menu.Item>}>
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <SignInForm />
        </Modal.Content>
      </Modal>
    )
  }
}
