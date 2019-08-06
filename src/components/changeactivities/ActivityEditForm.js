import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import ActivityManager from "../../modules/ActivityManager"
import "./ActivityEditForm.css"
export default class ActivityEditForm extends Component {
  // Set initial state
  state = {
    activity_nickname: "",
    activity_url: "",
    isfavorite: true,
    radioSelected: true
  }

  handleOnChangeActivity = event => {
    this.setState({ activity: event.target.value })
  }

  onRadioBtnClick(radioSelected) {
    this.setState({ isfavorite: radioSelected })
  }

  updateExistingActivity = evt => {
    evt.preventDefault()
    if (this.state.activity === "") {
      window.alert("Please fill in all fields")
    } else {
      const editedActivity = {
        id: parseInt(this.props.match.params.activityId),
        activity: this.state.activity,
        isfavorite: this.state.isfavorite,
        userid: this.props.currentUserId
      }

      this.props
        .updateActivity(editedActivity)
        .then(() => this.props.history.push("/My_Activities"))
    }
  }

  componentDidMount() {
    ActivityManager.get(this.props.match.params.activityId).then(
      activityToEdit => {
        this.setState({
          activity: activityToEdit.activity
        })
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <h2 className="headingActivityEdit">Edit a Activity</h2>
          </div>
          <div className="form-container w-50">
            <form className="activityForm">
              <div className="form-group">
                <label htmlFor="change-activity">Activity</label>
                <textarea
                  value={this.state.activity}
                  className="form-control"
                  id="change-activity"
                  rows="3"
                  onChange={this.handleOnChangeActivity}
                />
              </div>
              <div>
                <h5>Favorite?</h5>
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
              <button
                type="submit"
                onClick={this.updateExistingActivity}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
