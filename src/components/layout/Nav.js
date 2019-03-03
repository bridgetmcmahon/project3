import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

class Nav extends Component {
  render() {
    return (
        <nav className="header">
          <div className="nav-bar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/appointments">Appointments</Link>
              </li>
              <li>
                <Link to="/">Chat</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Nav;