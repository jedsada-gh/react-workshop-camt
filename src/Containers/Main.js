import React, { Component } from 'react';
import { Spin, Modal, Button, Layout, Menu, message } from 'antd';
import RouteMenu from './RouteMenu';
import { connect } from 'react-redux';

const { Header, Content, Footer } = Layout;
const menus = ['movies', 'favorite', 'profile'];

const mapStateToProps = state => {
  return {
    isShowDialog: state.isShowDialog,
    itemMovieClick: state.itemMovieDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDismissDialog: () =>
      dispatch({
        type: 'dismiss_dialog'
      }),
    onItemMovieClick: item =>
      dispatch({
        type: 'click_item',
        payload: item
      })
  };
};

class Main extends Component {
  state = {
    items: [],
    itemMovie: null,
    pathName: menus[0],
    favItems: []
  };

  onModalClickOk = () => {
    // TODO: handle something click ok
    this.props.onDismissDialog();
  };

  onModalClickCancel = () => {
    this.props.onDismissDialog();
  };

  componentDidMount() {
    const jsonStr = localStorage.getItem('list-fav');
    if (jsonStr) {
      const items = jsonStr && JSON.parse(jsonStr);
      this.setState({ favItems: items });
    }

    const { pathname } = this.props.location;
    var pathName = menus[0];
    if (pathname != '/') {
      pathName = pathname.replace('/', '');
      if (!menus.includes(pathName)) pathName = menus[0];
    }
    this.setState({ pathName });
    fetch('https://workshopup.herokuapp.com/movie')
      .then(response => response.json())
      .then(movies => this.setState({ items: movies.results }));
  }

  onMenuClick = e => {
    var path = '/';
    if (e.key != 'movies') {
      path = `/${e.key}`;
    }
    this.props.history.replace(path);
  };

  onClickFavorite = () => {
    const itemClick = this.props.itemMovieClick;
    const items = this.state.favItems;

    const result = items.find(item => {
      return item.title === itemClick.title;
    });

    if (result) {
      message.error('This item added favorite', 1);
    } else {
      items.push(itemClick);
      localStorage.setItem('list-fav', JSON.stringify(items));
      message.success('Saved your favorite movie', 1);
      this.onModalClickCancel();
    }
  };

  render() {
    const item = this.props.itemMovieClick;
    return (
      <div>
        {this.state.items.length > 0 ? (
          <div style={{ height: '100vh' }}>
            {' '}
            <Layout className="layout" style={{ background: 'white' }}>
              <Header
                style={{
                  padding: '0px',
                  position: 'fixed',
                  zIndex: 1,
                  width: '100%'
                }}
              >
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={[this.state.pathName]}
                  style={{ lineHeight: '64px' }}
                  onClick={e => {
                    this.onMenuClick(e);
                  }}
                >
                  <Menu.Item key={menus[0]}>Home</Menu.Item>
                  <Menu.Item key={menus[1]}>Favorite</Menu.Item>
                  <Menu.Item key={menus[2]}>Profile</Menu.Item>
                </Menu>
              </Header>
              <Content
                style={{
                  padding: '16px',
                  marginTop: 64,
                  minHeight: '600px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <RouteMenu items={this.state.items} />
              </Content>
              <Footer style={{ textAlign: 'center', background: 'white' }}>
                Movie Application Workshop @ CAMT
              </Footer>
            </Layout>
          </div>
        ) : (
          <Spin size="large" />
        )}
        {item != null ? (
          <Modal
            width="40%"
            style={{ maxHeight: '70%' }}
            title={item.title}
            visible={this.props.isShowDialog}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
