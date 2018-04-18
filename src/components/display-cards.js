import React from 'react';
import './display-cards.css';
import './float-grid.css';
import World from '../images/world.png';
import Maps from '../images/map.png';
import Phone from '../images/start.png';
import RegistrationForm from './registration-form';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const DisplayCards = (props) => {
  return (
    <div className="row">
        <div className="display-container">
          <h1 className="title">How It Works</h1>
          <div className="col-4">
            <div className="box about">
              <h2 className="card-title">About</h2>
              <img className="about-image" src={World} alt="earth" />
              <p className="card-content">Xperience lets you capture small moments of your life and post them. With Xperience you will be able store as many experiences you like. You will be able to create new memories, while having a place to relive old memories, as well.  </p>
            </div>
          </div>

          <div className="col-4">
            <div className="box how-to">
              <h2 className="card-title">How To</h2>
              <img className="how-to-image" src={Maps} alt="map" />
              <p className="card-content-2">First, choose a city on the interactive map in your dashboard. Second, add a new experience to your growing list of experiences. Third, share you experiences with your friends and family.</p>
            </div>
          </div>

          <div className="col-4">
            <div className="box get-started">
              <h2 className="card-title">Get Started!</h2>
              <img className="start-image" src={Phone} alt="phone" />
              <p className="card-content-3">Create a free account here or register from the side bar to start tracking your experiences now! (Click login to use demo account) </p>
              <RegistrationForm />
              <MenuItem containerElement={<Link to="/login-form" />} id="login">Log In</MenuItem>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DisplayCards;