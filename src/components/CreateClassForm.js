import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import * as actions from '../actions/classCrudActions'


class CreateClassForm extends Component {
  state = {
    gradeLevel: '',
    subject: '',
    faculty: ''
  }

  handleChange = (e) => {
    if (e.target.name === 'gradeLevel') {
      this.setState({ gradeLevel: parseInt(e.target.value)})
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  toggle = () => this.setState({ checked: !this.state.checked })

  submit = (e) => {
    this.props.createClass(this.state.subject, this.state.gradeLevel, this.state.faculty)
    this.props.close()
  }

  render() {
    let staffNames = this.props.faculty.map(teacher => {
      return {key: teacher._id, value: teacher.name, text: teacher.name}
    })

    return (
      <Form>
        <Form.Input required
          placeholder = 'Grade Level'
          label='Grade'
          name='gradeLevel'
          type='text'
          onChange={this.handleChange}/>
        <Form.Input required
          placeholder = 'Subject'
          label='Subject'
          name='subject'
          type='text'
          onChange={this.handleChange}/>
        <Form.Input required
          placeholder = 'Classroom Teacher'
          label='Faculty'
          type='text'
          name='faculty'
          onChange={this.handleChange}/>
        <Button type='submit' onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { faculty: state.faculty.faculty }
}


export default connect(mapStateToProps, actions)(CreateClassForm)
