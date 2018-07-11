import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class ClassNavMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

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
export default ClassNavMenu
