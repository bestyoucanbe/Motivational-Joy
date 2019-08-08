import React, { Component } from "react"
import NavBar from "./nav/NavBar" //Child component
import ApplicationViews from "./ApplicationViews" //Child component
import Login from "./Login"

export default class MotivationJoy extends Component {
  //Sets the value of authenticated to whatever is in session storage--A value may not exist!
  state = {
    authenticated: sessionStorage.getItem("id")
  }

  //This function is being passed to the Login component
  setAuthState = () => {
    //If there is a valid value for id in session storage, then set authenticated to true
    if (sessionStorage.getItem("id")) {
      this.setState({ authenticated: true })
    } else {
      this.setState({ authenticated: false })
    }
  }

  render() {
    //If there is a valid value in the state, then render the Application Views and NavBar components.  Otherwise return them to Login.
    if (this.state.authenticated) {
      return (
        <React.Fragment>
          <NavBar />
          <ApplicationViews
            isAuthenticated={this.state.authenticated}
            setAuthState={this.setAuthState}
          />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Login setAuthState={this.setAuthState} />
        </React.Fragment>
      )
    }
  }
}
