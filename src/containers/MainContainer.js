import React, { Component } from 'react'
import AnnouncementsContainer from './AnnouncementsContainer'
import ClassContainer from './ClassContainer'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render() {
    console.log('in main container')
    console.log(this.props.view)
      return (
        <Switch>
          <Route path='/main' component={AnnouncementsContainer} />
        </Switch>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { view: state.view }
}
export default withRouter(connect(mapStateToProps)(MainContainer))
