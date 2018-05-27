import React, { Component } from 'react';
import './home.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Header from './header';
import DisplayCards from './display-cards';
import RegistrationForm from './registration-form';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    scrollToCards(){
        scroll.scrollTo(900);
    }


    render() {
        return (
          <div>
              <div className="main-display">
                  <AppBar
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      title="Xperience"
                      onLeftIconButtonClick={this.handleToggle}
                      className="app-bar"
                      style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
                  />
                  <Header />
                  <Drawer
                      docked={false}
                      width={250}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}>

                      <AppBar title="Xperience" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                      <RegistrationForm />
                      <MenuItem containerElement={<Link to="/login-form" />} id="login">Log In</MenuItem>
                  </Drawer>
                  <div className="container">
                      <a onClick={this.scrollToCards} href="#display-cards" className="arrow down">Down</a>
                  </div>
              </div>
              <div id="display-cards" className="instructions-display">
                  <DisplayCards />
              </div>
              <div>
                <Footer />
              </div>
          </div>
        );
    }
}

export default Home;