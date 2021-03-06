import { Route } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router"
import Login from "./Login"
import Logout from "./Logout"
import MyFavorites from "./myfavorites/MyFavorites"
import PhotoManager from "../modules/PhotoManager"
import QuoteManager from "../modules/QuoteManager"
import IdeaManager from "../modules/IdeaManager"
import ActivityManager from "../modules/ActivityManager"
import EventbriteManager from "../modules/EventbriteManager"
import MyPhotos from "./changephotos/MyPhotos"
import MyQuotes from "./changequotes/MyQuotes"
import QuoteEditForm from "./changequotes/QuoteEditForm"
import MyIdeas from "./changeideas/MyIdeas"
import IdeaEditForm from "./changeideas/IdeaEditForm"
import MyActivities from "./changeactivities/MyActivities"
import ActivityEditForm from "./changeactivities/ActivityEditForm"
import EventbriteItems from "./changeactivities/Eventbriteitems"

class ApplicationViews extends Component {
  state = {
    photos: [],
    quotes: [],
    ideas: [],
    activities: [],
    events: [],
    eventurl: "" //Used to set the url of an event when selected
  }

  currentUserId = parseInt(sessionStorage.getItem("id")) //Get the current userid and convert the string to a number.

  //Get only my favorite photos
  getMyFavoritePhotos = () => {
    PhotoManager.getSpecificInfo(
      `photos?userid=${this.currentUserId}&isfavorite=true`
    ).then(allPhotos => {
      this.setState({
        photos: allPhotos
      })
    })
  }

  //Get only my favorite quotes
  getMyFavoriteQuotes = () => {
    QuoteManager.getSpecificInfo(
      `quotes?userid=${this.currentUserId}&isfavorite=true`
    ).then(allQuotes => {
      this.setState({
        quotes: allQuotes
      })
    })
  }

  //Get only my favorite ideas
  getMyFavoriteIdeas = () => {
    IdeaManager.getSpecificInfo(
      `ideas?userid=${this.currentUserId}&isfavorite=true`
    ).then(allIdeas => {
      this.setState({
        ideas: allIdeas
      })
    })
  }
  //Get only my favorite activities
  getMyFavoriteActivities = () => {
    ActivityManager.getSpecificInfo(
      `activities?userid=${this.currentUserId}&isfavorite=true`
    ).then(allActivities => {
      this.setState({
        activities: allActivities
      })
    })
  }

  //Get ALL my photos
  getMyPhotos = () => {
    PhotoManager.getSpecificInfo(`photos?userid=${this.currentUserId}`).then(
      allPhotos => {
        this.setState({
          photos: allPhotos
        })
      }
    )
  }

  //Delete a specific photo
  deletePhoto = photoToDelete => {
    PhotoManager.delete(photoToDelete)
      .then(() =>
        PhotoManager.getSpecificInfo(`photos?userid=${this.currentUserId}`)
      )
      .then(allPhotos => {
        this.setState({
          photos: allPhotos
        })
      })
  }
  //Get ALL my quotes
  getMyQuotes = () => {
    QuoteManager.getSpecificInfo(`quotes?userid=${this.currentUserId}`).then(
      allQuotes => {
        this.setState({
          quotes: allQuotes
        })
      }
    )
  }

  //Update my quote
  updateQuote = editedQuoteObject => {
    return QuoteManager.put(editedQuoteObject)
      .then(() => QuoteManager.getAll())
      .then(allquotes => {
        this.setState({
          quotes: allquotes
        })
      })
  }

  //Delete my quote
  deleteQuote = quoteToDelete => {
    QuoteManager.delete(quoteToDelete)
      .then(() =>
        QuoteManager.getSpecificInfo(`quotes?userid=${this.currentUserId}`)
      )
      .then(allQuotes => {
        this.setState({
          quotes: allQuotes
        })
      })
  }

  //Get ALL my ideas
  getMyIdeas = () => {
    IdeaManager.getSpecificInfo(`ideas?userid=${this.currentUserId}`).then(
      allIdeas => {
        this.setState({
          ideas: allIdeas
        })
      }
    )
  }

  //Update my idea
  updateIdea = editedIdeaObject => {
    return IdeaManager.put(editedIdeaObject)
      .then(() => IdeaManager.getAll())
      .then(allideas => {
        this.setState({
          ideas: allideas
        })
      })
  }

  //Delete my idea
  deleteIdea = ideaToDelete => {
    IdeaManager.delete(ideaToDelete)
      .then(() =>
        IdeaManager.getSpecificInfo(`ideas?userid=${this.currentUserId}`)
      )
      .then(allIdeas => {
        this.setState({
          ideas: allIdeas
        })
      })
  }

