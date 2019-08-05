import React, { Component } from "react"
import "./MyPhotos.css"
import PhotoManager from "../../modules/PhotoManager"

export default class MyPhotos extends Component {
  state = {
    value: ""
  }

  handleOnChangePhotoUrl = event => {
    this.setState({ value: event.target.value })
  }

  handleOnClickAddPhotoButton = () => {
    const newPhoto = {
      userid: this.props.currentUserId,
      url: this.state.value,
      isfavorite: true
    }
    PhotoManager.post(newPhoto).then(() => {
      this.setState({ value: "" }) //Clears the field of its values
      this.props.getMyPhotos()
    })
  }

  componentDidMount() {
    this.props.getMyPhotos()
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="heading">My Photos</h2>
        </div>
        <div className="photo-page-container">
          <div className="form-container w-25">
            <div className="form-group">
              <label htmlFor="addaphoto">Want to add a photo?</label>
              <textarea
                value={this.state.value}
                className="form-control"
                id="addaphoto"
                rows="3"
                placeholder="(Enter image address here...then click the Add Photo button)"
                onChange={this.handleOnChangePhotoUrl}
              />
            </div>
            <button
              disabled={!this.state.value}
              className="btn btn-success"
              onClick={this.handleOnClickAddPhotoButton}
            >
              Add Photo
            </button>
          </div>
          <section className="photo-container w-75">
            {this.props.photos.map(eachphoto => (
              <div key={eachphoto.id} className="card border border-primary">
                <img
                  className="card-img-top"
                  src={eachphoto.url}
                  alt="Card cap"
                />
                <div className="card-body">
                  <a
                    href="#"
                    className="btn btn-danger"
                    onClick={() => this.props.deletePhoto(eachphoto)}
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
