import React, { Component } from 'react';
import "../styles/_globals.scss";
class SignIn extends Component {
  render () {
    const { handleSignIn} = this.props; // going to come from App
    return(
      <div>
        <h1 className="test-sass">DCNTRGM</h1>
        <div>
          <button onClick={handleSignIn}>Sign In With BlockStack</button>
        </div>
      </div>
    )
  }
}

export default SignIn