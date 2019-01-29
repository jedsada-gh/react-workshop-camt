import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './Login';
import MainPage from './Main';

function Routes() {
  return (
    <div style={{ width: '100%' }}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route component={MainPage} />
      </Switch>
    </div>
  );
}

export default Routes;
