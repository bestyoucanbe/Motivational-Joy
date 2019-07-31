import React, { Component } from "react"
import "./MyFavorites.css"

export default class MyFavorites extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <section className="photos">
        {this.props.photos.map(
          photo => (
            <div key={photo.id} className="card">
              <img className="card-img-top" src={photo.url} alt="Card image cap" />
              <div className="card-body">
                <a href="#" className="btn btn-primary">
                  **CHANGE THIS**
                </a>
              </div>
            </div>
          )
        )}
      </section>
    //   <section className="quotes">
    //   {this.props.quotes.map(
    //     quote => (
    //       <div key={quote.id} className="card">
    //         <p>{quote.quote}</p>
    //         <p>{quote.author}</p>
    //         <div className="card-body">
    //           <a href="#" className="btn btn-primary">
    //             **CHANGE THIS**
    //           </a>
    //         </div>
    //       </div>
    //     )
    //   )}
    // </section>
    )
  }
}
