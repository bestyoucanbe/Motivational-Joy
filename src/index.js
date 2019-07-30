import ReactDOM from "react-dom"
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import MotivationJoy from "./components/MotivationJoy"

ReactDOM.render(
  <Router>
      <MotivationJoy />
</Router>,
  document.querySelector("#root"))