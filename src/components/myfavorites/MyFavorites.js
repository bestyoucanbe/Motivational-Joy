import React, { Component } from "react"
import "./MyFavorites.css"
import PhotoManager from "../../modules/PhotoManager"
import QuoteManager from "../../modules/QuoteManager"
import IdeaManager from "../../modules/IdeaManager"
import ActivityManager from "../../modules/ActivityManager"

export default class MyFavorites extends Component {
  currentUserId = parseInt(sessionStorage.getItem("id")) //Get the current userid and convert the string to a number.

  componentDidMount() {
    this.props.getMyFavoritePhotos()
    this.props.getMyFavoriteQuotes()
    this.props.getMyFavoriteIdeas()
    this.props.getMyFavoriteActivities()
  }

  onClickPhotoHandler = photoComingIn => {
    const copyPhoto = { ...photoComingIn }
    // Optional way of handling the above statement
    // const copyPhoto1 = {}
    // copyPhoto1.isfavorite = !photoComingIn.isfavorite
    copyPhoto.isfavorite = !copyPhoto.isfavorite //Change the value of isfavorite field
    PhotoManager.put(copyPhoto).then(() => this.props.getMyFavoritePhotos()) //the .then is necessary for re-rendering!
  }

  onClickQuoteHandler = quoteComingIn => {
    const copyQuote = { ...quoteComingIn }
    copyQuote.isfavorite = !copyQuote.isfavorite //Change the value of isfavorite field
    QuoteManager.put(copyQuote).then(() => this.props.getMyFavoriteQuotes()) //the .then is necessary for re-rendering!
  }

  onClickIdeaHandler = ideaComingIn => {
    const copyIdea = { ...ideaComingIn }
    copyIdea.isfavorite = !copyIdea.isfavorite //Change the value of isfavorite field
    IdeaManager.put(copyIdea).then(() => this.props.getMyFavoriteIdeas()) //the .then is necessary for re-rendering!
  }

  onClickActivityHandler = activityComingIn => {
    const copyActivity = { ...activityComingIn }
    copyActivity.isfavorite = !copyActivity.isfavorite //Change the value of isfavorite field
    ActivityManager.put(copyActivity).then(() =>
      this.props.getMyFavoriteActivities()
    ) //the .then is necessary for re-rendering!
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
                alt="favorite pic"
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
          {this.props.quotes.map(eachquote => (
            <div key={eachquote.id} className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Quote</h5>
                <p>{eachquote.quote}</p>
                <p>{eachquote.author}</p>
                <a
                  href="#"
                  onClick={() => this.onClickQuoteHandler(eachquote)}
                  className="btn btn-warning"
                >
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
                <a
                  href="#"
                  onClick={() => this.onClickIdeaHandler(eachidea)}
                  className="btn btn-danger"
                >
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
                <a
                  href="#"
                  onClick={() => this.onClickActivityHandler(eachactivity)}
                  className="btn btn-danger"
                >
                  Remove
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
