import { Route } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router"
import MyFavorites from "./myfavorites/MyFavorites"
import MyPhotos from "./changephotos/MyPhotos"
import PhotoManager from "../modules/PhotoManager"
import QuoteManager from "../modules/QuoteManager"
import IdeaManager from "../modules/IdeaManager"
import ActivityManager from "../modules/ActivityManager"
import EventbriteManager from "../modules/EventbriteManager"
import Login from "./Login"

class ApplicationViews extends Component {
  state = {
    photos: [],
    quotes: [],
    ideas: [],
    activities: [],
    events: []
  }
  getMyPhotos = () => {
    PhotoManager.getSpecificInfo(
      `photos?userid=${+sessionStorage.getItem("id")}`
    ).then(allPhotos => {
      this.setState({
        photos: allPhotos
      })
    })
  }

  componentDidMount() {
    //Each manager section contains the API calls to the database
    console.log("session storage id", sessionStorage.getItem("id"))
    this.getMyPhotos()
    // PhotoManager.getSpecificInfo(`photos?userid=${+sessionStorage.getItem("id")}`)
    //     .then(allPhotos => {
    //     this.setState({
    //         photos: allPhotos
    //     })
    // })

    QuoteManager.getAll().then(allQuotes => {
      this.setState({
        quotes: allQuotes
      })
    })

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

  //TODO:  Delete this code later----FROM Here 1
  // The deleteAnimal function is defined here (and then passed to the AnimalList component)
  // deleteAnimal = id => {
  //     return fetch(`http://localhost:5002/animals/${id}`, {
  //         method: "DELETE"
  //     })
  //     .then(() => fetch(`http://localhost:5002/animals`))
  //     .then(animals => animals.json())
  //     .then(animals => this.setState({
  //         animals: animals
  //     })
  //   )
  // }
  //TODO:  Delete this code later----TO Here 1

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
              />
            )
          }}
        />
        <Route
          exact
          path="/My_Photos"
          render={props => {
            //The path is to my favorites
            return <MyPhotos photos={this.state.photos}
                             appViewsGetMyPhotos={this.getMyPhotos} />
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
