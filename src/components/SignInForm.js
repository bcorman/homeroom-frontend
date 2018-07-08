import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'


export default class SignInForm extends Component {

  render() {
    return (
      <Form>
        <Form.Input label='Email' type='email' required />
        <Form.Input label='Password' type='password' required />
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
