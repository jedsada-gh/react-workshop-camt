import React, { Component } from 'react';
import { List } from 'antd';
import ItemFavorite from './item';

class ListFavorite extends Component {
  render() {
    return (
      <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.props.items}
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
