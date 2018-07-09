import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import { AUTH_USER } from './actions/types'


const token = localStorage.getItem('token')
const username = localStorage.getItem('user')

const store = configureStore();

if (token) {
  store.dispatch({type: AUTH_USER, payload: username })
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
