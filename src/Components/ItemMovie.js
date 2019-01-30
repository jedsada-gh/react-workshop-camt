import React from 'react';
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

function ItemMovie(props) {
  const item = props.item;
  return (
    <Card
      onClick={() => {
        props.onItemMovieClick(item);
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

export default connect(
  null,
  mapDispatchToProps
)(ItemMovie);
