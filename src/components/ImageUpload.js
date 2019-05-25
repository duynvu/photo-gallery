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
          // localStorage.setItem("imgData", e.target.result);
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
    console.log(response.data.image.url);
    const newPhoto = savePhotoToLocalStorage(name, description, response.data.image.url);
    props.uploadPhoto(newPhoto);
  }

  // function showImage() {
  //   const data = getPhotosFromLocalStorage();
  //   console.log(data);
  //   var dataImage = localStorage.getItem('imgData');
  //   var bannerImg = document.getElementById('banner');
  //   // bannerImg.src = "data:image/png;base64," + dataImage;
  //   bannerImg.src = data[0].url;
  // }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nameInput">Name: </label>
        <input type="text" id="nameInput" className="form-control" required />
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input type="text" id="descriptionInput" className="form-control" required/><br/>
      </div>
      <div className="form-group">
        <input type="file" id="imageInput" onChange={handleUpload} />
        <img src="" id="imageShow" style={{width: '40%'}}/>
        {/* <button onClick="handleSubmit()">Save</button> */}
        <button>Upload</button>
      </div>
    </form>
  )
}

export default ImageUpload;