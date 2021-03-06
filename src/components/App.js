import React, { Component } from 'react';
import './App.css'
import Home from './home';
import {Router, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import ExperiencePage from './experience-page';
import LoginForm from './login-form';
import history from '../history';
import { loginUserSuccess } from '../actions';
import { connect } from 'react-redux';


class App extends Component {


  componentDidMount() {
    if(localStorage.getItem('authToken')) {
      const authToken = localStorage.getItem('authToken')
      const userId = localStorage.getItem('userId')

      this.props.dispatch(loginUserSuccess(userId, authToken))
    }
  }

  render() {
    return (
      <Router history={history}>
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/experience-page" component={ExperiencePage} />
            <Route exact path="/login-form" component={LoginForm} />
          </div>
      </Router>
    );
  }
}



export default connect()(App);