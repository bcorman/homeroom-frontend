import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import Logo from './Logo'
import { connect } from 'react-redux'
import * as actions from '../actions/modalActions'

class Header extends Component {


  componentWillUpdate() {
    return true
  }
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
              <Button>
                Sign Out
              </Button>
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
              <Button
                onClick={actions.signInOpen}>
                Sign In
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    signInShow: state.signInShow,
    signUpShow: state.signUpShow,
    signOutShow: state.signOutShow
  }
}

export default connect(mapStateToProps, actions)(Header)
