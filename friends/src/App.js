import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';

function App() {

  return (
    <Router>
        <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
        <Route component={Login} />
        </Switch>       
    </Router>
  );
}

export default App;
