import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Dropdown } from 'semantic-ui-react'
import CreateClassForm from './CreateClassForm'

class CreateClassModal extends Component {

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
      <Modal trigger={<Dropdown.Item id="add-class" name='addClass'>Add Class</Dropdown.Item>}>
        <Modal.Header>Add Class</Modal.Header>
        <Modal.Content>
          <CreateClassForm />
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { faculty: state.faculty.faculty }
}

export default connect(mapStateToProps)(CreateClassModal)
