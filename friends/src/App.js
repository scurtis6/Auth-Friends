import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
