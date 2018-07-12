import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Student from './Student'

class Students extends Component {
  render() {
    console.log(this.props.students)
    let students = this.props.students.map((student, index) => {
      return <Student key={index} content={student} />
    })
    return (
      <Item.Group relaxed>
        {students}
      </Item.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {students: state.classes.currentClass.students}
}

export default connect(mapStateToProps)(Students)
