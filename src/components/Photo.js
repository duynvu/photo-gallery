import React, { useState, useEffect } from 'react';
import './Photo.css';

function Photo(props) {
  const {url, name, description} = props.photo;
  return (
    <div className="photo">
      <img src={url} alt={description}  />
    </div>
  )
}

export default Photo;