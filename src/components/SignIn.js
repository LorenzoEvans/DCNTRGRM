import React, { Component } from 'react';
import "../styles/_globals.scss";
class SignIn extends Component {
  render () {
    const { handleSignIn} = this.props; // going to come from App
    return(
      <div className="flex-row-between bg-primary">
        <h1 className="site-name">DCNTRGM</h1>
          <button className="blockstack-sign-in" onClick={handleSignIn}>Sign In With BlockStack</button>
      </div>
    )
  }
}

export default SignIn