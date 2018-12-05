import React, { Component } from 'react';

export default class Report extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      title: 'Default Report Title',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    
    const { title } = this.state;

    return (
      <div className="report">
        <h2>{title}</h2>
        <input onSubmit={this.handleSubmit} type="submit" value="Update" />
        <input onSubmit={this.handleSubmit} type="submit" value="Delete" />
      </div>
    );
  }
}