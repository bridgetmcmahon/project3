import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from '../Firebase';

import Nav from './layout/Nav';
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import UserInfo from './users/UserInfo';
import Appointments from './appointments/Appointments';
import AppointmentForm from './appointments/AppointmentForm';
import Chatroom from './chatroom/Chatroom';
import NotFound from './pages/NotFound';
import Footer from './layout/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userLoggedIn: true,
        });
      }
    });
  }

  logout = () => {
    firebase.auth().signOut().then((user) => {
      this.setState({ userLoggedIn: false })
    });

    // this.props.history.push('/');
  }

  render() {
    return (
      <Router>
        <div>
          <Nav userLoggedIn={ this.state.userLoggedIn } logout={ this.logout } />
          <div className="container">
            <Switch>
              <Route user={ this.state.userLoggedIn } exact path="/" component={ Home } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/register" component={ Register } />
              <Route path="/user/:id" component={ UserInfo }/>
              <Route exact path="/appointments" component={ Appointments } />
              <Route exact path="/appointments/new" component={ AppointmentForm } />
              <Route path="/appointments/:id" component={ AppointmentForm } />
              <Route exact path="/chatroom" component={ Chatroom } />
              <Route component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
