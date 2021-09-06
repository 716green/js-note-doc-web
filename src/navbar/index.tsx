import React, { useEffect, useState, useContext } from 'react';
import UserAuthContext, {
  ICurrentUser,
  initialUserState,
} from '../context/user-state';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useLocalForage } from '../hooks/use-local-forage';

const Navbar: React.FC = () => {
  const [loginButtonText, setLoginButtonText] = useState<string>('Log In');
  const [user, setUser] = useState<ICurrentUser>(initialUserState);
  const userAuthCtx = useContext(UserAuthContext);

  useEffect(() => {
    setUser(userAuthCtx.user);

    const userState = {
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
    };
    setUser(userState);

    setLoginButtonText(userAuthCtx.userIsLoggedIn ? 'Log Out' : 'Log In');
    if (!userAuthCtx.userIsLoggedIn) {
      userAuthCtx.tryCachedUser();
    }
  }, [userAuthCtx]);

  const userAuthHandler = () => {
    if (!userAuthCtx.userIsLoggedIn) {
      userAuthCtx.signUserIn();
      console.log(`${user.email} is signed in`);
    } else {
      useLocalForage({
        type: 'delete',
        storeName: 'user',
        itemName: 'user',
      });
      userAuthCtx.signUserOut();
      console.log('User is signed out');
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <h1 className="title">JS NoteDoc {userAuthCtx.user.email}</h1>
        </a>

        <a
          href="/"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>

          <a href="/" className="navbar-item">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="/" className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a href="/" className="navbar-item">
                About
              </a>
              <a href="/" className="navbar-item">
                Jobs
              </a>
              <a href="/" className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a href="/" className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button
                className="gh-button button is-primary"
                onClick={userAuthHandler}>
                <i className="fab fa-github" />
                <strong style={{ marginLeft: '10px' }}>
                  {loginButtonText}
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
