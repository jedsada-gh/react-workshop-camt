import React, { Component } from 'react';
import { Form, Button, Input, Icon, message } from 'antd';
import { withRouter } from 'react-router-dom';

const KEY_USER_DATA = 'user_data';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  navigateToMainPage = () => {
    const { history } = this.props;
    history.push('/movies');
  };

  componentDidMount() {
    const jsonStr = localStorage.getItem(KEY_USER_DATA);
    const isLoggedIn = jsonStr && JSON.parse(jsonStr).isLoggedIn;
    if (isLoggedIn) {
      this.navigateToMainPage();
    }
  }

  onEmailChange = event => {
    const email = event.target.value;
    this.setState({ email });
  };

  onPasswordChange = event => {
    const password = event.target.value;
    this.setState({ password });
  };

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(String(password));
  }

  onSubmitFormLogin = e => {
    e.preventDefault();
    const isValid = this.validateEmail(this.state.email);
    const isValidePassword = this.validatePassword(this.state.password);
    if (isValid && isValidePassword) {
      localStorage.setItem(
        KEY_USER_DATA,
        JSON.stringify({
          isLoggedIn: true
        })
      );
      this.navigateToMainPage();
    } else {
      message.error('Email or Password invalid!', 1);
    }
  };

  render() {
    return (
      <div style={{ width: '30%', margin: '0 auto' }}>
        <h2>Login</h2>
        <Form onSubmit={this.onSubmitFormLogin}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Email"
              onChange={this.onEmailChange}
            />
          </Form.Item>

          <Form.Item>
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
