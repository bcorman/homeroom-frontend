import React, { Component } from 'react'
import { Grid, Item, Image } from 'semantic-ui-react'

class ClassContainer extends Component {
  render(){
    return (
      <Grid.Column width={12}>
        <Grid.Row>
          <h1 className='announcement-page-header'>Class Name</h1>
        </Grid.Row>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='images/placeholder_avatar.png' />
            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
    )
  }
}

export default ClassContainer
