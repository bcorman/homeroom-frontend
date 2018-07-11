import React, { Component } from 'react'
import ClassAnnouncement from './ClassAnnouncement'
import { Grid, Button } from 'semantic-ui-react'
import NewAnnouncementModal from './NewAnnouncementModal'


class ClassAnnouncements extends Component {

  render() {
    return (
      <div>
        <ClassAnnouncement />
        <NewAnnouncementModal />
      </div>
    )
  }
}

export default ClassAnnouncements
