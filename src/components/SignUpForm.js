import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message, Checkbox } from 'semantic-ui-react'
import * as actions from '../actions/'

class SignUpForm extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    checked: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggle = () => this.setState({ checked: !this.state.checked })

  submit = (e) => {
    if (this.state.password === this.state.confirmPassword) {
      this.props.signUpUser(this.state.name, this.state.username, this.state.email, this.state.password, this.state.confirmPassword, this.state.checked)
    }
  }

  render() {
    return (
      <Form>
        <Form.Input required
          label='Name'
          type='text'
          name='name'
          onChange={this.handleChange}/>
        <Form.Input required
          label='Username'
          type='text'
          name='username'
          onChange={this.handleChange}/>
        <Form.Input required
          label='Email'
          type='email'
          name='email'
          onChange={this.handleChange}/>
        <Form.Input required
          label='Password'
          type='password'
          name='password'
          onChange={this.handleChange}/>
        <Form.Input required
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          onChange={this.handleChange}/>
        <Message success
          header='Success'
          content="Welcome to HomeRoom" />
        <Message error
          header='Error'
          content='You can only sign up for an account once with a given e-mail address.' />
        <Checkbox label='This person has administrative privileges' onChange={this.toggle}/>
        <Button type='submit' onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, actions)(SignUpForm)
