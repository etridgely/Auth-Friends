import React from 'react';
import FriendCard from './FriendCard';
import AddFriend from './AddFriend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends/')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err));
  };


    render() {
      return (
        <div>
          <AddFriend/>
          <h2>Friends: </h2>
          <div>
            {this.state.friends.map(item => (
              <div key = {item.id}>
              <FriendCard name = {item.name}
                      age = {item.age}
                      email = {item.email}
                      id = {item.id} 
              />
              </div>
            ))}
          </div>
        </div>
      )
    }
}

export default FriendsList