import React, { Component } from 'react';
import './experience-list.css';
import './float-grid.css';
import { connect } from 'react-redux';
import { fetchExperiences } from '../actions';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Calendar from '../images/calendar.png';
import { deleteExperience } from '../actions';
import EditExperienceModal from './edit-experience-modal';


class ExperienceList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchExperiences())
  }

  render() {
    return (
      <div className="experience-container">
        {this.props.experiences.map((experience, index) => (
          <div className="col-4" key={experience._id}>
            <Card containerStyle={{ backgroundColor:'#00838F',
                                    border: '2px solid grey',
                                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                    marginBottom: '20px'
                                  }}>
              <CardHeader
                titleStyle={{fontSize: '25px', marginLeft: '20px', color: '#212121'}}
                title={experience.title}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <EditExperienceModal experience={experience} />
                <RaisedButton label="Delete" onClick={() => this.props.dispatch(deleteExperience(experience._id))} style={{marginLeft: '25px', marginBottom: '5px'}} />
                <img className="marker-icon" src={Calendar} alt="marker icon" />
              </CardActions>
              <CardText style={{fontSize: '16px', marginLeft: '20px'}} expandable={true}>
                <div><p>DATE:</p> {experience.date} (YYYY-MM-DD)</div>
                <div><p>LOCATION:</p> {experience.location}</div>
                <div><p>DETAILS:</p> {experience.details}</div>
                <div><p>RECOMMENDATION:</p> {experience.recommendation}</div>
              </CardText>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
      experiences: state.experienceReducer.experiences
    }
}

export default connect(mapStateToProps)(ExperienceList);


