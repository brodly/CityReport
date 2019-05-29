import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import apiKey from '../../config';

const styles = {
  container: {
    width: '75%'
  },
  map: {
    width: '100%',
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
      initialCenter: { lat: 34.1867746, lng: -118.3951641 },
    };

    this.onMapClick    = this.onMapClick.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose       = this.onClose.bind(this);
  }

  onMapClick(props, e) {
    const { google } = this.props
    console.log(e.google)
    console.log(google.maps);
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

  render() {
    const { initialCenter } = this.state;
    const { docs: markers, google } = this.props;
    const { container, map } = styles;

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map
        google={google}
        zoom={14}
        style={map}
        containerStyle={container}
        initialCenter={initialCenter}
        onClick={this.onMapClick}>
        {markers.map(m => (
          <Marker
            key={m._id}
            onClick={this.onMarkerClick}
            title={m.address}
            name={m.requesttype}
            position={{ lat: m.latitude, lng: m.longitude }} />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapContainer);
