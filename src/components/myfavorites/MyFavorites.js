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
          {this.props.photos.map(eachphoto => (
            <div key={eachphoto.id} className="card border border-primary">
              <img
                className="card-img-top"
                src={eachphoto.url}
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
          {this.props.quotes.map(eachquote => (
            <div key={eachquote.id} className="card text-white bg-danger mb-3">
              <div className="card-body">
              <h5 class="card-title">Quote</h5>
                <p>{eachquote.quote}</p>
                <p>{eachquote.author}</p>
                <a href="#" className="btn btn-primary">
                  **CHANGE THIS**
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className="idea-container mt-2">
          {this.props.ideas.map(eachidea => (
            <div key={eachidea.id} className="card text-white bg-success mb-3">
              <div className="card-body">
              <h5 class="card-title">Idea</h5>
                <p>{eachidea.idea}</p>
                <a href="#" className="btn btn-primary">
                  **CHANGE THIS**
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className="activity-container mt-2">
          {this.props.activities.map(eachactivity => (
            <div key={eachactivity.id} className="card text-white bg-primary mb-3">
              <div className="card-body">
              <h5 class="card-title">Activity</h5>
                <p>{eachactivity.user_description}</p>
                <a href="#" className="btn btn-secondary">
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
