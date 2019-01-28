import React, { Component } from 'react';
import { Form, Button, Input, Icon } from 'antd';

class Login extends Component {

    state = {
        email : '',
        password: ''
    }

    onEmailChange = (event) => {
        const email = event.target.value
        this.setState({email})
    }

    onPasswordChange = (event) => {
        const password = event.target.value
        this.setState({password})
    }
    
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(password) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        return re.test(String(password));
    }

    onSubmitFormLogin = (e) => {
        e.preventDefault()
        const isValid = this.validateEmail(this.state.email)
        const isValidePassword = this.validatePassword(this.state.password)
        if (isValid && isValidePassword) {
            console.log(`email: ${this.state.email}`)
            console.log(`password: ${this.state.password}`)
        } else {
            console.log('WTF')
        }
    }
    
    render() {
        return (
            <div style={{ width:"30%" }}>
                <h2>Login</h2>
                <Form onSubmit={this.onSubmitFormLogin}>
                    <Form.Item>
                        <Input 
                            prefix={<Icon type="user"/>} 
                            placeholder="Email"
                            onChange={this.onEmailChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input 
                            prefix={<Icon type="lock"/>} 
                            type='password' 
                            placeholder="Password" 
                            onChange={this.onPasswordChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType="submit" type='primary'>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Login