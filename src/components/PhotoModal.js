import React from 'react';
import './PhotoModal.css';

export default function PhotoModal(props) {
    return (
        <div className="photoModal">
            <div>
                <img src={props.modalImg.url} alt={props.modalImg.name} />
                <div>
                    <button onClick={props.previousModalImage}>Previous</button>
                    <button style={{ float: 'right' }} onClick={props.nextModalImage}>Next</button>
                </div>
            </div>
            <div>
                <p><strong>{props.modalImg.name}</strong></p>
                <p>{props.modalImg.description}</p>
            </div>
        </div>
    )
}