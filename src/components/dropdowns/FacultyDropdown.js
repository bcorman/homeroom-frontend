import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Input } from 'semantic-ui-react'
import SignUpModal from '../SignUpModal'

class FacultyDropdown extends Component {
  render() {
    if (this.props.faculty) {
      let faculty = this.props.faculty
      console.log(`First name on list: ${faculty[0].name}`)
      console.log(`faculty: ${faculty}`)
      console.log(Array.isArray(faculty))

      let staff = faculty.map(person => {
        return <Dropdown.Item key={person._id}>{person.name}</Dropdown.Item>
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
  return { faculty: state.faculty.faculty }
}

export default connect(mapStateToProps)(FacultyDropdown)
