import React, { Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Logo from '../components/Logo'
import FacultyDropdown from '../components/dropdowns/FacultyDropdown'

class AsideContainer extends Component {

  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    console.log(this.props)
    return (
      <Grid.Column width={4}>
        <Menu vertical>
          <Menu.Item>
            <Logo />
          </Menu.Item>
          <Menu.Item>
            <Menu.Item
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
            <Menu.Item
              name='classes'
              active={activeItem === 'classes'}
              onClick={this.handleItemClick}
            />
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
    faculty: state.list.faculty
  }
}

export default connect(mapStateToProps)(AsideContainer)
