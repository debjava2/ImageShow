import React from 'react'
import ImageShow from './ImageShow'
import '../css/ImageList.css'
function ImageList({images}) {
  console.log(images);
  const renderImage=images.map((item)=>{
    return <ImageShow key={item.id} image={item}/>
  })
  return (
    <div className='image-list'>ImageList :{images.length}
      {renderImage}
    </div>
  )
}

export default ImageList