import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Logo from './Logo'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        size={'massive'}>
        <Menu.Item
          name='logo'
          active={activeItem === 'logo'}
          onClick={this.handleItemClick}
          >
          <Logo />
        </Menu.Item>

          <h1 id='header-school-name'>
            British International School of New York
          </h1>

        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
          Login
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
          Logout
          </Menu.Item>
          <Menu.Item
            name='signUp'
            active={activeItem === 'signUp'}
            onClick={this.handleItemClick}
          >
          Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
