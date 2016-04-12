import React from 'react';
import GoogleMap from 'google-map-react';

class Body extends React.Component {

  //static defaultProps = {
  //   center: {lat: 59.938043, lng: 30.337157},
  //   zoom: 9
  // }

  render(){
    return (
        <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyBFiuLTGZSwhBzGqkSdyiQIyqnu1tjb6Ew'}}
        center={[37.773972, -122.431297]}
        zoom={12}
        style={{width: '100%', height: 400}}
        >
        <div lat={59.955413} lng={30.337844}>MyPlace</div>
        </GoogleMap>

    );
  }
}

export default Body;
