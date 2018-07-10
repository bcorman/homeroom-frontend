import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Input } from 'semantic-ui-react'
import CreateClassModal from '../CreateClassModal'
import { Route, Link, Switch } from 'react-router-dom'

class ClassDropdown extends Component {
  render() {
    if (this.props.classes) {

      let classes = this.props.classes
      console.log(`classes: ${Array.isArray(classes)}`)
      console.log(classes[0].subject)
      let classList = classes.map((classRoom, index) => {
        let pathname = (`/classes/grade${classRoom.gradeLevel}/${classRoom.subject}`)
        return <Link to={pathname} key={index}><Dropdown.Item key={index}>Grade {classRoom.gradeLevel} {classRoom.subject}</Dropdown.Item></Link>
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
