import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import Header from './components/Header'
import AsideContainer from './containers/AsideContainer'
import MainContainer from './containers/MainContainer'
import LandingPage from './components/LandingPage'

class App extends Component {
  render() {

    if (this.props.auth.authenticated) {
      return (
        <div>
          <Header />
          <Grid>
            <Grid.Column width={16}>
              <Grid.Row>
                <Grid columns={2}>
                  <AsideContainer />
                  <MainContainer />
                </Grid>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <LandingPage />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)
