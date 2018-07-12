import React, { Component } from 'react'
import AnnouncementsContainer from './AnnouncementsContainer'
import ClassContainer from './ClassContainer'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() {
    console.log('in main container')
    return (
        <Switch>
          <Route exact path='/classes/:_id' component={ClassContainer} />
          <Route exact path='/' component={AnnouncementsContainer} />
        </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}
export default withRouter(connect(mapStateToProps)(MainContainer))
