import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import QuoteManager from "../../modules/QuoteManager"
import "./QuoteEditForm.css"
export default class QuoteEditForm extends Component {
  // Set initial state
  state = {
    quote: "",
    author: "",
    isfavorite: true,
    radioSelected: true
  }

  currentUserId = parseInt(sessionStorage.getItem("id"))

  handleOnChangeQuote = event => {
    this.setState({ quote: event.target.value })
  }

  handleOnChangeAuthor = event => {
    this.setState({ author: event.target.value })
  }

  onRadioBtnClick(radioSelected) {
    this.setState({ isfavorite: radioSelected })
  }

  updateExistingQuote = evt => {
    evt.preventDefault()
    if (this.state.quote === "" || this.state.author === "") {
      window.alert("Please fill in all fields")
    } else {
      const editedQuote = {
        id: parseInt(this.props.match.params.quoteId),
        quote: this.state.quote,
        author: this.state.author,
        isfavorite: this.state.isfavorite,
        userid: this.currentUserId
      }

      this.props
        .updateQuote(editedQuote)
        .then(() => this.props.history.push("/My_Quotes"))
    }
  }

  componentDidMount() {
    QuoteManager.get(this.props.match.params.quoteId).then(quoteToEdit => {
      this.setState({
        quote: quoteToEdit.quote,
        author: quoteToEdit.author
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <h2 className="heading">Edit a Quote</h2>
          </div>
          <div className="form-container w-50">
            <form className="quoteForm">
              <div className="form-group">
                <label htmlFor="change-quote">Quote</label>
                <textarea
                  value={this.state.quote}
                  className="form-control"
                  id="change-quote"
                  rows="3"
                  onChange={this.handleOnChangeQuote}
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleOnChangeAuthor}
                  id="author"
                  value={this.state.author}
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
                onClick={this.updateExistingQuote}
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
