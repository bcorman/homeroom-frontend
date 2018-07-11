import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Header from './components/Header'
import AsideContainer from './containers/AsideContainer'
import MainContainer from './containers/MainContainer'
import AnnouncementsContainer from './containers/AnnouncementsContainer'
import ClassContainer from './containers/ClassContainer'
import Routes from './Routes'

class App extends Component {
  render() {



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
    );
  }
}



export default App
