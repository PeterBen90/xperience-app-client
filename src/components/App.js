import React from 'react';
import './App.css'
import Home from './home';
import {Router, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import ExperiencePage from './experience-page';
import history from '../history';


const App = (props) => {
  return (
    <Router history={history}>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/experience-page" component={ExperiencePage} />
        </div>
    </Router>
  );
};

export default App;