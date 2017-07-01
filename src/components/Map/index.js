import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
// import classnames from 'classnames';

import './style.css';
import markerData from './Data/stores';

const SBZGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={6}
    defaultCenter={{ lat: 46.592211, lng: -120.546838 }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
            <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
              <div>{marker.infoContent}</div>
            </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default class Map extends Component {
  state = { markers: markerData }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
  }

  handleMarkerClick(targetMarker) {
    if (targetMarker.showInfo) {
      // Close info window if already shown
      this.handleMarkerClose(targetMarker);
    } else {
      this.setState({
        markers: this.state.markers.map(marker => {
          if (marker === targetMarker) {
            return {
              ...marker,
              showInfo: true,
            };
          }
          return marker;
        }),
      });
    }
 }

 handleMarkerClose(targetMarker) {
   this.setState({
     markers: this.state.markers.map(marker => {
       if (marker === targetMarker) {
         return {
           ...marker,
           showInfo: false,
         };
       }
       return marker;
     }),
   });
 }

  render() {
    return (
      <div>
        <SBZGoogleMap
          containerElement={
            <div style={{ height: 400, width: '100vw' }} />
          }
          mapElement={
            <div style={{ height: 400, width: '100vw' }} />
          }
          onMapLoad={this.handleMapLoad}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
        />
      </div>
    );
  }
}
