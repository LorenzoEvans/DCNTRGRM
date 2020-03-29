import React, { Component } from 'react';
import "../styles/_globals.scss";
class SignIn extends Component {
  render () {
    const { handleSignIn} = this.props; // going to come from App
    return(
      <div>
        <nav className="nav-wrapper primary-dark flex-row-between">
            <h1 className="h1 nav-bar-text">DCNTRGM</h1>
            <a className="h1 nav-bar-text">FAQ</a>
            <h2 className="h1 nav-bar-text">About</h2>
        </nav>
        <button className="blockstack-sign-in" onClick={handleSignIn}>Sign In With BlockStack</button>
      </div>
    )
  }
}

export default SignIn