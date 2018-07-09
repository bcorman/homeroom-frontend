import React, { Component } from 'react';
import Header from './components/Header'
import AsideContainer from './containers/AsideContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AsideContainer />
      </div>
    );
  }
}

export default App;
