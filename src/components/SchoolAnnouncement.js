import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'


class SchoolAnnouncement extends Component {
  render() {
    return (
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
    )
  }
}

export default SchoolAnnouncement
