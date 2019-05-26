import React, { useState, useEffect } from 'react';
import './App.css';
// import Unsplash, { toJson } from 'unsplash-js'; 
// import PexelsAPI from 'pexels-api-wrapper';
import PhotoContainer from './components/PhotoContainer.js';
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from 'react-modal';
import ImageUpload from './components/ImageUpload.js';
import { setIntitalPhotos, getPhotosFromLocalStorage } from './utils';

// const pexelsApiKey = "563492ad6f917000010000018ec994e4c8de410393f6f76bd4ca62b3";

// const key = {
//   applicationId: "2cdd6a5568d8d3c6ec6aab4fd244819b4b51809365cd47710d21cafea6699e0b",
//   secret: "e8a20c872d2525cc2b2a7ba49cef087d403579f01932ca58e532c6290d9d2bcb"
// }
// const fakeKey = {
//   applicationId: "abc",
//   secret: "abc"
// }

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    // width: '60%',
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

const sampleImages = [
  {
    url: 'https://images.pexels.com/photos/203088/pexels-photo-203088.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: 'abc',
    description: 'abc'
  },
  {
    url: 'https://images.pexels.com/photos/1599946/pexels-photo-1599946.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: 'afiohaowiehfoah',
    description: 'ncaowjoef'
  },
  {
    url: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: 'awrgar',
    description: 'aergaergqergq'
  },
  {
    url: 'https://images.pexels.com/photos/1417651/pexels-photo-1417651.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: 'qerg',
    description: 'qergergqerg'
  },
  {
    url: 'https://images.pexels.com/photos/203088/pexels-photo-203088.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: 'qerg',
    description: 'qergqergqreg'
  },
  {
    url: 'https://images.pexels.com/photos/1599946/pexels-photo-1599946.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: 'q',
    description: 'gqergqe'
  },
  {
    url: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: '',
    description: ''
  },
  {
    url: 'https://images.pexels.com/photos/1417651/pexels-photo-1417651.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: '',
    description: ''
  },
  {
    url: 'https://images.pexels.com/photos/203088/pexels-photo-203088.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: '',
    description: ''
  },
  {
    url: 'https://images.pexels.com/photos/1599946/pexels-photo-1599946.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: '',
    description: ''
  },
  {
    url: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&h=350',
    name: '',
    description: ''
  },

]

function App() {
  if(getPhotosFromLocalStorage().length === 0) {
    setIntitalPhotos();
  }
  const [photos, setPhotos] = useState(getPhotosFromLocalStorage());
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState({});
  const [isUpload, setIsUpload] = useState(false);

  // useEffect(() => {
  //   pexelsClient.getCuratedPhotos(10, 1)
  //   .then((result) => {
  //       console.log(result);
  //     const newArray = result.photos.map((p) => {
  //       return {
  //         url: p.src.original,
  //         name: p.photographer,
  //         description: p.photographer_url,
  //       }
  //     });
  //     console.log(newArray);
  //     // setPhotos(photos.concat(newArray));
  //   })
  // })
  // pexelsClient.getCuratedPhotos(10, 1)
  // .then((result) => {
  //     console.log(result);
  //   const newArray = result.photos.map((p) => {
  //     return {
  //       url: p.src.original,
  //       name: p.photographer,
  //       description: p.photographer_url,
  //     }
  //   });
  //   // setPhotos(photos.concat(newArray));
  // })

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop
  //       === document.documentElement.offsetHeight && !isLoading
  //     ) {
  //       setIsLoading(true);
  //       console.log(window.innerHeight + document.documentElement.scrollTop);
  //       setPhotos([...photos, ...sampleImages]);
  //       setIsLoading(false);
  //       console.log([...photos]);
  //     }
  //   })
  // })

  const fetchMoreData = () => {
    const a = new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log(photos.length);
        resolve(sampleImages);
      }, 500);
    })
    setIsLoading(true);
    a.then((result) => {
      setPhotos([...photos, ...result]);
      setIsLoading(false);
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
    const index = findIndex() + 1;
    setModalImg(photos[index]);
  }

  const findIndex = () => photos.findIndex((p) => modalImg.url === p.url);

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
          <div style={customStyles.container}>
          <div style={{ paddingRight: '5px' }}>
            <img src={modalImg.url} style={customStyles.image} />
            <div>
              <button onClick={previousModalImage}>Previous</button>
              <button style={{ float: 'right' }} onClick={nextModalImage}>Next</button>
            </div>
          </div>
          <div style={{
            margin: '0 10px 0 10px',
          }}>
            <p><strong>{modalImg.name}</strong></p>
            <p>{modalImg.description}</p>
          </div>
        </div>
      }
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
