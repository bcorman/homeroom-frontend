import React, { Component } from 'react'
import { Grid, Card } from 'semantic-ui-react'

class ClassContainer extends Component {
  render(){
    return (
      <Grid>
        <Grid.Row>
          <Card.Group>
            <Card fluid color='red' header='Option 1' />
            <Card fluid color='orange' header='Option 2' />
            <Card fluid color='yellow' header='Option 3' />
          </Card.Group>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ClassContainer
