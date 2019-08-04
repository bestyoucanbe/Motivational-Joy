import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Login extends Component {

state = {
  username: "",
  password: ""
}

handleFieldChange = (evt) => {
  const stateToChange = {}
  stateToChange[evt.target.id] = evt.target.value
  this.setState(stateToChange)
  console.log("statetochange",stateToChange)
}

getUser = () =>{
  return fetch (`http://localhost:1717/users?q=${this.state.username}`)
   .then(data => data.json())
}

findCurrentUser = evt => {
  evt.preventDefault();
  console.log("click works")
  if (this.state.username === "" || this.state.password === "") {
    window.alert("Please fill out missing section");
  } else {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    //this sets a callback function
    this.setState(user, () => {
      this.getUser()
        .then((data => {
          console.log("data", data[0])
          console.log("this.state", this.state)
            if (this.state.username === data[0].username && this.state.password === data[0].password){
              console.log("yup")
              sessionStorage.setItem("id", data[0].id)
              this.props.setAuthState()
              this.props.history.push("/My_Favorites")
            } else{
              window.alert("Please use a valid login or register")
            }
        }))
    })
    }
  };
  render() {
    return (
      <div>
        <label>UserName:</label>
        <input type="text" id="username" onChange={this.handleFieldChange}></input>
        <label>Password:</label>
        <input type="password" id="password" onChange={this.handleFieldChange}></input>
        <button onClick={this.findCurrentUser}>Submit</button>
      </div>
    )
  }
}
export default  withRouter (Login)