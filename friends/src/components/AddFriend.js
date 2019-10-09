import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {  Form } from 'semantic-ui-react';

class AddFriend extends React.Component {
    state = {
      name: '',
      age: '',
      email: '',
      id: ''
    };
  
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
      .post('/friends', this.state)
      .then(res=> {
          localStorage.setItem('id', res.data.payload);
      })
    };
  
    handleReset = () => {
      this.setState({
        name:'',
        age: '',
        email: '',
        id: '',
      });
    };
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Input
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                />
                <Form.Input
                placeholder="Age"
                name="age"
                value={this.state.age}
                onChange={this.handleInputChange}
                />
                <Form.Input
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                />
                <Form.Input
                placeholder="ID"
                name="id"
                value={this.state.id}
                onChange={this.handleInputChange}
                />
                <Form.Button content="Add Friend" />
            </Form.Group>
        </Form>
      );
    }
  }

  export default AddFriend