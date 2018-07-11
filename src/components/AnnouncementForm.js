import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import * as actions from '../actions/classCrudActions'


class AnnouncementForm extends Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  toggle = () => this.setState({ checked: !this.state.checked })

  submit = (e) => {
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
        <Form.Input required
          placeholder = 'Body'
          label='Body'
          name='body'
          type='textarea'
          onChange={this.handleChange}/>
        <Button type='submit' onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
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
