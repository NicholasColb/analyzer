import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';


import './index.css';

import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
