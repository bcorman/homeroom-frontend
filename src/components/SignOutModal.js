import React, { Component } from 'react'
import { Button, Modal, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class SignOutModal extends Component {

  signOut = (e) => {
    e.preventDefault()
    this.props.signOutUser()
  }

  render() {

    return (
      <Modal size='small' trigger={<Button name='signOut'>Sign Out</Button>}>
        <Modal.Header>Sign Out</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to sign out?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>No</Button>
          <Button
            positive icon='checkmark'
            labelPosition='right'
            content='Yes'
            onClick={this.signOut}/>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, actions)(SignOutModal)
