import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Modal, Menu, Form, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import {signUpUser} from '../actions/authActions'

class SignUpModal extends Component {

  getRedirectPath() {
    const locationState = this.props.location.state
    if (locationState && locationState.from.pathname) {
      return locationState.from.pathname
    } else {
      return '/'
    }
  }

  render() {
    return (
      <Modal trigger={<Button name='signUp'>Sign Up</Button>}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <SignUpForm />
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, signUpUser)(SignUpModal)
