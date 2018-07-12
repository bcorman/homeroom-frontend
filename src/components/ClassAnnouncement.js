import React, { Component } from 'react'
import { Item, Image } from 'semantic-ui-react'

class ClassAnnouncement extends Component {
  render() {
    console.log(this.props.content)
    return (
        <Item>
          <Item.Image size='tiny' src='http://via.placeholder.com/350x300' />
          <Item.Content>
            <Item.Header as='a'>{this.props.content.title}</Item.Header>
            <Item.Meta>
              <small>{this.props.content.author.name}</small>
              <small>{this.props.content.timestamp}</small>
            </Item.Meta>
            <Item.Description>
              <p>{this.props.content.body}</p>
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
    )
  }
}

export default ClassAnnouncement
