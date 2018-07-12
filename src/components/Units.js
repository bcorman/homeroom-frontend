import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Item } from 'semantic-ui-react'
import Unit from './Unit'

class Units extends Component {
  render() {
    if (this.props.units) {

      let units = this.props.units.map((unit, index) => {
        return <Unit key={index} content={unit} />
      })
      return (
        <Item.Group>
          {units}
        </Item.Group>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {units: state.classes.currentClass.units}
}
export default withRouter(connect(mapStateToProps)(Units))
