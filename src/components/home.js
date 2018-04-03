import React, { Component } from 'react';
import './home.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Header from './header';
import DisplayCards from './display-cards';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});


    render() {
        return (
          <div>
              <div className="main-display">
                  <AppBar
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      title="Xperience"
                      onLeftIconButtonClick={this.handleToggle}
                      className="app-bar"
                  />
                  <Header />
                  <Drawer
                      docked={false}
                      width={250}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}>

                      <AppBar title="Xperience" />
                      <MenuItem id="register">Register</MenuItem>
                      <MenuItem id="login">Log In</MenuItem>
                  </Drawer>
                  <div className="container">
                      <a href="#display-cards" className="arrow down">Down</a>
                  </div>
              </div>
              <div id="display-cards" className="instructions-display">
                  <DisplayCards />
              </div>
          </div>
        );
    }
}

export default Home;