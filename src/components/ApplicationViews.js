import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import MyFavorites from './myfavorites/MyFavorites'
import PhotoManager from '../modules/PhotoManager'

class ApplicationViews extends Component {

  state = {
    photos: [],
    quotes: [],
    ideas: [],
    activities: []
  }
      componentDidMount() {
        //Each manager section contains the API calls to the database
        PhotoManager.getAll().then(allPhotos => {
            this.setState({
                photos: allPhotos
            })
        })

        // QuoteManager.getAll().then(allQuotes => {
        //     this.setState({
        //         quotes: allQuotes
        //     })
        // })

        // IdeaManager.getAll().then(allIdeas => {
        //     this.setState({
        //         ideas: allIdeas
        //     })
        // })

        // ActivityManager.getAll().then(allActivities => {
        //     this.setState({
        //         activities: allActivities
        //     })
        // })
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
              path="/My_Favorites"
              render={props => {
                //The path is to my favorites
                return <MyFavorites photos={this.state.photos}
                                    // quotes={this.state.quotes}
                                    // ideas={this.state.ideas}
                                    // activities={this.state.activities}
                                     />
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
          </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)