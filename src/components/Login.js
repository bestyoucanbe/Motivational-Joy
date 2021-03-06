import React, { Component } from "react"
import { withRouter } from "react-router"
import "./Login.css"
import { apiUrl } from "./../modules/api"

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
    return fetch(`${apiUrl}/users?q=${this.state.username}`).then(
      data => data.json()
    )
  }

  postUser(newUser) {
    return fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json())
  }

  //For logging in a user
  findCurrentUser = event => {
    event.preventDefault()
    console.log("click works")
    if (this.state.username === "" || this.state.password === "") {
      window.alert("Please fill in all fields")
    } else {
      //The getUser function shown above fetches the data of the first item matching the user input field.
      this.getUser().then(data => {
        //If there is a value returned, i.e., that it is NOT undefined, then...
        if (data[0]) {
          //If the what is in the input fields match what is existing in the users resource, then:
          //1.  Set Session Storage
          //2.  Call the setAuthState function in Motivation Joy to set set the value of authenticated
          //3.  Set the page to where it should go next--i.e., the main landing page!
          if (
            this.state.username === data[0].username &&
            this.state.password === data[0].password
          ) {
            sessionStorage.setItem("id", data[0].id)
            this.props.setAuthState()
            this.props.history.push("/My_Photos")
          }
        } else {
          window.alert("Please use a valid login or register")
        }
      })
      // })
    }
  }

  //For registering a user
  addThisUser = event => {
    event.preventDefault()
    if (this.state.username === "" || this.state.password === "") {
      window.alert("Please fill in all fields")
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password
      }
      this.getUser().then(data => {
        //Checking for the presence of a value in the data[0] location, i.e., that it is not undefined
        if (data[0]) {
          if (
            //If the user and password exists in the database already...
            this.state.username === data[0].username &&
            this.state.password === data[0].password
          ) {
            window.alert("You already exist in our system!")
            sessionStorage.setItem("id", data[0].id)
            this.props.setAuthState()
            this.props.history.push("/My_Photos")
          } else if (
            //If the user exists in the database but the password is incorrect...
            this.state.username === data[0].username &&
            this.state.password !== data[0].password
          ) {
            window.alert(
              "You already exist in our system. Please enter the correct password and press Login."
            )
          }
        } else {
          //Register the user...
          this.postUser(user).then(postedUser => {
            sessionStorage.setItem("id", postedUser.id)
            this.props.setAuthState()
            this.props.history.push("/My_Photos")
          })
        }
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
        <button onClick={this.findCurrentUser} className="btn btn-primary mb-5">
          Login
        </button>
        <div className="registerinfo">
          <label className="registermessage mr-3">
            Not a user yet? Enter username and password fields above and then
          </label>
          <a href="#" className="btn btn-secondary" onClick={this.addThisUser}>
            Click Here to Register
          </a>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)
