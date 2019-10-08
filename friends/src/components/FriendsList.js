import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
      FriendsList: []
  };

  componentDidMount() {
      this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/data')
      .then(res => {
          console.log(res);
        // this.setState({

        // });
      })
      .catch(err => console.log(err));
  };

  formatData = () => {
      const formattedData = [];
      console.log(formattedData);
      return formattedData;
  }

  render() {
      return(
      <div>
          <p>Hello</p>
      </div>    
      )
  }
}

export default FriendsList