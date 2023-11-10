import React from 'react';

const GoogleMapsIframe = () => {
  return (
    <div>
      <h6>Encontranos en Google Maps</h6>
      <iframe
        title="Google Maps"
        width="200"
        height="100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4736661432535!2d-59.1458211!3d-37.3312934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9edc246ac5%3A0x25d89d782dd5c234!2sCnel.%20Brandsen%20498%2C%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1699654887272!5m2!1ses-419!2sar"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapsIframe;
