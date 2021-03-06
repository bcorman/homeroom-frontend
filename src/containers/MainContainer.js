import React, { Component } from 'react'
import AnnouncementsContainer from './AnnouncementsContainer'
import ClassContainer from './ClassContainer'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() {
      return (
        <Switch>
          <Route exact path='/classes/:_id' component={ClassContainer} />
          <Route path='/' component={AnnouncementsContainer} />
        </Switch>
      )
  }
}

const mapStateToProps = (state) => {
  return state
}
export default withRouter(connect(mapStateToProps)(MainContainer))
