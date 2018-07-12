import React, { Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import FacultyDropdown from '../components/dropdowns/FacultyDropdown'
import ClassDropdown from '../components/dropdowns/ClassDropdown'

class AsideContainer extends Component {

  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Grid.Column width={4}>
        <Menu vertical>
          <Menu.Item>
            <Logo />
          </Menu.Item>
          <Menu.Item>
            <Menu.Item as={ Link } to='//'
              name='announcements'
              active={activeItem === 'announcements'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='calendar'
              active={activeItem === 'calendar'}
              onClick={this.handleItemClick}
            />
            <FacultyDropdown />
            <ClassDropdown />
            <Menu.Item
              name='useful documents'
              active={activeItem === 'documents'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Support</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
                E-mail Support
              </Menu.Item>

              <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                FAQs
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </Grid.Column>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error,
    user: state.auth.user,
    faculty: state.faculty,
    classes: state.classes
  }
}

export default connect(mapStateToProps)(AsideContainer)
