import React from 'react';
import UserAuth from '../auth/user-auth';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <h1 className="title">JS NoteDoc</h1>
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
              <UserAuth />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
