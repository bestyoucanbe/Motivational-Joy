import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import "./Eventbriteitems.css"

export default class Eventbriteitems extends Component {
  // state = {
  //   value: "",
  //   activity_nickname: "",
  //   isfavorite: true,
  //   radioSelected: true
  // }

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
          <section className="events-container w-75">
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
                      console.log("I was pushed in Eventbriteitems")
                    }}
                  >
                    Select Me
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

//Delete later---
// render() {
//   return (
//     <div>
//       <div>
//         <h2 className="headingmyactivity">My Activities</h2>
//       </div>
//       <div className="activity-page-container">
//         <div className="form-container w-25">
//           <div className="form-group">
//             <label htmlFor="addaactivity">Want to add an activity?</label>
//             <button
//               className="bringlist"
//               onClick={() => this.props.history.push(`/My_EventbriteList`)}
//             />
//             <textarea
//               value={this.state.value}
//               className="form-control"
//               id="addaactivity"
//               rows="3"
//               placeholder="(Click the button above or enter web url here...)"
//               onChange={this.handleOnChangeActivityUrl}
//             />
//             <label htmlFor="addanickname">Short Description/Title</label>
//             <textarea
//               value={this.state.activity_nickname}
//               className="form-control"
//               id="addanickname"
//               rows="3"
//               placeholder="(Type a short title/description you can easily remember)"
//               onChange={this.handleOnChangeActivityNickname}
//             />
//           </div>
//           <div>
//             <h5>Favorite?</h5>
//             <ButtonGroup className="mb-3">
//               <Button
//                 color="success"
//                 onClick={() => this.onRadioBtnClick(true)}
//                 active={this.state.radioSelected === true}
//               >
//                 Yes
//               </Button>
//               <Button
//                 color="danger"
//                 onClick={() => this.onRadioBtnClick(false)}
//                 active={this.state.radioSelected === false}
//               >
//                 No
//               </Button>
//             </ButtonGroup>
//           </div>
//           <button
//             disabled={!this.state.value}
//             className="btn btn-primary"
//             onClick={this.handleOnClickAddActivityButton}
//           >
//             Add Activity
//           </button>
//         </div>
//         <section className="activity-container w-75">
//           {this.props.activities.map(eachactivity => (
//             <div
//               key={eachactivity.id}
//               className="card text-white bg-primary mb-3"
//             >
//               <div className="card-body">
//                 <h5 className="card-title">Activity</h5>
//                 <p>{eachactivity.activity_nickname}</p>
//                 <a
//                   href="#"
//                   className="btn btn-warning mb-2"
//                   onClick={() => {
//                     this.props.history.push(
//                       `/My_Activities/${eachactivity.id}/edit`
//                     )
//                   }}
//                 >
//                   Edit
//                 </a>
//                 <a
//                   href="#"
//                   className="btn btn-danger"
//                   onClick={() => this.props.deleteActivity(eachactivity)}
//                 >
//                   Delete
//                 </a>
//               </div>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   )
// }
