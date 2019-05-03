import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListMovie from '../Components/ListMovie';

function RouteMenu(props) {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return <ListMovie items={props.items} />;
        }}
      />
      <Redirect from="/*" exact to="/" />
    </Switch>
  );
}

export default RouteMenu;
