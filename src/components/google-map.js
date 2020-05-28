import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./google-map-marker";

const GoogleMap = () => {
  const [center, setCenter] = useState({ lat: 38.1047, lng: -122.2159 });
  const [zoom, setZoom] = useState(11);
  const getMapOptions = maps => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "on" }] }]
    };
  };
  return (
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "key" }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker
          lat={38.1047}
          lng={-122.2159}
          name="My Marker"
          color="red"
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;