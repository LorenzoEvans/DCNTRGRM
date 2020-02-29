import React, { Component } from 'react';

class SignIn extends Component {
  render () {
    const { handleSignIn} = this.props; // going to come from App
    return(
      <div>
        <div>
          <h1>Landing</h1>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    )
  }
}

export default SignIn