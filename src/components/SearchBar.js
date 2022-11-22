// import React from "react"

// class SearchBar extends React.Component {
//   state = { term: "" }

//   onFormSubmit = (event) => {
//     event.preventDefault()

//     this.props.onSubmit(this.state.term)
//   }

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={(e) => this.setState({ term: e.target.value })}
//             />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// export default SearchBar
import { useState } from "react"

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("")

  const handleFormSubmit = (event) => {
   event.preventDefault()

   onSubmit("cats")
  }

  const handleChange = (event) => {
    //replace lowercase letters with empty string
    setTerm(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <input value={term} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default SearchBar
