import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Button from '@material-ui/core/Button';

import apiKey from '../../config';

const styles = {
  container: {
    width: '75vw',
    height: '88vh',
  },
  map: {
    width: '100%',
    height: '100%',
    right: '56px',
    float: 'left',
  }
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      initialCenter: {
        lat: 34.0139008,
        lng: -118.3966708
      },
      zoom: 11,
    };

    this.onConfimClick = this.onConfimClick.bind(this);
    this.onMapClick    = this.onMapClick.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose       = this.onClose.bind(this);

    this.pinColor          = "#3F51B5";
    this.pinLabel          = "A";
    this.pinSVGHole        = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
    this.labelOriginHole   = new this.props.google.maps.Point(12,15);
    this.pinSVGFilled      = "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";
    this.labelOriginFilled = new this.props.google.maps.Point(12,9);

    this.markerImage = {
      path: this.pinSVGHole,
      anchor: new this.props.google.maps.Point(12,17),
      fillOpacity: .9,
      fillColor: this.pinColor,
      strokeWeight: .5,
      strokeColor: "white",
      scale: 1.35,
      labelOrigin: this.labelOriginHole,
    };

    this.label = {
      text: this.pinLabel,
      color: "white",
      fontSize: "12px",
    };
  }

  onConfimClick(e) {
    console.log(e);
    e.preventDefault();
  }

  onMapClick(props, e) {
    // const { google } = this.props
    // console.log(e.google)
    // console.log(google.maps);
  }

  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onClose (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  componentDidMount() {

  }

  render() {
    const { initialCenter, zoom } = this.state;
    const { docs: markers, google } = this.props;
    const { container, map } = styles;

    let userMarkers = markers.map((m, index) => {
        let userMarker = <Marker
          key={index}
          title={m.address}
          name={m.requesttype}
          position={{ lat: m.latitude, lng: m.longitude }}
          icon={this.markerImage}
          onClick={this.onMarkerClick}
          shouldRender={m.shouldRender}
        />
      m.shouldRender = false
      return userMarker
    })

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map
        google={google}
        zoom={zoom}
        style={map}
        containerStyle={container}
        initialCenter={initialCenter}
        onClick={this.onMapClick}>
        {userMarkers}
        {
          // markers.map(m => (
        //   <Marker
        //     key={m._id}
        //     onClick={this.onMarkerClick}
        //     title={m.address}
        //     name={m.requesttype}
        //     icon={this.markerImage}
        //     position={{ lat: m.latitude, lng: m.longitude }} />
        // ))
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h3>{this.state.selectedPlace.title}</h3>
            <h4>{this.state.selectedPlace.name}</h4>
            <a href="/confirm" onClick={this.onConfimClick}>Confirm</a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapContainer);
