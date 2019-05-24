import React, { useState, useEffect } from 'react';
import './Photo.css';

function Photo(props) {
  const {url, name, description} = props.photo;
  return (
    <div className="photo">
      <img src={url} alt={description} onClick={() => props.onPhotoClick(props.photo)} />
    </div>
  )
}

export default Photo;