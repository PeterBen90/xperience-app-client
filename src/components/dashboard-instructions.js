import React from 'react';
import './dashboard-instructions.css';
import './float-grid.css';

const DashboardInstructions = (props) => {
  return (
    <div className="instructions-container">
        <h1 className="instructions-title">Dashboard</h1>
        <div class="row">
          <div class="col-6">
            <div class="card step-one">Step One</div>
          </div>

          <div class="col-6">
            <div class="card step-two">Step Two</div>
          </div>
      </div>
    </div>
  );
};

export default DashboardInstructions;