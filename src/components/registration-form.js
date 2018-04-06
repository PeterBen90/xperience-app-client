import React, { Component } from 'react';
import './registration-form.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux';
import { registerUser } from '../actions';

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
        <MenuItem id="register" onClick={this.handleOpen}>Register</MenuItem>
        <Dialog
            title="Registration"
            modal={true}
            open={this.state.open}
            autoScrollBodyContent={true}
          >
          Create a username and password
          <form onSubmit={(e) => {
                e.preventDefault();
                this.handleClose();

                const username = e.target.username.value;
                const password = e.target.password.value;

                this.props.dispatch(registerUser(username, password));
            }}>
            <TextField name="username" type="text" hintText="Username" required={true}/><br />
            <TextField name="password" type="password" hintText="Password" required={true}/>
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
              {actions}
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default connect()(RegistrationForm);