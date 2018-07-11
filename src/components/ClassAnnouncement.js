import React, { Component } from 'react'
import { Item, Image } from 'semantic-ui-react'

class ClassAnnouncement extends Component {
  render() {
    console.log(this.props.content)
    return (
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src='images/placeholder_avatar.png' />
          <Item.Content>
            <Item.Header as='a'>{this.props.content.title}</Item.Header>
            <Item.Meta>{this.props.content.author.name}</Item.Meta>
            <Item.Description>
              <p>{this.props.content.body}</p>
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default ClassAnnouncement
