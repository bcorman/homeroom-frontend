import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Dropdown } from 'semantic-ui-react'
import SignUpForm from './SignUpForm'
import {signUpUser} from '../actions/authActions'

class SignUpModal extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleClose = this.handleClose.bind(this)
  }

  getRedirectPath() {
    const locationState = this.props.location.state
    if (locationState && locationState.from.pathname) {
      return locationState.from.pathname
    } else {
      return '/'
    }
  }
  handleOpen = () => this.setState({modalOpen: true})
  handleClose = () => this.setState({modalOpen: false})

  render() {
    return (
      <Modal trigger={<Dropdown.Item id="add-faculty" name='signUp' onClick={this.handleOpen}>Add Faculty</Dropdown.Item>}
        open={this.state.modalOpen}
        onClose={this.handleClose}>
        <Modal.Header>Add Faculty</Modal.Header>
        <Modal.Content>
          <SignUpForm close={this.handleClose}/>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, signUpUser)(SignUpModal)
