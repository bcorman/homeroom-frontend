import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Units extends Component {
  render() {
    console.log('units')
    return (
      <div>
        Units
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
export default withRouter(connect(mapStateToProps)(Units))
