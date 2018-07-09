import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
import * as actions from '../actions/'

class SignUpForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = (e) => {
    e.preventDefault()
    if (this.state.password === this.state.confirmPassword) {
      this.props.signUpUser(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
    }
  }

  render() {
    return (
      <Form>
        <Form.Input required
          label='Username'
          type='username'
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
        <Button type='submit' onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, actions)(SignUpForm)
