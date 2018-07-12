import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'


export default class LandingPage extends Component {
  render() {
    return (
      <Grid width={16}>
        <Grid.Row centered>
          <Segment width={8} padded='very'>Please Sign In.</Segment>
        </Grid.Row>
      </Grid>
    )
  }
}
