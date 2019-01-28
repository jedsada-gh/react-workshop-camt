import React, { Component } from 'react';
import { Spin } from 'antd';
import ListMovie from '../Components/ListMovie';

class Main extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch('https://workshopup.herokuapp.com/movie')
      .then(response => response.json())
      .then(movies => this.setState({ items: movies.results }));
  }

  render() {
    return (
      <div>
        {this.state.items.length > 0 ? (
          <ListMovie items={this.state.items} />
        ) : (
          <Spin size="large" />
        )}
      </div>
    );
  }
}

export default Main;
