import React, { Component } from 'react';
import { Card } from 'antd';
import TextTruncate from 'react-text-truncate';
import { connect } from 'react-redux';

const { Meta } = Card;

const mapDispatchToProps = dispatch => {
  return {
    onItemMovieClick: item =>
      dispatch({
        type: 'click_item',
        payload: item
      })
  };
};

class ItemFavorite extends Component {
  render() {
    const item = this.props.item;
    return (
      <Card
        onClick={() => {
          this.props.onItemMovieClick(item);
        }}
        hoverable
        cover={<img src={item.image_url} />}
      >
        <Meta
          title={item.title}
          description={
            <TextTruncate
              line={1}
              truncateText="…"
              text={item.overview}
              textTruncateChild={<a href="#">Read more</a>}
            />
          }
        />
      </Card>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ItemFavorite);
