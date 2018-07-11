import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/dropdownActions'
import { Menu, Dropdown, Input } from 'semantic-ui-react'
import SignUpModal from '../SignUpModal'

class FacultyDropdown extends Component {
  render() {

    if (this.props.faculty) {
      let faculty = this.props.faculty

      let staff = faculty.map((person, index) => {
        let pathname = (`/staff/${person._id}`)
        return <Dropdown.Item as={ Link } to={pathname} key={index}>{person.name}</Dropdown.Item>
      })

      return (
        <Dropdown item text='Faculty'>
          <Dropdown.Menu>
            <Input icon='search' iconPosition='left' className='search' />
              {staff}
              <SignUpModal />
          </Dropdown.Menu>
        </Dropdown>
      )
    } else {
      return (
        <Dropdown item text='Faculty'>
          <Dropdown.Menu>
            <Input icon='search' iconPosition='left' className='search' />
            <SignUpModal />
          </Dropdown.Menu>
        </Dropdown>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {faculty: state.faculty.faculty}
}

export default connect(mapStateToProps, actions)(FacultyDropdown)
