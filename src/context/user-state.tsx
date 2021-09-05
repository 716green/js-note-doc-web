// The provider will provide the values of the context to the child elements

import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useState } from 'react';
import { userAuth } from '../firebase';

export interface ICurrentUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

interface IUserAuthContextProviderProps {
  children: any;
}

export const initialUserState = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
};

// Capitalized because this will become a React component
const UserAuthContext = createContext({
  userIsLoggedIn: false,
  user: initialUserState,

  // methods defined below for better auto-complete
  signUserIn: (): void => {},
  signUserOut: (): void => {},
});

// This is a regular React component that creates a listener on the data within the context object
// When a datapoint is updated within that context, it will force a refresh on all items within that context
export function UserAuthContextProvider(props: IUserAuthContextProviderProps) {
  const provider = new GithubAuthProvider();

  const [currentUser, setCurrentUser] =
    useState<ICurrentUser>(initialUserState);

  // Methods that will be able to modify context values to force updates
  const signUserIn = () => {
    signInWithPopup(userAuth, provider)
      .then(({ user: { uid, email, displayName, photoURL } }) => {
        console.log({ uid, email, displayName, photoURL });

        // Set State
        const currentUser: ICurrentUser = {
          uid: uid as string,
          email: email as string,
          displayName: displayName as string,
          photoURL: photoURL as string,
        };

        setCurrentUser(currentUser);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.email;
        const credential = GithubAuthProvider.credentialFromError(err);
        // todo - display errors
        alert(err);
        console.log(err, errorCode, errorMessage, email, credential);
      });
  };

  const signUserOut = () => {
    signOut(userAuth)
      .then(() => {
        setCurrentUser(initialUserState);
        console.log('Signed Out');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const context = {
    // When either of these values change, the child components will force refresh
    user: currentUser,
    userIsLoggedIn: currentUser.uid != '',
    // Method pointers, also match these in the original createContext object
    signUserIn: signUserIn,
    signUserOut: signUserOut,
  };

  return (
    // The context object is passed to the Provider as the value attribute
    // It can be accessed elsewhere with useContext(UserAuthContext)
    <UserAuthContext.Provider value={context}>
      {props.children}
    </UserAuthContext.Provider>
  );
}

//* Export the context object as the default
export default UserAuthContext;
