import React, { Component } from "react"
import { withRouter } from "react-router"
import "./Login.css"

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  //Change the state above based on User Input-->Username
  handleFieldChangeUsername = event => {
    this.setState({ username: event.target.value })
  }

  //Change the state above based on User Input-->Password
  handleFieldChangePassword = event => {
    this.setState({ password: event.target.value })
  }

  //Fetch the value from the users resource for the username put into the input field (if the data exists, of course!)
  getUser = () => {
    return fetch(`http://localhost:1717/users?q=${this.state.username}`).then(
      data => data.json()
    )
  }

  findCurrentUser = event => {
    event.preventDefault()
    console.log("click works")
    if (this.state.username === "" || this.state.password === "") {
      window.alert("Please fill out missing section")
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password
      }
      //user ==> The above object containing the username and password obtained from user input in username and password fields
      //this sets a callback function--that gets executed after the state has been set
      this.setState(user, () => {
        //The getUser function is shown above!
        this.getUser().then(data => {
          console.log("data from getUser", data)
          //Console log the value of state...what is in Username and Password?
          console.log("this.state", this.state)
          //If the what is in the input fields match what is existing in the users resource, then:
          //1.  Set Session Storage
          //2.  Call the setAuthState function in Motivation Joy to set set the value of authenticated
          //3.  Set the page to where it should go next--i.e., the main landing page!
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
      <div className="loginform">
        <h2>Welcome to Motivation Joy</h2>
        <div className="usernameinfo">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            onChange={this.handleFieldChangeUsername}
          />
        </div>
        <div className="passwordinfo">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            onChange={this.handleFieldChangePassword}
          />
        </div>
        <button onClick={this.findCurrentUser}>Login</button>
      </div>
    )
  }
}
export default withRouter(Login)
