// import React from "react"
import { useState } from "react"
import SearchBar from "./components/SearchBar"
import searchImages from "./api/unsplash"
import ImageList from "./components/ImageList"

// class App extends React.Component {
//   state = { images: [] }

//   onSearchSubmit = async (term) => {
//     const response = await unsplash.get("/search/photos", {
//       params: { query: term },
//     })

//     this.setState({ images: response.data.results })
//   }

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <ImageList images={this.state.images} />
//       </div>
//     )
//    }
// }

// export default App

function App() {
  const [images, setImage] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)

    setImage(result)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  )
}

export default App
