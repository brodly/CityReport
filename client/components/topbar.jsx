import React, { Component } from 'react';

export default class Topbar extends Component {
  constructor() {
    super();
    this.state = {

    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    document.querySelector(".submit-form").style.display = "block"
  }

  render() {
    return (
      <div className="topbar">
        <label id="report">CityReport</label>
        <button onClick={this.onButtonClick}>Submit New Ticket</button>
      </div>
    );
  }
};