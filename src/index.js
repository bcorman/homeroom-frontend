import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import { AUTH_USER } from './actions/types'


let token = localStorage.getItem('token')
let user = {
  name: localStorage.getItem('user'),
  email: localStorage.getItem('email')
}

const store = configureStore();

if (token && user) {
  store.dispatch({type: AUTH_USER, payload: user })
}
console.log(`in index.js ${user.name}`)


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
