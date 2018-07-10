import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Header from './components/Header'
import AsideContainer from './containers/AsideContainer'
import MainContainer from './containers/MainContainer'
import AnnouncementsContainer from './containers/AnnouncementsContainer'
import ClassContainer from './containers/ClassContainer'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {

    let classes = this.props.classes.classes
    let classRoutes = classes.map((classRoom, index) => {
      let url = (`/classes/grade${classRoom.gradeLevel}/${classRoom.subject}`)
      return <Route exact path={url}  key={index} render={() => <ClassContainer currentClass={classRoom} key={index} />}/>
    })

    return (
      <div>
        <Header />
        <Grid>
          <Grid.Column width={16}>
            <Grid.Row>
              <Grid columns={2}>
                <AsideContainer />
                <Switch>
                  {classRoutes}
                </Switch>
              </Grid>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}
let extra = <Route path='/' component={AnnouncementsContainer} />

export default connect(mapStateToProps)(App)
