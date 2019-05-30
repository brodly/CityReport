import React from 'react';
import axios from 'axios';
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
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    axios.get(`/search`)
      .then(res => { this.setState({ data: res.data }); })
      .catch(err => { throw err });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data } = this.state;

    return (
      <div className="main">
        <Topbar />
        <SubmitForm docs={data}/>
        <MapContainer docs={data}/>
        <div className="sidebar">
          {data.map(report => (
            <Report key={report._id} report={report} />
          ))}
        </div>
      </div>
    );
  }
}

