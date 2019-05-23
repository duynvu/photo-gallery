import React, { useState, useEffect } from 'react';
import './App.css';
// import Unsplash, { toJson } from 'unsplash-js'; 
import PexelsAPI from 'pexels-api-wrapper';
import Photo from './components/Photo.js';

const pexelsApiKey = "563492ad6f917000010000018ec994e4c8de410393f6f76bd4ca62b3";

// const key = {
//   applicationId: "2cdd6a5568d8d3c6ec6aab4fd244819b4b51809365cd47710d21cafea6699e0b",
//   secret: "e8a20c872d2525cc2b2a7ba49cef087d403579f01932ca58e532c6290d9d2bcb"
// }
// const fakeKey = {
//   applicationId: "abc",
//   secret: "abc"
// }

const sampleImages = [
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
  // const unsplash = new Unsplash(fakeKey);
  const pexelsClient = new PexelsAPI(pexelsApiKey);

  const [photos, setPhotos] = useState(sampleImages);
  
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


  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <hr/>
      <div className="container">
        {photos.map((p, index) => <Photo photo={p} key={index} />)}
      </div>
    </div>
  );
}

export default App;
