import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Sbeeh_tqqnDBmTlTTVT767VrEXs0jN9Kz2XKNe4JqJ0",
  },
})
