import React, { Component } from 'react';

export default class SubmitForm extends Component {
  constructor() {
    super();
    this.state = {

    };

    this.closeForm     = this.closeForm.bind(this);
    this.onCloseClick  = this.onCloseClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  closeForm() {
    document.querySelector(".submit-form").style.display = "none";
  }

  onCloseClick() {
    this.closeForm();
  }

  onSubmitClick(e) {
    e.preventDefault();
    this.closeForm();
    alert('Report submitted!');
  }

  render() {
    return (
      <div className="submit-form">
        <div>
          <label id="report">Report an issue</label>
          <button onClick={this.onCloseClick} style={{float: "right"}}>X</button>
        </div>
        <select>
          <option value="pothole">Pothole</option>
          <option value="hydrant">Fire Hydrant</option>
          <option value="lamppost">Lamp Post</option>
          <option value="manhole">Manhole</option>
        </select>
        <br/>
        <form>
          First name: <input type="text" name="fname"/><br/>
          Last name: <input type="text" name="lname"/><br/>
          Email: <input type="text" name="email" /><br />
          Telephone: <input type="text" name="telephone" /><br />
          Description of Issue: <input type="text" name="issue" /><br />
          <input type="submit" value="Submit" onClick={this.onSubmitClick}/>
        </form>
      </div>

    );
  }
};
