import React, { Component } from 'react'
import ClassAnnouncement from './ClassAnnouncement'
import * as actions from '../actions/postCrudActions'
import { connect } from 'react-redux'
import { Grid, Button, Item } from 'semantic-ui-react'
import NewAnnouncementModal from './NewAnnouncementModal'


class ClassAnnouncements extends Component {

  render() {

    if (this.props.posts) {
      let announcements = this.props.posts.map((post, index) => {
        return <ClassAnnouncement key={index} content={post} />
      })
      return (
        <Item.Group>
          { announcements }
          <NewAnnouncementModal />
        </Item.Group>

      )
    } else {
      return (
        <Item.Group>
          <NewAnnouncementModal />
        </Item.Group>
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
