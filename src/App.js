import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from './components/Header'
import AsideContainer from './containers/AsideContainer'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <AsideContainer />
          <MainContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
