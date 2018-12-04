import React from 'react';

import Map from './components/map';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="topbar">
          <Topbar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="map">
          <Map />
        </div>
      </div>      
    );
  }
}

