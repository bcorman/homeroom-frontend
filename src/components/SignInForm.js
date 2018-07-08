import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { signInUser } from '../actions/authActions'
import * as actions from '../actions'

class SignInForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = (e) => {
    e.preventDefault()
    this.props.signInUser(this.state.email, this.state.password)
  }
  render() {
    return (
      <Form>
        <Form.Input required
          label='Email'
          name='email'
          type='email'
          onChange={this.handleChange} />
        <Form.Input required
          label='Password'
          type='password'
          name='password'
          onChange={this.handleChange} />
        <Message success
          header='Success'
          content="Log in successful." />
        <Message error
          header='Log In Failed'
          content='Please verify your username and password and try again.' />
        <Button type='submit' onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, actions)(SignInForm)
