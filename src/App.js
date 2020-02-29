import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { UserSession } from 'blockstack';
import { appConfig } from './utils/utils';
import SignIn from './SignIn';
import Profile from './Profile';
import IsPending from './components/Authentication/BlockAuth';

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

  componentDidMount() {
    IsPending(userSession);
  }
  render() {
    return (
      <div>
        <div>
          { !userSession.isUserSignedIn() ?
          <SignIn userSession={userSession} handleSignIn={this.handleSignIn}/>
          : <Profile userSession={userSession} handleSignOut={this.handleSignOut} />}
        </div>
      </div>
      // SignIn component
      // Profile Component
    );
  }
}

export default App;
