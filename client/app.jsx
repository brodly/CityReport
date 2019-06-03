import React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';

import {
  MapContainer,
  SubmitForm,
  Topbar,
  Report,
 } from './components';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedListItem: null,
    }

    this.fetchData          = this.fetchData.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
  }

  fetchData() {
    const issues = [
      'Graffiti Removal',
      'Single Streetlight Issue',
      'Multiple Streetlight Issue',
    ];

    const query = issues.map((issue) => `requesttype=${issue}&`).join('').replace(/&\s*$/, "");

    axios.get(`/search?${query}`)
      .then(res => { this.setState({ data: res.data }); })
      .catch(err => { throw err });
  }

  handleOnMouseEnter(selectedListItem) {
    // this.setState({ selectedListItem });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data, selectedListItem } = this.state;

    return (
      <div className="main">
        <Topbar />
        <SubmitForm docs={data}/>
        <MapContainer docs={data} selectedListItem={selectedListItem}/>
        <div className="sidebar">
          <List dense={true}>
            {data.map((report, index) => (
              <Report
                key={report._id}
                report={report}
                index={index}
                handleOnMouseEnter={this.handleOnMouseEnter}/>
            ))}
          </List>
        </div>
      </div>
    );
  }
}
