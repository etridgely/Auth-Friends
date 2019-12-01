import React from 'react';
import { Form } from 'semantic-ui-react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.login}>
          <Form.Group>
          <Form.Input
            placeholder="Username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <Form.Button content= "Log in" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Login;