// MapComponent.js

import React from 'react';

const MapComponent = ({ location, zoom, width, height }) => {
//   const mapUrl = `https://www.google.com/maps/embed/v1/place?q=${location}&zoom=${zoom}&key=YOUR_GOOGLE_MAPS_API_KEY`;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin`;

  return (
    <div>
      <iframe
        title="Google Map"
        width={width}
        height={height}
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapComponent;
