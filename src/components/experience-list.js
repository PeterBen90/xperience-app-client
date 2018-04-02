import React from 'react';
import './experience-list.css';
import { connect } from 'react-redux';


const ExperienceList = ({ experiences }) => (
  <ul>
    {experiences.map((experience, index) => (
      <div key={index}>
        <li>
          {experience.title}
        </li>
      </div>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
    experiences: state.experiences
})

export default connect(mapStateToProps)(ExperienceList);