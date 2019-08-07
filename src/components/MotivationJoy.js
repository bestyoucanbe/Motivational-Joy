import React, { Component } from "react"
import NavBar from "./nav/NavBar" //Child component
import ApplicationViews from "./ApplicationViews" //Child component
import Login from "./Login"

export default class MotivationJoy extends Component {
  state = {
    authenticated: sessionStorage.getItem("id")
  }

  setAuthState = () => {
    if (sessionStorage.getItem("id")) {
      this.setState({ authenticated: true })
    } else {
      this.setState({ authenticated: false })
    }
  }

  render() {
    if (this.state.authenticated) {
      return (
        <React.Fragment>
          <NavBar />
          <ApplicationViews isAuthenticated={this.state.authenticated} />
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
