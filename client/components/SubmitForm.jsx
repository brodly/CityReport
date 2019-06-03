import React, { Component } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const defaultState = {
  location: '',
  serviceType: '',
  serviceLocation: '',
  fname: '',
  lname: '',
  email: '',
  phone: '',
  desc: '',
}

export default class SubmitForm extends Component {
  constructor() {
    super();
    this.state        = defaultState;
    this.onChange     = this.onChange.bind(this);
    this.closeForm    = this.closeForm.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    }
  };

  closeForm() {
    document.querySelector(".submit-form").style.display = "none";
  }

  onCloseClick() {
    this.closeForm();
  }

  handleSubmit(e) {
    this.closeForm();
    axios.post('/submit', this.state)
      .then((res) => console.log(res))
      .catch((err) => console.error('Error submiting'))
    this.setState(defaultState);
    e.preventDefault();
  }

  render() {
    const {
      location,
      serviceType,
      serviceLocation,
      fname,
      lname,
      email,
      phone,
      desc,
    } = this.state;

    return (
      <div className="submit-form">
        <form noValidate autoComplete="off">
          <div>
            <div class="title">
              <Typography variant="h6">Report an issue</Typography>
            </div>
            <div class="row">
              <div>
                <InputLabel shrink>Service Type</InputLabel>
                <Select
                  value={serviceType}
                  onChange={this.onChange('serviceType')}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="pothole">Pothole</MenuItem>
                  <MenuItem value="graffiti">Graffiti</MenuItem>
                  <MenuItem value="single-streetlight">Single Streetlight</MenuItem>
                  <MenuItem value="multiple-streetlight">Multiple Streetlight</MenuItem>
                </Select>
                <FormHelperText>Select Issue</FormHelperText>
              </div>
              <div>
                <InputLabel shrink>Location</InputLabel>
                <Select
                  value={serviceLocation}
                  onChange={this.onChange('serviceLocation')}>
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="alley">Alley</MenuItem>
                  <MenuItem value="street">Street</MenuItem>
                </Select>
                <FormHelperText>Select location of issue</FormHelperText>
              </div>
            </div>
            <div class="row">
              <FormControl>
                <TextField
                  id="location"
                  label="Address of issue"
                  value={location}
                  onChange={this.onChange('location')}
                  margin="dense"/>
                <FormHelperText>Examples: "14410 Sylvan St" or "Sunset Blvd / Vermont Ave"</FormHelperText>
              </FormControl>
            </div>
            <div class="row">
            <FormControl fullWidth>
              <TextField
                id="desc"
                label="Description of issue"
                value={desc}
                onChange={this.onChange('desc')}
                margin="dense"
                rows='3'
                multiline/>
                <FormHelperText shrink>Max 750 characters</FormHelperText>
              </FormControl>
            </div>
          </div>
          <br/>
          <div>
            <div class="title">
              <Typography variant="h6">Contact Information</Typography>
              <InputLabel shrink>Enter contact information or leave blank to submit anonymously</InputLabel>
            </div>
            <div class="row">
              <TextField
                id="first-name"
                label="First Name"
                value={fname}
                onChange={this.onChange('fname')}
                margin="dense"/>
              <TextField
                id="last-name"
                label="Last Name"
                value={lname}
                onChange={this.onChange('lname')}
                margin="dense"/>
            </div>
            <div class="row">
              <TextField
                id="email"
                label="Email"
                value={email}
                onChange={this.onChange('email')}
                margin="dense"/>
              <TextField
                id="phone"
                label="Telephone"
                value={phone}
                onChange={this.onChange('phone')}
                margin="dense"/>
            </div>
          </div>
        </form>
        <div class="footer">
          <Button edge="start" color="primary" variant="contained" onClick={this.handleSubmit}>Submit</Button>
          <Button edge="end" color="secondary" onClick={this.onCloseClick}>Close</Button>
        </div>
      </div>
    );
  }
};
