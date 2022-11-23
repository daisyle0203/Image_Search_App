// import React from "react"
import "./ImageList.css"
import ImageCard from "./ImageCard"

// const ImageList = (props) => {
//   const images = props.images.map((image) => {
//     return <ImageShow key={image.id} image={image} />
//   })

//   return <div className="image-list">{images}</div>
// }
// export default ImageList

function ImageList({images}) {
  const renderImages = images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  })
  return <div className="image-list">{renderImages}</div>
}

export default ImageList
