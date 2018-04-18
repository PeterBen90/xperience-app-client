import React, { Component } from 'react';
import './login-form.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { loginUser } from '../actions';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleClose = this._handleClose.bind(this);
  }

  _handleClose() {
    this.setState({ open: false });
  }



  render() {
    const actions = [
      <FlatButton
        type="reset"
        label="Reset"
        secondary={true}
        style={{ float: 'left' }}
        />,
      <FlatButton
        type="submit"
        label="Submit"
        primary={true}
        />,
    ];

    return (
      <div className="main-background">
        <AppBar
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            title="Xperience"
            className="app-bar"
                  />
        <Dialog
          title="Log In"
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
          >
          <form onSubmit={(e) => {
              e.preventDefault();
              this.handleClose();

              const username = e.target.username.value;
              const password = e.target.password.value;

              this.props.dispatch(loginUser(username, password));
            }}>
            <p className="demo-account">Username: Demo</p>
            <p className="demo-account">Password: 12345</p>
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

export default connect()(LoginForm);
