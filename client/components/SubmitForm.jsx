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
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

const defaultState = {
  location: '',
  serviceType: '',
  requestType: '',
  serviceLocation: '',
  fname: '',
  lname: '',
  email: '',
  phone: '',
  desc: '',
}

const requests = [
  'Animal Related Services',
  'Investigations',
  'Parks',
  'Problems & Repairs',
  'Refuse & Pickups',
  'Sanitation Billing',
  'Street Problem/Repair',
  'Transportation',
  'Trees/Vegetation',
  'Other',
  'Feedback',
];

const issues = [
  'Barricade Removal',
  'Bus Pad/Landing',
  'Curb Repair',
  'Flooding',
  'General Street Inspection',
  'Guard/Warning Rail Maintenance',
  'Gutter Repair',
  'Land/Mud Slide',
  'Pothole - Small Asphalt Repair',
  'Sidewalk Repair',
  'Apply for Access Requests or Report a Sidewalk Problem',
  'Street Sweeping',
];

const locations = [
  'Alley',
  'Street',
];

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
    e.preventDefault();
    this.closeForm();

    axios.post('/submit', this.state)
      .then((res) => console.log(res))
      .catch((err) => console.error('Error submiting'))

    this.setState(defaultState);
  }

  render() {
    const {
      location,
      requestType,
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
        <Paper>
          <form noValidate autoComplete="off">
            <div>
              <div className="title">
                <Typography variant="h6">Report an issue</Typography>
              </div>
              <FormGroup className="row" style={{ display: 'flex', flexFlow: 'row nowrap'}}>
                <FormControl required>
                  <InputLabel>Request Type</InputLabel>
                  <Select
                    value={requestType}
                    onChange={this.onChange('requestType')}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    {requests.map((request, index) => (
                       <MenuItem key={index} value={request.split(" ")[0].toLowerCase()}>{request}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
                <FormControl required>
                  <InputLabel>Service Type</InputLabel>
                  <Select
                    value={serviceType}
                    onChange={this.onChange('serviceType')}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    {issues.map((issue, index) => (
                       <MenuItem key={index} value={issue.split(" ")[0].toLowerCase()}>{issue}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
                <FormControl required>
                  <InputLabel>Location</InputLabel>
                  <Select
                    value={serviceLocation}
                    onChange={this.onChange('serviceLocation')}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    {locations.map((loc, index) => (
                      <MenuItem key={index} value={loc.toLowerCase()}>{loc}</MenuItem>
                    ))}>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                  </FormControl>
              </FormGroup>
              <div className="row">
                <FormControl required fullWidth>
                  <InputLabel>Address of issue</InputLabel>
                  <Input
                    id="location"
                    value={location}
                    onChange={this.onChange('location')}
                    margin="dense"/>
                  <FormHelperText>Examples: "14410 Sylvan St" or "Sunset Blvd / Vermont Ave"</FormHelperText>
                </FormControl>
              </div>
              <div className="row">
              <FormControl required fullWidth>
                <InputLabel>Description of issue</InputLabel>
                <Input
                  id="desc"
                  value={desc}
                  onChange={this.onChange('desc')}
                  margin="dense"
                  rows='3'
                  multiline/>
                  <FormHelperText>Max 750 characters</FormHelperText>
                </FormControl>
              </div>
            </div>
            <br/>
            <div>
              <div className="title">
                <Typography variant="h6">Contact Information</Typography>
                <InputLabel shrink>Enter contact information or leave blank to submit anonymously</InputLabel>
              </div>
              <div className="row">
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
              <div className="row">
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
          <div className="footer">
            <Button edge="start" color="primary" variant="contained" onClick={this.handleSubmit}>Submit</Button>
            <Button edge="end" color="secondary" onClick={this.onCloseClick}>Close</Button>
          </div>
        </Paper>
      </div>
    );
  }
};
