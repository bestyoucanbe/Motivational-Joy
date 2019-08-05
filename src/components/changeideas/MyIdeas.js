import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import "./MyIdeas.css"
import IdeaManager from "../../modules/IdeaManager"

export default class MyIdeas extends Component {
  state = {
    idea: "",
    isfavorite: true,
    radioSelected: true
  }

  handleOnChangeIdea = event => {
    this.setState({ idea: event.target.value })
  }

  onRadioBtnClick(radioSelected) {
    this.setState({ isfavorite: radioSelected }) //The value of isfavorite corresponds to what is selected by the radio button
  }

  handleOnClickAddIdeaButton = () => {
    if (this.state.idea === "") {
      window.alert("Please fill in all fields")
    } else {
      const newIdea = {
        userid: this.props.currentUserId,
        idea: this.state.idea,
        isfavorite: this.state.isfavorite
      }

      IdeaManager.post(newIdea).then(() => {
        this.setState({ idea: "" }) //Clears the field of its values
        this.props.getMyIdeas()
      })
    }
  }

  componentDidMount() {
    this.props.getMyIdeas()
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="headingMyIdea">My Ideas</h2>
        </div>
        <div className="idea-page-container">
          <div className="form-container w-25">
            <div className="form-group">
              <label htmlFor="addaidea">Want to add an idea?</label>
              <textarea
                value={this.state.idea}
                className="form-control"
                id="addaidea"
                rows="3"
                placeholder="(Enter idea here...select if you want it in favorites...and then press the Add Idea button)"
                onChange={this.handleOnChangeIdea}
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
              disabled={!this.state.idea}
              className="btn btn-primary"
              onClick={this.handleOnClickAddIdeaButton}
            >
              Add Idea
            </button>
          </div>
          <section className="idea-container w-75">
            {this.props.ideas.map(eachidea => (
              <div
                key={eachidea.id}
                className="card text-white bg-success mb-3"
              >
                <div className="card-body">
                  <h5 className="card-title">Idea</h5>
                  <p>{eachidea.idea}</p>
                  <a
                    href="#"
                    className="btn btn-primary mb-2"
                    onClick={() => {
                      this.props.history.push(`/My_Ideas/${eachidea.id}/edit`)
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger"
                    onClick={() => this.props.deleteIdea(eachidea)}
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
