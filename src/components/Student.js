import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class Student extends Component {
  render() {
    return (
      <Item>
        <Item.Image size='tiny' src='http://via.placeholder.com/350x300' />

        <Item.Content verticalAlign='middle'>
          <Item.Header as='a'>{this.props.content.name}</Item.Header>
          <Item.Meta>{this.props.content.birthdate}</Item.Meta>
        </Item.Content>
      </Item>
    )
  }
}

export default Student
