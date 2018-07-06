import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

export default class SignUpForm extends Component {
  render() {
    return (
      <Form>
        <Form.Input label='Email' type='email' required />
        <Form.Input label='Password' type='password' required />
        <Form.Input label='Confirm Password' type='password' required />
        <Message success
          header='Success'
          content="Welcome to HomeRoom" />
        <Message error
          header='Error'
          content='You can only sign up for an account once with a given e-mail address.' />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
