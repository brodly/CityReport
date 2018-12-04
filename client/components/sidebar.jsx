import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <label id="report">Reports</label>
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
          <input type="submit" value="Submit"/>
        </form>
      </div>
      
    );
  }
};
