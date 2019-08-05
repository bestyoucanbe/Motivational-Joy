import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import IdeaManager from "../../modules/IdeaManager"
import "./IdeaEditForm.css"
export default class IdeaEditForm extends Component {
  // Set initial state
  state = {
    idea: "",
    isfavorite: true,
    radioSelected: true
  }

  //FIXME: Remove this from here and have it passed in from Application Views
  currentUserId = parseInt(sessionStorage.getItem("id"))

  handleOnChangeIdea = event => {
    this.setState({ idea: event.target.value })
  }

  onRadioBtnClick(radioSelected) {
    this.setState({ isfavorite: radioSelected })
  }

  updateExistingIdea = evt => {
    evt.preventDefault()
    if (this.state.idea === "") {
      window.alert("Please fill in all fields")
    } else {
      const editedIdea = {
        id: parseInt(this.props.match.params.ideaId),
        idea: this.state.idea,
        isfavorite: this.state.isfavorite,
        userid: this.currentUserId
      }

      this.props
        .updateIdea(editedIdea)
        .then(() => this.props.history.push("/My_Ideas"))
    }
  }

  componentDidMount() {
    IdeaManager.get(this.props.match.params.ideaId).then(ideaToEdit => {
      this.setState({
        idea: ideaToEdit.idea
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <h2 className="headingIdeaEdit">Edit a Idea</h2>
          </div>
          <div className="form-container w-50">
            <form className="ideaForm">
              <div className="form-group">
                <label htmlFor="change-idea">Idea</label>
                <textarea
                  value={this.state.idea}
                  className="form-control"
                  id="change-idea"
                  rows="3"
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
                type="submit"
                onClick={this.updateExistingIdea}
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
