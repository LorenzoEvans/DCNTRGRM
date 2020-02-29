// import blockstack
import * as blockstack from 'blockstack';
import { UserSession } from 'blockstack';

const userSession = new UserSession();

const IsPending = (userSession) => {
  if (userSession.isSignInPending()) {
    // do something with param
    userSession.handlePendingSignIn().then(userData => {
      const profile = userData.profile;
      window.location = window.location.origin;
      return profile;
    })
  }
}

// UserSession.redirectToSignIn
// UserSession.isSignInPending
// UserSession.handlePendingSignIn
// UserSession.loadUserData

// User clicks Bstack sign in button => redirto

export default IsPending