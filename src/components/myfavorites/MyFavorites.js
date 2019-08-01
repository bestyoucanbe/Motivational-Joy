import React, { Component } from "react"
import "./MyFavorites.css"

export default class MyFavorites extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <section className="photo-container">
          {this.props.photos.map(photo => (
            <div key={photo.id} className="card border border-primary">
              <img
                className="card-img-top"
                src={photo.url}
                alt="Card image cap"
              />
              <div className="card-body">
                <a href="#" className="btn btn-primary">
                  **CHANGE THIS**
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className="quote-container mt-2">
          {this.props.quotes.map(quote => (
            <div key={quote.id} className="card border border-secondary">
              <div className="card-body">
                <p>{quote.quote}</p>
                <p>{quote.author}</p>
                <a href="#" className="btn btn-primary">
                  **CHANGE THIS**
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}
