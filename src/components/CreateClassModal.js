import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Dropdown } from 'semantic-ui-react'
import CreateClassForm from './CreateClassForm'

class CreateClassModal extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen = () => this.setState({modalOpen: true})
  handleClose = () => this.setState({modalOpen: false})


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
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Dropdown.Item id="add-class" name='addClass'>Add Class</Dropdown.Item>}>
        <Modal.Header>Add Class</Modal.Header>
        <Modal.Content>
          <CreateClassForm close={this.handleClose}/>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { faculty: state.faculty.faculty }
}

export default connect(mapStateToProps)(CreateClassModal)
