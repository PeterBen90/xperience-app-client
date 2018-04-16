import React, { Component } from 'react';
import './experience-page.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import ExperienceList from './experience-list';
import { logoutUser } from '../actions';
import { connect } from 'react-redux';


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
                      style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
                  />
                  <h1 className="experience-header">Experiences</h1>
                  <ExperienceList className="experiences" />
                  <Drawer
                      docked={false}
                      width={250}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}>

                      <AppBar title="Xperience" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                      <MenuItem containerElement={<Link to="/" />} id="home">Home</MenuItem>
                      <MenuItem containerElement={<Link to="/dashboard" />} id="dashboard">Dashboard</MenuItem>
                      <MenuItem containerElement={<Link to="/experience-page" />} id="experiences">Experiences</MenuItem>
                      <MenuItem onClick={() => this.props.dispatch(logoutUser())} id="logout">Log Out</MenuItem>
                  </Drawer>
              </div>
          </div>
        );
    }
};

export default connect()(ExperiencePage);