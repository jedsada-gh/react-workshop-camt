import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './Login';
import MainPage from './Main';

function Routes() {
  return (
    <div style={{ width: '100%' }}>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/movies" component={MainPage} />
    </div>
  );
}

export default Routes;
