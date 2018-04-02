import React from 'react';
import './dashboard-instructions.css';
import './float-grid.css';
import Search from '../images/search.png';
import Plus from '../images/plus.png';

const DashboardInstructions = (props) => {
  return (
    <div className="instructions-container">
        <h1 className="instructions-title">Dashboard</h1>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <h2 className="card-1">Step 1: Enter a Location</h2>
              <img className="search-image" src={Search} alt="search" />
                <ul>
                  <li>Search the location of your experrience in the Google Maps search bar.</li>
                  <li>Click on the marker on the map to reveal the info box.</li>
                  <li>Click the "Add Experience" button in the infobox to add your experience.</li>
                </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <h2 className="card-2">Step 2: Add Experience</h2>
              <img className="plus-image" src={Plus} alt="plus" />
                <ul>
                  <li>Fill out the form in the Add Experience window.</li>
                  <li>Once the form is filled out, click the "submit" button.</li>
                  <li>Finally, you can store and view your experiences at any date!</li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DashboardInstructions;