import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import AnnouncementsContainer from './AnnouncementsContainer'
import ClassContainer from './ClassContainer'
import { Switch, Route } from 'react-router-dom'

class MainContainer extends Component {
  render() {
    return (

              <Switch>
                <Route path='/main' exact component={AnnouncementsContainer} />
                <Route path='/classes/:_id' component={ClassContainer} />
              </Switch>
  
    )
  }
}

export default MainContainer
