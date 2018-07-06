import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Logo from './Logo'
import SignUpModal from './SignUpModal'
import SignInModal from './SignInModal'
import SignOutModal from './SignOutModal'

export default class Header extends Component {

  render() {

    return (
      <Menu size={'large'}>
        <Menu.Item name='logo'>
          <Logo />
        </Menu.Item>

          <h1 id='header-school-name'>
            British International School of New York
          </h1>

        <Menu.Menu position='right'>
          <SignInModal />
          <SignUpModal />
          <SignOutModal />
        </Menu.Menu>
      </Menu>
    )
  }
}
