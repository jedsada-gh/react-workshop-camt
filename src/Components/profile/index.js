import React, { Component } from 'react';
import ListMovie from '../ListMovie';

class Profile extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch('https://workshopup.herokuapp.com/movie')
      .then(response => response.json())
      .then(movies => this.setState({ items: movies.results }));
  }

  render() {
    return <ListMovie items={this.state.items} />;
  }
}

export default Profile;
