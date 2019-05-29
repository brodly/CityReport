import React, { Component } from 'react';

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { address, requesttype } = this.props.docs;

    return (
      <div className="report">
        <div id="title">{address}</div>
        <div id="desc">{requesttype}</div>
        <input onSubmit={this.handleSubmit} type="submit" value="Update" />
        <input onSubmit={this.handleSubmit} type="submit" value="Delete" />
      </div>
    );
  }
}