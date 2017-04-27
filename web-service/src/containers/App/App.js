import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import { logoutAction } from '../../actions/auth';
import Header from '../../components/Header';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Profile from '../Profile';
import './App.css';


class App extends Component {
  render() {
    const { isAuthenticated, logout, user } = this.props;
    

    return (
      <Router>
        <div className="App">
          <Header 
            isAuthenticated={isAuthenticated}
            onLogout={logout}
            user={user}
          />
          <div className="app-content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <ProtectedRoute exact path="/profile" component={Profile} isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    logout: bindActionCreators(logoutAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
