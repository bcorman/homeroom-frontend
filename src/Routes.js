import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import AnnouncementsContainer from './containers/AnnouncementsContainer'
import ClassContainer from './containers/ClassContainer'

class Routes extends Component {


  render() {

    let classes = this.props.classes.classes
    let classRoutes = classes.map((classRoom, index) => {
      let url = (`/classes/grade${classRoom.gradeLevel}/${classRoom.subject}`)
      return <Route  path={url} exact key={index} render={() => <ClassContainer currentClass={classRoom} key={index} />}/>
    })

    return (

      <Switch>
        <Route path='/main' exact component={AnnouncementsContainer} />
        <Route path='/classes/:_id' component={ClassContainer} />

      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Routes)
