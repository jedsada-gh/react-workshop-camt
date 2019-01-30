import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListMovie from '../Components/ListMovie';
import ListFavorite from '../Components/favorite/list';
import Profile from '../Components/profile';

function RouteMenu(props) {
  return (
    <Switch>
      <Route
        path="/movies"
        exact
        render={() => {
          return (
            <ListMovie
              items={props.items}
              onItemMovieClick={props.onItemMovieClick}
            />
          );
        }}
      />
      <Route path="/favorite" exact component={ListFavorite} />
      <Route path="/profile" exact component={Profile} />
      <Redirect from="/*" exact to="/" />
    </Switch>
  );
}

export default RouteMenu;
