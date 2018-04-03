import React, { Component } from 'react';
import './registration-form.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class RegistrationForm extends Component {
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
      />,
    ];


    return (
      <div style={{display: `block`}}>
        <RaisedButton className="reg-button" label="Register" onClick={this.handleOpen} />
        <Dialog
            title="Registration"
            modal={true}
            open={this.state.open}
            autoScrollBodyContent={true}
          >
           <form onSubmit={(e) => { e.preventDefault(); this.handleClose(); }}>
            <TextField name="username" hintText="Username" required={true}/><br />
            <TextField name="pwd" type="password" hintText="Password" required={true}/>
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
              {actions}
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default RegistrationForm;