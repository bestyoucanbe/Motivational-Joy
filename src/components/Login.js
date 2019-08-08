import React, { Component } from "react"
import { withRouter } from "react-router"

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
    console.log("statetochange", stateToChange)
  }

  getUser = () => {
    return fetch(`http://localhost:1717/users?q=${this.state.username}`).then(
      data => data.json()
    )
  }

  findCurrentUser = evt => {
    evt.preventDefault()
    console.log("click works")
    if (this.state.username === "" || this.state.password === "") {
      window.alert("Please fill out missing section")
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password
      }
      //this sets a callback function
      this.setState(user, () => {
        this.getUser().then(data => {
          console.log("data", data[0])
          console.log("this.state", this.state)
          if (
            this.state.username === data[0].username &&
            this.state.password === data[0].password
          ) {
            console.log("yup")
            sessionStorage.setItem("id", data[0].id)
            this.props.setAuthState()
            this.props.history.push("/My_Favorites")
          } else {
            window.alert("Please use a valid login or register")
          }
        })
      })
    }
  }

  render() {
    return (
      <div>
        <label>UserName:</label>
        <input type="text" id="username" onChange={this.handleFieldChange} />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          onChange={this.handleFieldChange}
        />
        <button onClick={this.findCurrentUser}>Submit</button>
      </div>
    )
  }
}
export default withRouter(Login)
//TODO: Delete this after Login/Registration and Logout works --FROM HERE--
// import React, { Component } from "react"
// import "./Login.css"

// export default class Login extends Component {
//   state = {
//     username: "",
//     password: ""
//   }

//   //Sets ID to be "username"/"password", and the value to be whatever
//   //is typed in.
//   handleFieldChange = event => {
//     const stateToChange = {}
//     stateToChange[event.target.id] = event.target.value
//     this.setState(stateToChange)
//   }
//   //prevent page reloading,
//   //sets login key to "valid",
//   //converts username/password to JSON
//   handleLogin = event => {
//     event.preventDefault()

//     fetch("http://localhost:1717/users")
//       .then(response => response.json())
//       .then(userList => {
//         let tempUserName = userList.find(
//           element =>
//             element.username.toLowerCase() ===
//               this.state.username.toLowerCase() &&
//             element.password.toLowerCase() === this.state.password.toLowerCase()
//         )
//         if (tempUserName) {
//           sessionStorage.setItem("Id", tempUserName.id)
//           this.props.history.push("/My_Favorites")
//         } else {
//           window.alert(
//             "Invalid login information. Please try again or register a new account."
//           )
//         }
//       })
//   }

//   render() {
//     //Renders Login Form
//     return (
//       <div className="card">
//         <form onSubmit={this.handleLogin}>
//           <h1 className="card-header">Sign In</h1>
//           <div className="card-body">
//             <label htmlFor="usernameInput">Username: </label>
//             <input
//               onChange={this.handleFieldChange}
//               type="text"
//               id="username"
//               placeholder="Enter UserId"
//               required
//               autoFocus=""
//               className="form-control mb-2"
//             />
//             <label htmlFor="passwordInput">Password: </label>
//             <input
//               onChange={this.handleFieldChange}
//               type="text"
//               id="password"
//               placeholder="Enter Password"
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="card-footer login-button-div">
//             <button
//               type="submit"
//               className="btn btn-primary btn-sm login-button"
//             >

//             </button>
//             {/* <button
//               type="button"
//               className="btn btn-info btn-sm login-button"
//               onClick={() => this.props.history.push("/register")}
//             >
//               Register New Account
//             </button> */}
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
//TODO: Delete this after Login/Registration and Logout works --END HERE--
