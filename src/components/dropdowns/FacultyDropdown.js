import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

class FacultyDropdown extends Component {
  render() {
    return (
      <Dropdown item text='Faculty'>
        <Dropdown.Menu>
          <Dropdown.Item>Electronics</Dropdown.Item>
          <Dropdown.Item>Automotive</Dropdown.Item>
          <Dropdown.Item>Home</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default FacultyDropdown
