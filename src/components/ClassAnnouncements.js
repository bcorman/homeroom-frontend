import React, { Component } from 'react'
import ClassAnnouncement from './ClassAnnouncement'
import * as actions from '../actions/postCrudActions'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import NewAnnouncementModal from './NewAnnouncementModal'


class ClassAnnouncements extends Component {

  render() {
    console.log(this.props.posts)
    console.log(Array.isArray(this.props.posts))

    if (this.props.posts) {
      let announcements = this.props.posts.map((post, index) => {
        return <ClassAnnouncement key={index} content={post} />
      })
      return (
        <div>
          { announcements }
          <NewAnnouncementModal />
        </div>
      )
    } else {
      return (
        <div>
          <NewAnnouncementModal />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    currentClass: state.classes.currentClass
  }
}
export default connect(mapStateToProps, actions)(ClassAnnouncements)
