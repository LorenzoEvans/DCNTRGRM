// import blockstack
import * as blockstack from 'blockstack';
import { UserSession } from 'blockstack';

const userSession = new UserSession();

if (userSession.isSignInPending()) {
  userSession.handlePendingSignIn()
             .then(userData => {
               const profile = userData.profile;
             })
}
// UserSession.redirectToSignIn
// UserSession.isSignInPending
// UserSession.handlePendingSignIn
// UserSession.loadUserData

// User clicks Bstack sign in button => redirto