import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import "./MyPhotos.css"
import PhotoManager from "../../modules/PhotoManager"

export default class MyPhotos extends Component {
  state = {
    value: "",
    isfavorite: true,
    radioSelected: true
  }

  handleOnChangePhotoUrl = event => {
    this.setState({ value: event.target.value })
  }

  onRadioBtnClick(radioSelected) {
    this.setState({ isfavorite: radioSelected }) //The value of isfavorite corresponds to what is selected by the radio button
  }

  handleOnClickAddPhotoButton = () => {
    const newPhoto = {
      userid: this.props.currentUserId,
      url: this.state.value,
      isfavorite: this.state.isfavorite //Whatever is selected by the radiobutton is passed.
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
                placeholder="(Enter image address here...select if you want it in favorites...and then press the Add Photo button)"
                onChange={this.handleOnChangePhotoUrl}
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
              disabled={!this.state.value}
              className="btn btn-primary"
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
