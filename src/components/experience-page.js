import React, { Component } from 'react';
import './experience-page.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import ExperienceList from './experience-list';


class ExperiencePage extends Component {
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
                  <ExperienceList className="experiences" />
                  <Drawer
                      docked={false}
                      width={250}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}>

                      <AppBar title="Xperience" />
                      <MenuItem containerElement={<Link to="/dashboard" />} id="dashboard">Dashboard</MenuItem>
                      <MenuItem containerElement={<Link to="/experience-page" />} id="experiences">Experiences</MenuItem>
                      <MenuItem id="following">Following</MenuItem>
                      <MenuItem id="logout">Log Out</MenuItem>
                  </Drawer>
              </div>
          </div>
        );
    }
};

export default ExperiencePage;