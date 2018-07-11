import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import * as actions from '../actions/postCrudActions'


class AnnouncementForm extends Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  submit = (e) => {
    this.props.newPost(this.state.title, this.state.body, this.props.user, 'announcement', this.props.currentClass)
  }

  render() {

    return (
      <Form>
        <Form.Input required
          placeholder = 'Title'
          label='Title'
          name='title'
          type='text'
          onChange={this.handleChange}/>
        <Form.TextArea required
          placeholder = 'Body'
          label='Body'
          name='body'
          onChange={this.handleChange}/>
        <Button type='submit' onClick={this.submit} color='green'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    currentClass: state.classes.currentClass
  }
}


export default connect(mapStateToProps, actions)(AnnouncementForm)
//
// let PostSchema = new Schema({
//   title: String,
//   body: String,
//   timestamp: Date,
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   type: {
//     type: String,
//     enum: ['announcement', 'note', 'lessonPlan']
//   },
//   class: {
//     type: Schema.Types.ObjectId,
//     ref: 'Class'
//   },
//   unit: {
//     type: Schema.Types.ObjectId,
//     ref: 'Unit'
//   }
// })
