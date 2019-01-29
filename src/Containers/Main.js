import React, { Component } from 'react';
import { Spin, Modal, Button } from 'antd';
import ListMovie from '../Components/ListMovie';

class Main extends Component {
  state = {
    items: [],
    isShowModal: false,
    itemMovie: null
  };

  onItemMovieClick = item => {
    this.setState({ isShowModal: true, itemMovie: item });
  };

  onModalClickOk = () => {
    // TODO: handle something click ok
    this.setState({ isShowModal: false });
  };

  onModalClickCancel = () => {
    this.setState({ isShowModal: false });
  };

  componentDidMount() {
    fetch('https://workshopup.herokuapp.com/movie')
      .then(response => response.json())
      .then(movies => this.setState({ items: movies.results }));
  }

  render() {
    const item = this.state.itemMovie;
    return (
      <div>
        {this.state.items.length > 0 ? (
          <ListMovie
            items={this.state.items}
            onItemMovieClick={this.onItemMovieClick}
          />
        ) : (
          <Spin size="large" />
        )}
        {item != null ? (
          <Modal
            width="40%"
            style={{ maxHeight: '70%' }}
            title={item.title}
            visible={this.state.isShowModal}
            onCancel={this.onModalClickCancel}
            footer={[
              <Button
                key="submit"
                type="primary"
                icon="heart"
                size="large"
                shape="circle"
                onClick={this.onClickFavorite}
              />,
              <Button
                key="submit"
                type="primary"
                icon="shopping-cart"
                size="large"
                shape="circle"
                onClick={this.onClickBuyTicket}
              />
            ]}
          >
            <img src={item.image_url} style={{ width: '100%' }} />
            <br />
            <br />
            <p>{item.overview}</p>
          </Modal>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Main;
