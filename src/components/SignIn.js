import React, { Component } from 'react';

class SignIn extends Component {
  render () {
    const { handleSignIn} = this.props; // going to come from App
    return(
      <div className="uk-background-primary">
        <div>
          <h1 className="text-changer">Landing</h1>
          <button onClick={handleSignIn}>Sign In With BlockStack</button>
        </div>
      </div>
    )
  }
}

export default SignIn