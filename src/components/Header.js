import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import Logo from './Logo'
import { connect } from 'react-redux'
import SignInModal from './SignInModal'
import SignOutModal from './SignOutModal'
import SignUpModal from './SignUpModal'

class Header extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <Menu size={'large'}>
          <Menu.Item name='logo'>
            <Logo />
          </Menu.Item>

          <h1 id='header-school-name'>
            British International School of New York
          </h1>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Menu.Item>
                <SignOutModal />
              </Menu.Item>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    } else {
      return (
        <Menu size={'large'}>
          <Menu.Item name='logo'>
            <Logo />
          </Menu.Item>

          <h1 id='header-school-name'>
            British International School of New York
          </h1>

          <Menu.Menu position='right'>
            <Menu.Item>
              <SignInModal />
            </Menu.Item>
            <Menu.Item>
              <SignUpModal />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}

export default connect(mapStateToProps)(Header)
