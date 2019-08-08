import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import "./Logout.css"
import { withRouter } from "react-router"

class Logout extends Component {
  state = {
    radioSelected: false
  }

  onRadioBtnClick(radioSelected) {
    if (radioSelected === true) {
      //Logout has been confirmed (radioSelected set to true).  1.  Clear session storage.  2. Set the Authstate in Motivation Joy component to prevent access to the existing components.  3.  Send the individual to the Login page.
      sessionStorage.clear()
      this.props.setAuthState()
      this.props.history.push("/login")
    } else {
      //Send the person back to the main landing page.
      this.props.history.push("/My_Favorites")
    }
  }

  render() {
    return (
      <div>
        <div className="logoutform">
          <h5>Are you sure you want to logout?</h5>
          <ButtonGroup className="mb-3">
            <Button
              color="success"
              onClick={() => this.onRadioBtnClick(true)}
              active={this.state.radioSelected === true}
            >
              Yes
            </Button>
            <Button
              color="danger"
              onClick={() => this.onRadioBtnClick(false)}
              active={this.state.radioSelected === false}
            >
              No
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}
export default withRouter(Logout)
