import React, { useState } from 'react';
import './PhotoModal.css';

export default function PhotoModal(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if(name === "name") {
            setName(value);
        } else {
            setDescription(name);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="photoModal">
            <div>
                <img src={props.modalImg.url} alt={props.modalImg.name} />
                <div>
                    <button onClick={props.previousModalImage}>Previous</button>
                    <button style={{ float: 'right' }} onClick={props.nextModalImage}>Next</button>
                </div>
            </div>
            {!isEdit && <div className="photoModalInfo">
                <div className="photoInfo">
                    <p><strong>{props.modalImg.name}</strong></p>
                    <p>{props.modalImg.description}</p>
                </div>
                <div className="photoEditButton">
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                </div>
            </div>}
            {isEdit && <div class="photoModalForm">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" 
                        value={props.modalImg.name} 
                        onChange={handleOnChange}/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" 
                        value={props.modalImg.description} 
                        onChange={handleOnChange}/>
                    </div>
                    <button onClick={() => setIsEdit(false)}>Submit</button>
                </form>
            </div>}
        </div>
    )
}