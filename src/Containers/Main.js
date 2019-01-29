import React, { Component } from 'react';
import { Spin, Modal, Button, Layout, Menu } from 'antd';
import RouteMenu from './RouteMenu';

const { Header, Content, Footer } = Layout;
const menus = ['movies', 'favorite', 'profile'];

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
    if (e.key != 'home') {
      path = `/${e.key}`;
    }
    this.props.history.replace(path);
  };

  render() {
    const item = this.state.itemMovie;
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
              <Content style={{ padding: '16px', marginTop: 64 }}>
                <RouteMenu
                  items={this.state.items}
                  onItemMovieClick={this.onItemMovieClick}
                />
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
