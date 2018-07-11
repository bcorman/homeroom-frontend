import React, { Component } from 'react'
import { ROOT_URL } from '../config'
import { Grid, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ClassContainer extends Component {
  state = {}

  componentWillMount () {
    let selected = this.props.match.params._id
    let classes = JSON.parse(localStorage.getItem('classes'))
    let current = classes.filter(classRoom => classRoom._id === selected)[0]
    this.setState({currentClass: current})
    console.log(current)
  }
  render(){
    let currentClass = this.state.currentClass

    return (
      <Grid.Column width={12}>
        <Grid.Row>
          <h1 className='announcement-page-header'>Grade {currentClass.gradeLevel} {currentClass.subject}</h1>
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
