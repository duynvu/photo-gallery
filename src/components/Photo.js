import React from 'react';
import './Photo.css';

function Photo(props) {
  const {url, name, description} = props.photo;
  return (
    <div className="photo">
      <img src={url} alt={name} onClick={() => props.onPhotoClick(props.photo)} />
    </div>
  )
}

export default Photo;