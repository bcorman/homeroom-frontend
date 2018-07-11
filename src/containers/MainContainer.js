import React, { Component } from 'react'
import AnnouncementsContainer from './AnnouncementsContainer'
import ClassContainer from './ClassContainer'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={AnnouncementsContainer} />
          <Route exact path='/classes/:_id' component={ClassContainer} />
        </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}
export default withRouter(connect(mapStateToProps)(MainContainer))
