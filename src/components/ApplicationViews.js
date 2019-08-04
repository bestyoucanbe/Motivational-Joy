import { Route } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router"
import MyFavorites from "./myfavorites/MyFavorites"
import MyPhotos from "./changephotos/MyPhotos"
import MyQuotes from "./changequotes/MyQuotes"
import PhotoManager from "../modules/PhotoManager"
import QuoteManager from "../modules/QuoteManager"
import IdeaManager from "../modules/IdeaManager"
import ActivityManager from "../modules/ActivityManager"
import EventbriteManager from "../modules/EventbriteManager"
import QuoteEditForm from "./changequotes/QuoteEditForm"
import Login from "./Login"

class ApplicationViews extends Component {
  state = {
    photos: [],
    quotes: [],
    ideas: [],
    activities: [],
    events: []
  }

  //Get only my favorite photos
  //`photos?userid=${+sessionStorage.getItem("id")}&isfavorite=true`
  getMyPhotos = queryparams => {
    PhotoManager.getSpecificInfo(queryparams).then(allPhotos => {
      this.setState({
        photos: allPhotos
      })
    })
  }

  //Get only my favorite quotes
  getMyQuotes = () => {
    QuoteManager.getSpecificInfo(
      `quotes?userid=${parseInt(sessionStorage.getItem("id"))}&isfavorite=true`
    ).then(allQuotes => {
      this.setState({
        quotes: allQuotes
      })
    })
  }

  updateQuote = editedQuoteObject => {
    return QuoteManager.put(editedQuoteObject)
      .then(() => QuoteManager.getAll())
      .then(allquotes => {
        this.setState({
          quotes: allquotes
        })
      })
  }
  //FIXME:  BIG FIX-->Fetch all items on individual pages...not here in Application views!
  componentDidMount() {
    //Each manager section contains the API calls to the database

    this.getMyPhotos(`?userid=${+sessionStorage.getItem("id")}&isfavorite=true`) //Calls the function to get photos for the active user from the database.

    this.getMyQuotes() //Calls the function to get quotes for the active user from the database.

    //FIXME:  Write functions for each section that gets data for the active user.

    IdeaManager.getAll().then(allIdeas => {
      this.setState({
        ideas: allIdeas
      })
    })

    ActivityManager.getAll().then(allActivities => {
      this.setState({
        activities: allActivities
      })
    })

    EventbriteManager.getEventsByTime("this_week").then(allEventsNashville => {
      this.setState({
        events: allEventsNashville.events
      })
      console.log("Eventbrite events", allEventsNashville)
    })
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/login"
          render={props => {
            //The path is to my favorites
            return <Login {...props} />
          }}
        />
        <Route
          exact
          path="/My_Favorites"
          render={props => {
            //The path is to my favorites
            return (
              <MyFavorites
                photos={this.state.photos}
                quotes={this.state.quotes}
                ideas={this.state.ideas}
                activities={this.state.activities}
                getMyPhotos={this.getMyPhotos}
              />
            )
          }}
        />
        <Route
          exact
          path="/My_Photos"
          render={props => {
            //The path is to my favorites
            return (
              <MyPhotos
                photos={this.state.photos}
                appViewsGetMyPhotos={this.getMyPhotos}
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
                appViewsGetMyQuotes={this.getMyQuotes}
              />
            )
          }}
        />
        <Route
          path="/My_Quotes/:quoteId(\d+)/edit"
          render={props => {
            return <QuoteEditForm {...props} updateQuote={this.updateQuote} />
          }}
        />
        {/* <Route
              exact
              path="/My_Items"
              render={props => {
                //The path is to my items
                return <MyItems photos={this.state.photos}
                                quotes={this.state.quotes}
                                ideas={this.state.ideas}
                                activities={this.state.activities}
                                     />
              }}
            />
            <Route
              exact
              path="/All_Items"
              render={props => {
                //The path is to all items
                return <AllItems  photos={this.state.photos}
                                  quotes={this.state.quotes}
                                  ideas={this.state.ideas}
                                  activities={this.state.activities}
                                     />
              }}
            /> */}
        {/* Logout Route Needed */}
      </React.Fragment>
    )
  }
}
export default withRouter(ApplicationViews)
