import React, { Component } from 'react';
import './add-experience-modal.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

class AddExperienceModal extends Component {
  state = {
    open: false,
  };

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
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];


    return (
      <div>
        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Add Experience"
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <form onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }>
              <TextField name="experience-title" hintText="Experience Title"/>
              <DatePicker hintText="Date Picker" />
              <TextField
                hintText="How was your experience?"
                multiLine={true}
                rows={2}
                rowsMax={10}
              />
              <p className="recommendation">Would you recommend this experience?</p>
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
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

export default AddExperienceModal;