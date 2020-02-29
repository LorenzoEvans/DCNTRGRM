import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { UserSession } from 'blockstack';
import { appconfig } from './utils/utils';

const userSession = new UserSession({appConfig}) // requires appconfig.

class App extends Component {
  
  handleSignIn = event => {
    event.preventDefault();
    userSession.redirectToSignIn(); // start blockstack sign in w/ new user sesh
  }

  handleSignOut = event => {
    event.preventDefault();
    userSession.signUserOut(window.location.origin) // why origin?
  }
  render() {
    return (
      // SignIn component
      // Profile Component
    );
  }
}

export default App;
