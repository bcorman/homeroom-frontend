import React, { Component } from 'react'
import { Grid, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ClassNavMenu from '../components/ClassNavMenu'
import ClassAnnouncements from '../components/ClassAnnouncements'
import Units from '../components/Units'

class ClassContainer extends Component {
  render(){

    if (this.props.currentClass || this.props.page === 'announcements') {
      return (
        <Grid.Column width={12}>
          <Grid.Row>
            <h1 className='announcement-page-header'>Grade {this.props.currentClass.gradeLevel} {this.props.currentClass.subject}</h1>
          </Grid.Row>
          <Grid.Row>
            <ClassNavMenu />
          </Grid.Row>
          <ClassAnnouncements />
        </Grid.Column>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return { currentClass: state.classes.currentClass, page: state.classes.page }
}

export default connect(mapStateToProps)(ClassContainer)
