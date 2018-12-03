import React from 'react';
import Map from './map';
import Sidebar from './sidebar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Map />
        <Sidebar />
      </div>
    );
  }
}

export default App;
