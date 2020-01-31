import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.scss';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='links'>
            <Link to='/login'>Login</Link>
            <Link to='/friends'>My Friends Page</Link>
            <Link to='/addFriend'>Add a Friend</Link>
        </div>
        <Switch>
          <PrivateRoute path='/friends' component={FriendsList} />
          <PrivateRoute path='/addFriend' component={FriendsForm} />
          <Route path='/login' component={LoginPage} />
          <Route component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
