import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Input } from 'semantic-ui-react'
import SignUpModal from '../SignUpModal'
import FacultyList from './FacultyList'

class FacultyDropdown extends Component {

  render() {
    return (
      <FacultyList />
    )
  }
}

const mapStateToProps = (state) => {
  return { faculty: state.list.faculty }
}

export default connect(mapStateToProps)(FacultyDropdown)
