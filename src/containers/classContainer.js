import React, { Component } from 'react'
import { Grid, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ClassNavMenu from '../components/ClassNavMenu'
import ClassAnnouncements from '../components/ClassAnnouncements'

class ClassContainer extends Component {
  render(){

    console.log(this.props.currentClass)
    if (this.props.currentClass) {
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
  return { currentClass: state.classes.currentClass }
}

export default connect(mapStateToProps)(ClassContainer)
