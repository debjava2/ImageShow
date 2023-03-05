import React, { useState } from 'react';
import SearchBar from './Componenets/SearchBar';
import searchImage from './api';
import ImageList from './Componenets/ImageList';
function App() {
  const[images,setImages]=useState([])
  const handleSubmit= async (term)=>{
    const result= await searchImage(term);
    setImages(result)
   
  }
  
  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
