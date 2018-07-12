import React, { Component } from 'react'
import ClassAnnouncement from './ClassAnnouncement'
import * as actions from '../actions/postCrudActions'
import { connect } from 'react-redux'
import { Grid, Button, Item } from 'semantic-ui-react'
import NewAnnouncementModal from './NewAnnouncementModal'


class ClassAnnouncements extends Component {

  render() {
    console.log('in class announcements')
    console.log(this.props.currentClass)
    if (this.props.currentClass.announcements) {
      let announcements = this.props.currentClass.announcements.map((post, index) => {
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
    currentClass: state.classes.currentClass
  }
}
export default connect(mapStateToProps, actions)(ClassAnnouncements)
