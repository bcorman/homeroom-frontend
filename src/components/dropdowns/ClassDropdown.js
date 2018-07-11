import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Input } from 'semantic-ui-react'
import CreateClassModal from '../CreateClassModal'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/dropdownActions'

class ClassDropdown extends Component {
  render() {
    if (this.props.classes) {

      let classes = this.props.classes
      let classList = classes.map((classRoom, index) => {
        let pathname = (`/classes/${classRoom._id}`)
        return <Link to={pathname} key={index} onClick={this.props.viewClass(classRoom)}><Dropdown.Item key={index}>Grade {classRoom.gradeLevel} {classRoom.subject}</Dropdown.Item></Link>
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
