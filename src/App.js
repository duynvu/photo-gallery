import React, { useState, useEffect } from 'react';
import './App.css';
import PhotoContainer from './components/PhotoContainer.js';
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from 'react-modal';
import ImageUpload from './components/ImageUpload.js';
import PhotoModal from './components/PhotoModal.js';
import {
  setIntitalPhotos,
  getPhotosFromLocalStorage,
  getRandomImages,
} from './utils';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    height: '80vh',
    naxWidth: '80vw',
  }
};

function App() {
  if (getPhotosFromLocalStorage().length === 0) {
    setIntitalPhotos();
  }
  const [photos, setPhotos] = useState(getPhotosFromLocalStorage());
  // const [isLoading, setIsLoading] = useState(false); // used for infinite scroll in the future
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState({});
  const [isUpload, setIsUpload] = useState(false);

  const fetchMoreData = () => {
    const a = new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log(photos.length);
        resolve(getRandomImages());
      }, 500);
    })
    // setIsLoading(true); 
    a.then((result) => {
      setPhotos([...photos, ...result]);
      console.log(photos);
      // setIsLoading(false);
    }).catch((err) => console.log(err));
  }

  const openImgModal = (photo) => {
    setIsModalOpen(true);
    setModalImg(photo);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setIsUpload(false);
  }

  const previousModalImage = () => {
    let index = findIndex();
    index = index === 0 ? index : index - 1;
    setModalImg(photos[index]);
  }

  const nextModalImage = () => {
    let index = findIndex();
    index = index === photos.length ? index : index + 1;
    setModalImg(photos[index]);
  }

  const findIndex = () => photos.findIndex((p) => modalImg.id === p.id);

  const uploadPhoto = (photo) => {
    setPhotos([photo, ...photos]);
    closeModal();
  }

  const openUploadModal = () => {
    setIsModalOpen(true);
    setIsUpload(true);
  }

  return (
    <div className="App">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {isUpload && <ImageUpload uploadPhoto={uploadPhoto} />}
        {!isUpload &&
          <PhotoModal
            modalImg={modalImg}
            nextModalImage={nextModalImage}
            previousModalImage={previousModalImage}
          />}
      </Modal>
      <div className="header">
        <h1>Photo Gallery</h1>
        <p className="description">
          created by <a href="https://github.com/duynvu">@duynvu</a>
        </p>
        <button onClick={openUploadModal}>Upload</button>
      </div>
      <hr />
      <div className="c">
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <PhotoContainer photos={photos} onPhotoClick={openImgModal} />
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
