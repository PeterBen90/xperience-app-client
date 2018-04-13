import React, { Component } from 'react';
import './experience-list.css';
import { connect } from 'react-redux';
import { fetchExperiences } from '../actions';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class ExperienceList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchExperiences())
  }

  render() {
    return (
      <div className="experience-container">
        {this.props.experiences.map((experience, index) => (
          <div key={index}>
            <Card containerStyle={{backgroundColor:'#00838F', border: '2px solid grey'}}>
              <CardHeader
                titleStyle={{fontSize: '30px', marginLeft: '20px', color: '#212121'}}
                title={experience.title}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <RaisedButton label="Edit" style={{marginLeft: '25px'}} />
                <RaisedButton label="Delete" style={{marginLeft: '25px'}} />
              </CardActions>
              <CardText style={{fontSize: '16px', marginLeft: '20px'}} expandable={true}>
                <div><p>DATE:</p> {experience.date}</div>
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
  console.log(state);

    return {
      experiences: state.experienceReducer.experiences
    }
}

export default connect(mapStateToProps)(ExperienceList);


