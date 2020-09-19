import React, { useRef, useEffect } from 'react';
import { object, number } from 'prop-types';

import MapContainer from './styled';

const Map = ({ center, zoom, style })  => {
  const mapRef = useRef();

  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);

  return (
    <MapContainer
      ref={mapRef}
      style={style}
      id="map"
    ></MapContainer>
  );
};

MapSecondary.propTypes = {
    center: object.isRequired,
    zoom: number.isRequired,
    style: object,
}

export default Map;