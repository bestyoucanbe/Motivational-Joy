import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import "./Eventbriteitems.css"

export default class Eventbriteitems extends Component {
  componentDidMount() {
    this.props.getEventbriteevents()
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="headingmyevents">List of Events</h2>
        </div>
        <div className="events-page-container">
          <section className="events-container">
            {this.props.events.map(eachevent => (
              <div key={eachevent.id} className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Event</h5>
                  <p>{eachevent.name.text}</p>
                  <a href={eachevent.url} target="_blank">
                    {eachevent.url}
                  </a>
                  <a
                    href="#"
                    className="btn btn-warning mb-2"
                    onClick={() => {
                      this.props.onClickEventChosen(eachevent.url)
                    }}
                  >
                    Choose This
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    )
  }
}
