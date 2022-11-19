import axios from "axios"

const searchImages = async () => {
 const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: "Client-ID Sbeeh_tqqnDBmTlTTVT767VrEXs0jN9Kz2XKNe4JqJ0"
    },
    params: {
      query: "cats"
    }
  })
  console.log(response);
  return response
}

export default searchImages