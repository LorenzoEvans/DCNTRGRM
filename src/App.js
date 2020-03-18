import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { UserSession } from 'blockstack';
import { appConfig } from './utils/utils';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
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

  handleSearch = (event, searchable) => {
    
  }

  componentDidMount() {
    IsPending(userSession);
  }
  render() {
    return (
      <div>
        <div>
          { !userSession.isUserSignedIn() ?
          <LandingPage userSession={userSession} handleSignIn={this.handleSignIn}/>
          : <Profile userSession={userSession} handleSignOut={this.handleSignOut} />}
          {/* We need to make the above the default app...this login process will become more complex */}
          {/* We want people to be able to access the site, then SignIn */}
          {/* After sign in, we don't want the profile to load, but the landing site page */}
          {/* However, we do want the profile loaded in another accessible component */}
        </div>
      </div>
      // SignIn component
      // Profile Component
    );
  }
}

export default App;
