import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Dropdown } from 'semantic-ui-react'
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
      <Modal trigger={<Dropdown.Item id="add-faculty" name='signUp'>Add Faculty</Dropdown.Item>}>
        <Modal.Header>Add Faculty</Modal.Header>
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
