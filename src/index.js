// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"

// ReactDOM.render(<App />, document.querySelector("#root"))

import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
import searchImages from "./api/unsplash"

searchImages()

const el = document.getElementById("root")
const root = ReactDom.createRoot(el)

root.render(<App />)