import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Dropdown, Input } from 'semantic-ui-react'
import CreateClassModal from '../CreateClassModal'
import { Route, Link, Switch } from 'react-router-dom'
import * as actions from '../../actions/dropdownActions'

class ClassDropdown extends Component {
  render() {
    if (this.props.classes) {

      let classes = this.props.classes
      let classList = classes.map((classRoom, index) => {
        let pathname = (`/classes/grade${classRoom.gradeLevel}/${classRoom.subject}`)
        return <Dropdown.Item key={index}><Link to={pathname} key={index} onClick={this.props.viewClass(classRoom)}>Grade {classRoom.gradeLevel} {classRoom.subject}</Link></Dropdown.Item>
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

export default connect(mapStateToProps, actions)(ClassDropdown)
