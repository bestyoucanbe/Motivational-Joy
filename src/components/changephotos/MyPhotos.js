import React, { Component } from "react"
import "./MyPhotos.css"


export default class MyPhotos extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  currentUserId = sessionStorage.getItem("id")

  render() {
    console.log(this.currentUserId)
    return (
      <div>
        {/* <section className="photo-container">
          {this.props.photos.map(eachphoto =>
            {
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
            </div>}
          )}
        </section> */}
      </div>
    )
  }
}
