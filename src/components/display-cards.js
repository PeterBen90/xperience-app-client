import React from 'react';
import './display-cards.css'
import './float-grid.css'

const DisplayCards = (props) => {
  return (
    <div className="row">
        <div className="display-container">
          <h1 className="title">How It Works</h1>
          <div className="col-4">
            <div className="box about">
              <h2 className="card-title">About</h2>
              <p className="card-content">Xperience lets you capture small moments of your life and post them. With Xperience you will be able to create a profile and store as many experiences you like. With features that allow you to follow other Xperience users, you will be able to create new memories, while having a place to relive old memories, as well.  </p>
            </div>
          </div>

          <div className="col-4">
            <div className="box how-to">
              <h2 className="card-title">How To</h2>
              <p className="card-content">First, choose a city on the interactive map in your dashboard. Second, add a new experience to your growing list of experiences. Third, share you experiences with your friends and view theirs as well,</p>
            </div>
          </div>

          <div className="col-4">
            <div className="box get-started">
              <h2 className="card-title">Get Started!</h2>
              <p className="card-content">Create a free account here (Link) or register from the side bar to start tracking your experiences now.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DisplayCards;