import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message, Checkbox, Dropdown } from 'semantic-ui-react'
import * as actions from '../actions/'

const subjects = ['Math', 'Science', 'English', 'ForeignLanguage', 'Humanities', 'Art', 'Music']



class CreateClassForm extends Component {
  state = {
    gradeLevel: '',
    subject: ''
  }

  handleChange = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    if (e.target.name === 'gradeLevel') {
      this.setState({ gradeLevel: parseInt(e.target.value)})
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
    console.log(this.state)
  }

  toggle = () => this.setState({ checked: !this.state.checked })

  submit = (e) => {
    if (this.state.password === this.state.confirmPassword) {
      this.props.signUpUser(this.state.name, this.state.username, this.state.email, this.state.password, this.state.confirmPassword, this.state.checked)
    }
  }

  render() {
    let staffNames = this.props.faculty.map(teacher => {
      return {key: teacher._id, value: teacher.name, text: teacher.name}
    })

    return (
      <Form>
        <Form.Input placeholder = 'Grade Level'
          label='Grade'
          name='gradeLevel'
          type='text'
          onChange={this.handleChange}/>
        <Form.Input placeholder = 'Subject'
          label='Subject'
          name='subject'
          type='text'
          onChange={this.handleChange}/>
        <Form.Input placeholder = 'Classroom Teacher'
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
