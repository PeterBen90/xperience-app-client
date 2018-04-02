import React, { Component } from 'react';
import './add-experience-modal.css';
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


class AddExperienceModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          "open": false,
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
        onClick={this.handleClose}
      />,
    ];


    return (
      <div>
        <RaisedButton label="Add Experience" onClick={this.handleOpen} />
        <Dialog
          title="Add Experience"
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <form onSubmit={(e) => {
              e.preventDefault(); this.handleClose();

              let titleInput = e.target.titleInput.value;
              let dateInput = e.target.dateInput.value;
              let detailsInput = e.target.detailsInput.value;
              let recommendationInput = e.target.recommendationInput.value;

              this.props.addExperience(titleInput, dateInput, detailsInput, recommendationInput);
              e.target.titleInput.value = '';
              e.target.dateInput.value = '';
              e.target.detailsInput.value = '';
              e.target.recommendationInput.value = '';
            }}>
              <TextField name="titleInput" hintText="Experience Title" required />
              <DatePicker name="dateInput" hintText="Date of Experience" />
              <TextField
                floatingLabelText="How was your experience?"
                name="detailsInput"
                multiLine={true}
                rows={2}
                rowsMax={20}
                required
              />
              <p className="recommendation">Would you recommend this experience?</p>
              <RadioButtonGroup name="recommendationInput" defaultSelected="not_light" required>
                  <RadioButton
                    value="not_light"
                    label="Yes"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="light"
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

const mapDispatchToProps = (dispatch) => ({
  addExperience: (title, date, details, recommendation) => dispatch(addExperience(title, date, details, recommendation))
});

export default connect(null, mapDispatchToProps)(AddExperienceModal);