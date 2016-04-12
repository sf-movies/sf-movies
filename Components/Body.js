import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import FontAwesome from 'react-fontawesome';

class Body extends React.Component {
  render(){
    return (
        <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyBFiuLTGZSwhBzGqkSdyiQIyqnu1tjb6Ew'}}
        center={[37.773972, -122.431297]}
        zoom={12}
        style={{width: '100%', height: 400}}
        >
        <div lat={37.773972} lng={-122.431297}><FontAwesome name="film" size="2x"/></div>
        </GoogleMap>
    );
  }
}

export default Body;
