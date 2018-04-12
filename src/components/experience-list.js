import React, { Component } from 'react';
import './experience-list.css';
import { connect } from 'react-redux';
import { fetchExperiences } from '../actions';


class ExperienceList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchExperiences())
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.experiences.map((experience, index) => (
            <div key={index}>
              <li>
                {this.props.experience.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    experiences: state.experiences
})

export default connect(mapStateToProps)(ExperienceList);



