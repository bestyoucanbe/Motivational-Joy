import React, { Component } from "react"
import NavBar from "./nav/NavBar" //Child component
import ApplicationViews from "./ApplicationViews" //Child component

//TODO: Delete later---
// import "./Kennel.css"
// import "bootstrap/dist/css/bootstrap.min.css"


export default class MotivationJoy extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}