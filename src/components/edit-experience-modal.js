import React, { Component } from 'react';
import './edit-experience-modal.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import { editExperience } from '../actions';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};


class EditExperienceModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          open: false,
          experienceId: props.experience._id,
          title: props.experience.title,
          date: props.experience.date,
          location: props.experience.location,
          details: props.experience.details,
          recommendation: props.experience.recommendation

      };
  }

  handleOpen = () => {
    this.setState({open: true});
  };
f
  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Update"
        primary={true}
        onClick={() => {
          this.props.dispatch(editExperience(this.state))
          this.handleClose()
        }}

      />,
    ];


    return (
      <div>
        <RaisedButton label="Edit" onClick={this.handleOpen} style={{marginLeft: '25px', marginBottom: '5px'}} />
        <Dialog
          title="Edit Experience"
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
              <TextField
                name="title"
                hintText="Experience Title"
                required={true}
                onChange={(event, newValue) => this.setState({title: newValue})}
                value={this.state.title}
              />
              <DatePicker
                name="date"
                hintText="Date of Experience"
                autoOk={true}
                required={true}
                onChange={(event, newValue) => this.setState({date: newValue})}
                value={new Date(this.state.date)}
              />
              <TextField
                name="location"
                hintText="Location"
                required={true}
                onChange={(event, newValue) => this.setState({location: newValue})}
                value={this.state.location}
              /><br />
              <TextField
                floatingLabelText="How was your experience?"
                name="details"
                multiLine={true}
                rows={2}
                rowsMax={20}
                required={true}
                value={this.state.details}
                onChange={(event, newValue) => this.setState({details: newValue})}
              /><br />
              <p className="recommendation">Would you recommend this experience?</p>
              <RadioButtonGroup
                name="recommendation"
                required={true}
                onChange={(event, newValue) => this.setState({recommendation: newValue})}
                valueSelected={this.state.recommendation}
              >
                  <RadioButton
                    value="Yes"
                    label="Yes"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="No"
                    label="No"
                    style={styles.radioButton}
                  />
              </RadioButtonGroup>
              <div style={{ textAlign: 'right', padding: 8, margin: '8px -24px -24px -24px' }}>
                {actions}
              </div>
        </Dialog>
      </div>
    );
  }
}


export default connect()(EditExperienceModal);