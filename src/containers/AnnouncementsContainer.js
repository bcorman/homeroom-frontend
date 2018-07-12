import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import NewAnnouncementModal from '../components/NewAnnouncementModal'
import SchoolAnnouncements from '../components/SchoolAnnouncements'


class AnnouncementsContainer extends Component {
  render(){
    if (this.props.auth.admin && this.props.auth.authenticated) {
      return (
        <Grid.Column width={10}>
          <Grid.Row>
            <h1 className='announcement-page-header'>Announcements</h1>
          </Grid.Row>
          <SchoolAnnouncements />
          <NewAnnouncementModal />
        </Grid.Column>
      )
    } else {
      return (
        <Grid.Column width={10}>
          <Grid.Row>
            <h1 className='announcement-page-header'>Announcements</h1>
          </Grid.Row>
          <SchoolAnnouncements />
        </Grid.Column>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AnnouncementsContainer)
