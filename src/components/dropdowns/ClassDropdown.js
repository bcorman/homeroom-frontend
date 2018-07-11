import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Input, Button } from 'semantic-ui-react'
import CreateClassModal from '../CreateClassModal'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/dropdownActions'

class ClassDropdown extends Component {

  linkTo = (e) => {
    console.log(e.target.id)

    let target = this.props.classes.filter((classRoom => classRoom._id === e.target.id))[0]
    this.props.viewClass(target)
    console.log(target)
  }

  render() {
    if (this.props.classes) {

      let classes = this.props.classes
      let classList = classes.map((classRoom, index) => {
        let pathname = (`/classes/${classRoom._id}`)
        return <Dropdown.Item as={ Link } to={pathname} id={classRoom._id} key={index} onClick={this.linkTo}>Grade {classRoom.gradeLevel} {classRoom.subject}</Dropdown.Item>
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
