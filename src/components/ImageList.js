import ImageCard from "./ImageCard"
import "./ImageList.css"

function ImageList({images}) {
  const renderImages = images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  } )
  return (
    <div className="image-list">{renderImages}</div>
  )
}

export default ImageList