import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions/pageViewActions'

class ClassNavMenu extends Component {
  state = {}

  populatePage = (activeItem) => {
    if (activeItem === 'announcements') {
      console.log(this.props)
    }
    this.props.populatePage(activeItem)
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.populatePage(name)
  }

  render() {
    const { activeItem } = this.state
    let pathname=(`/classes/${this.props.currentClass._id}`)
    return (
      <Menu pointing widths={3}>
        <Menu.Item
          name='units'
          active={activeItem === 'units'}
          content='Units'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='announcements'
          active={activeItem === 'announcements'}
          content='Announcements'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='students'
          active={activeItem === 'students'}
          content='Students'
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentClass: state.classes.currentClass}
}
export default connect(mapStateToProps, actions)(ClassNavMenu)