  //Get ALL my activities
  getMyActivities = () => {
    ActivityManager.getSpecificInfo(
      `activities?userid=${this.currentUserId}`
    ).then(allActivities => {
      this.setState({
        activities: allActivities
      })
    })
  }

  //Update my activity
  updateActivity = editedActivityObject => {
    return ActivityManager.put(editedActivityObject)
      .then(() => ActivityManager.getAll())
      .then(allactivities => {
        this.setState({
          activities: allactivities
        })
      })
  }

  //Delete my activity
  deleteActivity = activityToDelete => {
    ActivityManager.delete(activityToDelete)
      .then(() =>
        ActivityManager.getSpecificInfo(
          `activities?userid=${this.currentUserId}`
        )
      )
      .then(allActivities => {
        this.setState({
          activities: allActivities
        })
      })
  }

  //Get all events for a specific week in Nashville using Eventbrite.
  getEventbriteevents = () => {
    EventbriteManager.getEventsByTime("this_week").then(allEventsNashville => {
      this.setState({
        events: allEventsNashville.events
      })
      console.log("Eventbrite events", allEventsNashville.events)
    })
  }

  //Sets the value of eventurl based on the value being passed in.
  onClickEventChosen = theurlcomingin => {
    this.setState({ eventurl: theurlcomingin })
    this.props.history.push(`/My_Activities`)
  }

  //This resets the value of eventurl in Application Views to its default value.
  onClickResetEventUrl = theurlcomingin => {
    this.setState({ eventurl: theurlcomingin })
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/login"
          render={props => {
            return <Login {...props} />
          }}
        />
        <Route
          exact
          path="/logout"
          render={props => {
            return <Logout {...props} setAuthState={this.props.setAuthState} />
          }}
        />
        <Route
          exact
          path="/My_Favorites"
          render={props => {
            //This takes you to my favorites page
            return (
              <MyFavorites
                photos={this.state.photos}
                quotes={this.state.quotes}
                ideas={this.state.ideas}
                activities={this.state.activities}
                getMyFavoritePhotos={this.getMyFavoritePhotos}
                getMyFavoriteQuotes={this.getMyFavoriteQuotes}
                getMyFavoriteIdeas={this.getMyFavoriteIdeas}
                getMyFavoriteActivities={this.getMyFavoriteActivities}
              />
            )
          }}
        />
        <Route
          exact
          path="/My_Photos"
          render={props => {
            return (
              <MyPhotos
                photos={this.state.photos}
                getMyPhotos={this.getMyPhotos}
                currentUserId={this.currentUserId}
                deletePhoto={this.deletePhoto}
              />
            )
          }}
        />
        <Route
          exact
          path="/My_Quotes"
          render={props => {
            return (
              <MyQuotes
                {...props}
                quotes={this.state.quotes}
                getMyQuotes={this.getMyQuotes}
                currentUserId={this.currentUserId}
                deleteQuote={this.deleteQuote}
              />
            )
          }}
        />
        <Route
          path="/My_Quotes/:quoteId(\d+)/edit"
          render={props => {
            return (
              <QuoteEditForm
                {...props}
                currentUserId={this.currentUserId}
                updateQuote={this.updateQuote}
              />
            )
          }}
        />
        <Route
          exact
          path="/My_Ideas"
          render={props => {
            return (
              <MyIdeas
                {...props}
                ideas={this.state.ideas}
                getMyIdeas={this.getMyIdeas}
                currentUserId={this.currentUserId}
                deleteIdea={this.deleteIdea}
              />
            )
          }}
        />
        <Route
          path="/My_Ideas/:ideaId(\d+)/edit"
          render={props => {
            return (
              <IdeaEditForm
                {...props}
                currentUserId={this.currentUserId}
                updateIdea={this.updateIdea}
              />
            )
          }}
        />
        <Route
          exact
          path="/My_Activities"
          render={props => {
            return (
              <MyActivities
                {...props}
                activities={this.state.activities}
                getMyActivities={this.getMyActivities}
                currentUserId={this.currentUserId}
                deleteActivity={this.deleteActivity}
                onClickResetEventUrl={this.onClickResetEventUrl}
                eventurl={this.state.eventurl}
              />
            )
          }}
        />
        <Route
          path="/My_Activities/:activityId(\d+)/edit"
          render={props => {
            return (
              <ActivityEditForm
                {...props}
                currentUserId={this.currentUserId}
                updateActivity={this.updateActivity}
              />
            )
          }}
        />
        <Route
          path="/My_EventbriteList"
          render={props => {
            return (
              <EventbriteItems
                {...props}
                events={this.state.events}
                currentUserId={this.currentUserId}
                getEventbriteevents={this.getEventbriteevents}
                onClickEventChosen={this.onClickEventChosen}
              />
            )
          }}
        />
      </React.Fragment>
    )
  }
}
export default withRouter(ApplicationViews)
