import React, { Component } from 'react';

class SignIn extends Component {
  render () {
    const { handleSignIn} = this.props; // going to come from App
    return(
      <div className="uk-background-default">
        <div className="uk-background-default">
          <h1 className="uk-background-default">Landing</h1>
          <button onClick={handleSignIn}>Sign In With Blockstack</button>
        </div>
      </div>
    )
  }
}

export default SignIn