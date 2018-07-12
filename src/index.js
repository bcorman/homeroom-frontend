import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import { AUTH_USER, LIST_CLASSES, LIST_FACULTY } from './actions/types'


let token = localStorage.getItem('token')

let faculty = JSON.parse(localStorage.getItem('faculty'))
let classes = JSON.parse(localStorage.getItem('classes'))

let user = JSON.parse(localStorage.getItem('user'))


const store = configureStore();

if (faculty && classes) {
  store.dispatch({type: LIST_FACULTY, payload: faculty})
  store.dispatch({type: LIST_CLASSES, payload: classes})
}

if (token && user) {
  store.dispatch({type: AUTH_USER, payload: user })
}



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
