import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListMovie from '../Components/ListMovie';
import Profile from '../Components/favorite/list';
import ListFavorite from '../Components/profile/index';

function TabMenu(props) {
  return (
    <div>
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
    </div>
  );
}

export default TabMenu;
