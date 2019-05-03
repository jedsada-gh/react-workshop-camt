import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../Components/profile';
import MainPage from './Main';

function Routes() {
  return (
    <div style={{ width: '100%' }}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/favorite" exact component={Profile} />
        <Route path="/profile" exact component={Profile} />
        {/* <Route component={MainPage} /> */}
      </Switch>
    </div>
  );
}

export default Routes;
