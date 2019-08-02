import React, { Component } from "react"
import "./MyPhotos.css"
import PhotoManager from "../../modules/PhotoManager";


export default class MyPhotos extends Component {

  state = {
    value: ""
  }
  componentDidMount() {
    console.log(this.props)
  }

  handleOnChange = (event) => {
    console.log("I changed",event.target.value)
    this.setState({value: event.target.value})

  }

  handleOnClick = () => {
    const newPhoto = {
      userid: this.currentUserId,
      url: this.state.value
    }
    PhotoManager.post(newPhoto).then(() => {
        this.setState({value: ""})
        this.props.appViewsGetMyPhotos()
    })
  }
  currentUserId = parseInt(sessionStorage.getItem("id"))

  render() {
    return (
      <div className="photo-page-container">
        <div className="form-container w-25">
          <div className="form-group">
            <label htmlFor="addaphoto">Add a Photo</label>
            <textarea value={this.state.value} class="form-control" id="addaphoto" rows="3" onChange={this.handleOnChange}></textarea>
          </div>
          <button disabled={!this.state.value} className="btn btn-primary" onClick={this.handleOnClick}>Submit</button>
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
