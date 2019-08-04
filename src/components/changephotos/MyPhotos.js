import React, { Component } from "react"
import "./MyPhotos.css"
import PhotoManager from "../../modules/PhotoManager"

export default class MyPhotos extends Component {
  state = {
    value: ""
  }

  handleOnChange = event => {
    this.setState({ value: event.target.value })
  }

  currentUserId = parseInt(sessionStorage.getItem("id"))

  handleOnClick = () => {
    const newPhoto = {
      userid: this.currentUserId,
      url: this.state.value,
      isfavorite: true
    }
    PhotoManager.post(newPhoto).then(() => {
      this.setState({ value: "" }) //Clears the field of its values
      this.props.appViewsGetMyPhotos(`?userid=${+sessionStorage.getItem("id")}`)
    })
  }

  componentDidMount() {
    this.props.appViewsGetMyPhotos(`?userid=${+sessionStorage.getItem("id")}`)
  }
  render() {
    return (
      <div className="photo-page-container">
        <div className="form-container w-25">
          <div className="form-group">
            <label htmlFor="addaphoto">Add a Photo</label>
            <textarea
              value={this.state.value}
              class="form-control"
              id="addaphoto"
              rows="3"
              onChange={this.handleOnChange}
            />
          </div>
          <button
            disabled={!this.state.value}
            className="btn btn-primary"
            onClick={this.handleOnClick}
          >
            Submit
          </button>
        </div>
        <section className="photo-container w-75">
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
      </div>
    )
  }
}
