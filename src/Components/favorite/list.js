import React, { Component } from 'react';
import { List } from 'antd';
import ItemFavorite from './item';

class ListFavorite extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    const jsonStr = localStorage.getItem('list-fav');
    if (jsonStr) {
      const items = JSON.parse(jsonStr);
      this.setState({ items });
    }
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.items}
          renderItem={item => (
            <List.Item>
              <ItemFavorite
                item={item}
                onItemMovieClick={this.props.onItemMovieClick}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ListFavorite;
