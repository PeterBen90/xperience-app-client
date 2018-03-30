import React, { Component } from 'react';
import './dashboard.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MapContainer from './map-container';


class Dashboard extends Component {
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
              <div>
                  <AppBar
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      title="Xperience"
                      onLeftIconButtonClick={this.handleToggle}
                      className="app-bar"
                  />
                  <MapContainer />
                  <Drawer
                      docked={false}
                      width={250}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}>

                      <AppBar title="Xperience" />
                      <MenuItem id="register">Dashboard</MenuItem>
                      <MenuItem id="login">Experiences</MenuItem>
                      <MenuItem id="following">Following</MenuItem>
                      <MenuItem id="logout">Log Out</MenuItem>
                  </Drawer>
              </div>
          </div>
        );
    }
};

export default Dashboard;