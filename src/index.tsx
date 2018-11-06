// import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';


import './index.css';

import Main from './Main';


// const history = createBrowserHistory();
ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root') as HTMLElement
);
