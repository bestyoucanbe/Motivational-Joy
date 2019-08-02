import React, { Component } from "react"
import "./MyQuotes.css"
import QuoteManager from "../../modules/QuoteManager"

export default class MyQuotes extends Component {
  state = {
    quote: "",
    author: ""
  }

  handleOnChangeQuote = event => {
    console.log("I changed", event.target.value)
    this.setState({ quote: event.target.value })
  }

  handleOnChangeAuthor = event => {
    console.log("I changed", event.target.value)
    this.setState({ author: event.target.value })
  }

  currentUserId = parseInt(sessionStorage.getItem("id"))

  handleOnClick = () => {
    const newQuote = {
      userid: this.currentUserId,
      quote: this.state.quote,
      author: this.state.author
    }

    QuoteManager.post(newQuote).then(() => {
      this.setState({ quote: "" }) //Clears the field of its values
      this.setState({ author: "" })
      this.props.appViewsGetMyQuotes()
    })
  }

  render() {
    return (
      <div className="quote-page-container">
        <div className="form-container w-25">
          <div className="form-group">
            <label htmlFor="addaquote">Add a Quote</label>
            <textarea
              value={this.state.quote}
              class="form-control"
              id="addaquote"
              rows="3"
              onChange={this.handleOnChangeQuote}
            />
            <label htmlFor="addaquote">Author</label>
            <textarea
              value={this.state.author}
              class="form-control"
              id="addaquote"
              rows="3"
              onChange={this.handleOnChangeAuthor}
            />
          </div>
          <button
            disabled={!this.state.quote}
            className="btn btn-primary"
            onClick={this.handleOnClick}
          >
            Submit
          </button>
        </div>
        <section className="quote-container w-75">
          {this.props.quotes.map(eachquote => (
            <div key={eachquote.id} className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 class="card-title">Quote</h5>
                <p>{eachquote.quote}</p>
                <p>{eachquote.author}</p>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={() => {
                    this.props.history.push(
                      `/My_Quotes/${this.props.quote.id}/edit`
                    )
                  }}
                >
                  EDIT
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}
