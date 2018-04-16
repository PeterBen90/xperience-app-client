import React, { Component } from 'react';
import './edit-experience-modal.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import { addExperience } from '../actions';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};


class EditExperienceModal extends Component {
  constructor(props) {
    console.log(props);
      super(props);
      this.state = {
          open: false,
          title: props.experiences.title,
      };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        type="reset"
        label="Reset"
        secondary={true}
        style={{ float: 'left' }}
        />,
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        type="submit"
        label="Submit"
        primary={true}
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
          <form>
              <TextField name="title" hintText="Experience Title" required={true} value={this.state.title}/>
              <DatePicker name="date" hintText="Date of Experience" autoOk={true} required={true} />
              <TextField name="location" hintText="Location" required={true} /><br />
              <TextField
                floatingLabelText="How was your experience?"
                name="details"
                multiLine={true}
                rows={2}
                rowsMax={20}
                required={true}
              /><br />
              <p className="recommendation">Would you recommend this experience?</p>
              <RadioButtonGroup name="recommendation" required={true}>
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
              <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                {actions}
              </div>
          </form>
        </Dialog>
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

export default connect(mapStateToProps)(EditExperienceModal);