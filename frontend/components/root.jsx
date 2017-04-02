import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import Privacy from './privacy'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/privacy" component={Privacy}>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
