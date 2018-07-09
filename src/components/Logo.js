import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Logo extends Component {
  render() {
    return (
      <FontAwesome
        className='fas fa-graduation-cap'
        id='logo'
        name='fas fa-graduation-cap'
        size='2x'
      />
    )
  }
}
