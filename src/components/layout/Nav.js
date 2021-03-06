import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

class Nav extends Component {
  render() {
    return (
        <nav className="header">
          <div className="nav-bar">

          { this.props.userLoggedIn ? (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/appointments">Appointments</Link>
              </li>
              <li>
                <Link to="/chatroom">Chat</Link>
              </li>
              <li>
                <button className="logout" onClick={ this.props.logout }>Log Out</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          ) }
          </div>
        </nav>
    );
  }
}

export default Nav;
