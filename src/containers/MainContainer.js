import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import AnnouncementsContainer from './AnnouncementsContainer'

class MainContainer extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <h1>Main Container</h1>
        </Grid.Row>
        <Grid.Row centered>
          <AnnouncementsContainer />
        </Grid.Row>
      </Grid>
    )
  }
}

export default MainContainer
