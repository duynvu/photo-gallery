import React from 'react';
import './PhotoContainer.css';
import Photo from './Photo';

function PhotoContainer(props) {
    return (
        <div className="container">
            {props.photos.map((p, index) => <Photo photo={p} key={index} onPhotoClick={props.onPhotoClick}/>)}
        </div>
    )
}

export default PhotoContainer;