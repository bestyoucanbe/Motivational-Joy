import React, { Component } from "react"
import "./MyFavorites.css"
import PhotoManager from "../../modules/PhotoManager"

export default class MyFavorites extends Component {
  currentUserId = parseInt(sessionStorage.getItem("id")) //Get the current userid and convert the string to a number.

  state = {
    photos: []
  }
  componentDidMount() {
    console.log("the props in favorites", this.props)
    this.props.getMyFavoritePhotos()
  }

  onClickPhotoHandler = photoComingIn => {
    const copyPhoto = { ...photoComingIn }
    // const copyPhoto1 = {}
    // copyPhoto1.isfavorite = !photoComingIn.isfavorite
    copyPhoto.isfavorite = !copyPhoto.isfavorite //Change the value of isfavorite field
    PhotoManager.put(copyPhoto).then(() => this.props.getMyFavoritePhotos())
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="heading">My Favorites</h2>
        </div>
        <div className="allitems-container">
          {this.props.photos.map(eachphoto => (
            <div key={eachphoto.id} className="card border border-primary">
              <img
                className="card-img-top"
                src={eachphoto.url}
                alt="Card image cap"
              />
              <div className="card-body">
                <a
                  href="#"
                  onClick={() => this.onClickPhotoHandler(eachphoto)}
                  className="btn btn-danger"
                >
                  Remove
                </a>
              </div>
            </div>
          ))}
          {/* {this.props.quotes.map(eachquote => (
            <div key={eachquote.id} className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Quote</h5>
                <p>{eachquote.quote}</p>
                <p>{eachquote.author}</p>
                <a href="#" className="btn btn-warning">
                  Remove
                </a>
              </div>
            </div>
          ))}
          {this.props.ideas.map(eachidea => (
            <div key={eachidea.id} className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Idea</h5>
                <p>{eachidea.idea}</p>
                <a href="#" className="btn btn-danger">
                  Remove
                </a>
              </div>
            </div>
          ))}
          {this.props.activities.map(eachactivity => (
            <div
              key={eachactivity.id}
              className="card text-white bg-primary mb-3"
            >
              <div className="card-body">
                <h5 className="card-title">Activity</h5>
                <p>{eachactivity.user_description}</p>
                <a href="#" className="btn btn-danger">
                  Remove
                </a>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    )
  }
}
