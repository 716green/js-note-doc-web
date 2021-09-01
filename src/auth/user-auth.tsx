import React, { useState } from 'react';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './user-auth.css';

interface GHCredential {
  accessToken: any;
}

const provider = new GithubAuthProvider();

const UserAuth: React.FC = () => {
  const [token, setToken] = useState<any>('');
  const [user, setUser] = useState<any>('');

  const auth = getAuth();
  const signinHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential: GHCredential =
          GithubAuthProvider.credentialFromResult(result) as any;
        setToken(credential.accessToken);

        // The signed-in user info.
        setUser(result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GithubAuthProvider.credentialFromError(error);

        // todo - display errors
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div className="user-auth">
      <section className="login-area">
        <h2 className="title">Login with GitHub</h2>
        <div className="actions">
          <button
            className="gh-button button is-primary is-rounded"
            onClick={signinHandler}>
            <i className="fab fa-github"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserAuth;
