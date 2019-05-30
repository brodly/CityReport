import React, { Component } from 'react';
import axios from 'axios';

export default class SubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      serviceslist: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      desc: '',
    };

    this.onChange     = this.onChange.bind(this);
    this.closeForm    = this.closeForm.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  closeForm() {
    document.querySelector(".submit-form").style.display = "none";
  }

  onCloseClick() {
    this.closeForm();
  }

  handleSubmit(e) {
    this.closeForm();
    axios.post('/submit', this.state)
      .then((res)=> console.log(res))
    alert('Report submitted!');
    e.preventDefault();
  }

  render() {
    const {
      serviceslist,
      fname,
      lname,
      email,
      phone,
      desc,
    } = this.state;

    return (
      <div className="submit-form">
        <div id="header">
          <label id="report">Report an issue</label>
          <button onClick={this.onCloseClick} style={{float: "right"}}>X</button>
        </div>
        <select name="serviceslist" form="reportform" onChange={this.onChange} value={serviceslist}>
          <option value="pothole">Pothole</option>
          <option value="hydrant">Fire Hydrant</option>
          <option value="lamppost">Lamp Post</option>
          <option value="manhole">Manhole</option>
        </select>
        <br/>
        <form id="reportform" onSubmit={this.handleSubmit}>
          First name: <input type="text" name="fname" onChange={this.onChange} value={fname}/><br/>
          Last name: <input type="text" name="lname" onChange={this.onChange} value={lname}/><br/>
          Email: <input type="text" name="email" onChange={this.onChange} value={email}/><br />
          Telephone: <input type="text" name="phone" onChange={this.onChange} value={phone}/><br />
          Description of Issue: <input type="text" name="desc" onChange={this.onChange} value={desc}/><br />
          <input type="submit" value="Submit"/>
        </form>
      </div>

    );
  }
};
