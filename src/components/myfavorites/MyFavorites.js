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
                    <div key={photo.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={photo.url} className="thisphoto" alt=""/>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}