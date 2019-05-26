import React, {useState} from 'react';
import './ImageUpload.css';
import { saveTemporaryImage, 
  savePhotoToLocalStorage,
  getPhotosFromLocalStorage,
  getImageURL } from '../utils'

function ImageUpload(props) {
  const [imgData, setImgData] = useState();
  function handleUpload() {
    const input = document.getElementById("imageInput");
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          document.getElementById("imageShow").src = e.target.result;
          localStorage.setItem("imgData", e.target.result);
          setImgData(e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value;
    const description = document.getElementById("descriptionInput").value;
    const response = await getImageURL(document.getElementById("imageShow"));
    // console.log(response.data.image.url);
    const newPhoto = savePhotoToLocalStorage(name, description, response.data.image.url);
    props.uploadPhoto(newPhoto);
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="form-group">
        <label htmlFor="nameInput">Name</label>
        <input type="text" id="nameInput" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="descriptionInput">Description</label>
        <input type="text" id="descriptionInput" className="form-control" required/><br/>
      </div>
      <div className="form-group">
        <input type="file" id="imageInput" onChange={handleUpload} />
        <img src="" id="imageShow"/>
        {/* <button onClick="handleSubmit()">Save</button> */}
      </div>
      <button>Upload</button>
    </form>
  )
}

export default ImageUpload;