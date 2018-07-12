import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class Unit extends Component {
  render() {
    return (
      <Item>
        <Item.Image size='tiny' src='http://via.placeholder.com/350x300' />
        <Item.Content>
          <Item.Header as='a'>{this.props.content.title}</Item.Header>
          <Item.Description>
            <p>{this.props.content.description}</p>
          </Item.Description>

        </Item.Content>
      </Item>
    )
  }
}

export default Unit
