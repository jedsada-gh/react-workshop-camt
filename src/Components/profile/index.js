import React, { Component } from 'react';
import { Modal } from 'antd';

const KEY_USER_DATA = 'user_data';

class Profile extends Component {
  state = {
    email: '',
    isShowDialog: false
  };

  componentDidMount() {
    const jsonStr = localStorage.getItem(KEY_USER_DATA);
    this.setState({ email: JSON.parse(jsonStr).email });
  }

  showDialogConfirmLogout = () => {
    this.setState({ isShowDialog: true });
  };

  handleCancel = () => {
    this.setState({ isShowDialog: false });
  };

  handleOk = () => {
    localStorage.setItem(KEY_USER_DATA, JSON.stringify({ isLoggedIn: false }));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Email: {this.state.email}</h1>
        <button
          style={{
            padding: '16px 32px 16px 32px',
            background: 'pink',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer'
          }}
          onClick={this.showDialogConfirmLogout}
        >
          Logout
        </button>

        <Modal
          title="Logout"
          visible={this.state.isShowDialog}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Are you sure to logout?</p>
        </Modal>
      </div>
    );
  }
}

export default Profile;
