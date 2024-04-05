import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'

const DataCard = ({ data }) => {
  // Get the file ID from the Google Drive URL
  const fileId = data.imgUrl.split('/d/')[1].split('/view')[0];

  // Create a new URL for the image
  const imgUrl = `https://drive.google.com/thumbnail?id=${fileId}`;

  const weather = data.weather.split(" ")[0] + ", "+data.weather.split(" ")[1] + " | "; 

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imgUrl} className="card-img-top" alt="Event Thumbnail" />
      {/* Date: {new Date(data.date).toLocaleDateString()}<br /> */}
      <div className="card-body">
        <h5 className="card-title">{data.eventName}</h5>
        <div className='card-text text-body-secondary' style={{display:'flex', color: '#989090',fontSize: '12px', justifyContent: 'space-between', alignItems:'center'}}>
          <div style={{display:'flex', justifyContent: 'flex-start'}}>
            <div style={{display:'flex',alignItems:'center', marginLeft: '10px'}}>
              <div><FontAwesomeIcon icon={faLocationDot}/></div>
              <div>{data.cityName}<br /></div>
            </div>
           
          </div>
          <div style={{ display:'flex', justifyContent: 'flex-end'}}>
          {weather}
          {parseFloat(data.distanceKm).toFixed(2)} km
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
