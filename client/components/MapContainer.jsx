import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

export class InfoWindowEx extends Component {
  constructor(props) {
    super(props);
    this.infoWindowRef = React.createRef();
    this.onInfoWindowOpen = this.onInfoWindowOpen.bind(this);
    if (!this.containerElement) {
      this.containerElement = document.createElement(`div`);
    }
  }
  onInfoWindowOpen() {
    ReactDOM.render(React.Children.only(this.props.children), this.containerElement);
    this.infoWindowRef.current.infowindow.setContent(this.containerElement);
  }
  render() {
    return <InfoWindow onOpen={this.onInfoWindowOpen} ref={this.infoWindowRef} {...this.props}/>
  }
}

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

    this.onConfirmClick = this.onConfirmClick.bind(this);
    this.onMarkerClick  = this.onMarkerClick.bind(this);
    this.onClose        = this.onClose.bind(this);

    //Marker Image Setings
    this.pinColor          = "#3F51B5";
    this.pinLabel          = "A";
    this.pinSVGHole        = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
    this.labelOriginHole   = new this.props.google.maps.Point(12,15);
    this.pinSVGFilled      = "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z";
    this.labelOriginFilled = new this.props.google.maps.Point(12,9);

    // Marker Image Object
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

    // Marker Label Object
    this.label = {
      text: this.pinLabel,
      color: "white",
      fontSize: "12px",
    };
  }

  onConfirmClick() {
    const { selectedPlace } = this.state;
    const { submitData }    = this.props;

    const data = {
      location: selectedPlace.title,
      serviceType: selectedPlace.name,
      requestType: selectedPlace.name,
      serviceLocation: 'wall',
      contactType: 'other',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      desc: 'Submitted on behalf of CityReport',
    }

    submitData(data);
    this.onClose();
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
    const { container, map } = styles;
    const { docs, google }   = this.props;
    const {
      initialCenter,
      zoom,
      activeMarker,
      showingInfoWindow,
      selectedPlace,
    }   = this.state;

    const markers = docs.map((marker, index) => (
      <Marker
        shouldRender
        key={marker._id}
        title={marker.address}
        name={marker.requesttype}
        position={{ lat: marker.latitude, lng: marker.longitude }}
        icon={this.markerImage}
        onClick={this.onMarkerClick}
      />
    ));

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
        {markers}
        <InfoWindowEx
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h3>{selectedPlace.title}</h3>
            <h4>{selectedPlace.name}</h4>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={this.onConfirmClick}>
            Confirm
            </Button>
          </div>
        </InfoWindowEx>
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapContainer);
