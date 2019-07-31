import React, { Component } from 'react'
import "./MyFavorites.css"

export default class MyFavorites extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render () {
        return (
            <section className="photos">
            {
                this.props.photos.map(photo =>
                  <div class="card">
  <img class="card-img-top" src={photo.url} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    // <div key={photo.id} className="card">
                    //     <div className="card-body">
                    //         <div className="card-title">
                    //             <img src={photo.url} className="thisphoto" alt=""/>
                    //         </div>
                    //     </div>
                    // </div>
                )
            }
            </section>
        )
    }
}