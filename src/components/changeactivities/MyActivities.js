import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import "./MyActivities.css"
import ActivityManager from "../../modules/ActivityManager"

export default class MyActivities extends Component {
  state = {
    value: "",
    activity_nickname: "",
    isfavorite: true,
    radioSelected: true
  }

  handleOnChangeActivityUrl = event => {
    this.setState({ value: event.target.value })
  }

  handleOnChangeActivityNickname = event => {
    this.setState({ activity_nickname: event.target.value })
  }

  onRadioBtnClick(radioSelected) {
    this.setState({ isfavorite: radioSelected }) //The value of isfavorite corresponds to what is selected by the radio button
  }

  handleOnClickAddActivityButton = () => {
    if (this.state.activity_url === "" || this.state.activity_nickname === "") {
      window.alert("Please fill in all fields")
    } else {
      const newActivity = {
        userid: this.props.currentUserId,
        activity_nickname: this.state.activity_nickname,
        activity_url: this.state.value,
        isfavorite: this.state.isfavorite //Whatever is selected by the radiobutton is passed.
      }
      ActivityManager.post(newActivity).then(() => {
        this.setState({ value: "" })
        this.setState({ activity_nickname: "" }) //Clears the field of its values
        this.props.getMyActivities()
      })
    }
  }

  componentDidMount() {
    this.props.getMyActivities()
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="headingmyactivity">My Activities</h2>
        </div>
        <div className="activity-page-container">
          <div className="form-container w-25">
            <div className="form-group">
              <label htmlFor="addaactivity" className="mr-3">
                Want to add an activity?
              </label>
              <button
                className="btn btn-info"
                onClick={() => this.props.history.push(`/My_EventbriteList`)}
              >
                Choose from a List
              </button>
              <textarea
                value={this.state.value}
                className="form-control"
                id="addaactivity"
                rows="3"
                placeholder="(Click the button above or enter web url here...)"
                onChange={this.handleOnChangeActivityUrl}
              />
              <label htmlFor="addanickname">Short Description/Title</label>
              <textarea
                value={this.state.activity_nickname}
                className="form-control"
                id="addanickname"
                rows="3"
                placeholder="(Type a short title/description you can easily remember)"
                onChange={this.handleOnChangeActivityNickname}
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
              disabled={!this.state.value}
              className="btn btn-primary"
              onClick={this.handleOnClickAddActivityButton}
            >
              Add Activity
            </button>
          </div>
          <section className="activity-container w-75">
            {this.props.activities.map(eachactivity => (
              <div
                key={eachactivity.id}
                className="card text-white bg-primary mb-3"
              >
                <div className="card-body">
                  <h5 className="card-title">Activity</h5>
                  <p>{eachactivity.activity_nickname}</p>
                  <a
                    href="#"
                    className="btn btn-warning mb-2"
                    onClick={() => {
                      this.props.history.push(
                        `/My_Activities/${eachactivity.id}/edit`
                      )
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger"
                    onClick={() => this.props.deleteActivity(eachactivity)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    )
  }
}
