import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to="/protected">My Friends Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path='/protected' component={FriendsList} />
          <Route path='/login' component={LoginPage} />
          <Route component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
