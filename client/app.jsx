import React from 'react';
import axios from 'axios';
import Map from './components/map';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';
import Report from './components/report';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(val) {
    axios.get(`/${val}`)
      .then((res) => {
        this.setState({
          data: res.data,
        })
      })
      .catch(err => { throw err });
  }

  componentDidMount() {
    this.fetchData(1);
  }

  render() {
    const { data } = this.state;
    
    return (
      <div>
        <div className="topbar">
          <Topbar />
        </div>
        <div className="sidebar">
          <Sidebar />
          <Report props={data} />
          <Report props={data} />
        </div>
        <div className="map">
          <Map />
        </div>
      </div>      
    );
  }
}

