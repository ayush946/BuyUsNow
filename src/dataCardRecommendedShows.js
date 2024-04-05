import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dataCardRec.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'

const DataCard = ({ data }) => {
  // Get the file ID from the Google Drive URL
  const fileId = data.imgUrl.split('/d/')[1].split('/view')[0];

  // Create a new URL for the image
  const imgUrl = `https://drive.google.com/thumbnail?id=${fileId}`;

  const weather = data.weather.split(" ")[0] + ", "+data.weather.split(" ")[1] + " | "; 

  return (
    <div className="card text-bg-dark" style={{ width: '17rem'}}>
      <img src={imgUrl} className="card-img" alt="Event Thumbnail" style={{width: '100%', height: '100%'}} />
      <div className="card-img-overlay" style={{display:'flex' , flexDirection:'column',justifyContent:'flex-end', margin:'8px'}}>
        <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className="card-title">{data.eventName}</div>
          <div style={{fontSize:'12px'}}>{new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        <div className='card-text' style={{display:'flex',fontSize: '12px', justifyContent: 'space-between', alignItems:'center'}}>
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
