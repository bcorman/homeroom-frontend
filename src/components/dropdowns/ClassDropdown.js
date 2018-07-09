import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Input } from 'semantic-ui-react'
import CreateClassModal from '../CreateClassModal'


class ClassDropdown extends Component {
  render() {
    if (this.props.classes) {

      let classes = this.props.classes
      console.log(`classes: ${Array.isArray(classes)}`)
      console.log(classes[0].subject)
      let classList = classes.map(classRoom => {
        return <Dropdown.Item key={classRoom._id}>Grade {classRoom.gradeLevel} {classRoom.subject}</Dropdown.Item>
      })
      return (
        <Dropdown item text='Classes'>
          <Dropdown.Menu>
            <Input icon='search' iconPosition='left' className='search' />
            {classList}
            <CreateClassModal />
          </Dropdown.Menu>
        </Dropdown>
      )
    } else {
      return (
        <Dropdown item text='Classes'>
          <Dropdown.Menu>
            <Input icon='search' iconPosition='left' className='search' />
            <CreateClassModal />
          </Dropdown.Menu>
        </Dropdown>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { classes: state.classes.classes }
}

export default connect(mapStateToProps)(ClassDropdown)
