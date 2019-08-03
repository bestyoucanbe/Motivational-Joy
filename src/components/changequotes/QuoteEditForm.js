import React, { Component } from "react"
import QuoteManager from "../../modules/QuoteManager"
export default class QuoteEditForm extends Component {
  // Set initial state
  state = {
    quote: "",
    author: ""
  }

  handleOnChangeQuote = event => {
    this.setState({ quote: event.target.value })
  }

  handleOnChangeAuthor = event => {
    this.setState({ author: event.target.value })
  }

  updateExistingQuote = evt => {
    evt.preventDefault()
    if (this.state.quote === "" || this.state.author === "") {
      window.alert("Please fill in all fields")
    } else {
      const editedQuote = {
        id: parseInt(this.props.match.params.quoteId),
        quote: this.state.quote,
        author: this.state.author
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
          <button
            type="submit"
            onClick={this.updateExistingQuote}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    )
  }
}
