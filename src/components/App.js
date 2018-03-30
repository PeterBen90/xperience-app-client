import React from 'react';
import './App.css'
import Home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './dashboard'

const App = (props) => {
  return (
    <Router>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
    </Router>
  );
};

export default App;