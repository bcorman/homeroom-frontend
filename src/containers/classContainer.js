import React, { Component } from 'react'
import { Grid, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import ClassNavMenu from '../components/ClassNavMenu'
import ClassAnnouncements from '../components/ClassAnnouncements'
import Units from '../components/Units'
import Students from '../components/Students'

class ClassContainer extends Component {

  render() {
    console.log(this.props.page)
    console.log('in class container')
    let page

    if (this.props.currentClass) {
      if (this.props.page === undefined || this.props.page === 'announcements') {
        page = <ClassAnnouncements />
      } else if (this.props.page === 'units') {
        page = <Units />
      } else if (this.props.page === 'students') {
        page = <Students />
      }
      return (
        <Grid.Column width={10}>
          <Grid.Row>
            <h1 className='announcement-page-header'>Grade {this.props.currentClass.gradeLevel} {this.props.currentClass.subject}</h1>
          </Grid.Row>
          <Grid.Row>
            <ClassNavMenu />
          </Grid.Row>
          <Grid.Row>
            {page}
          </Grid.Row>

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
