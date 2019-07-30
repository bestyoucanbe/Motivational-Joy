import ReactDOM from "react-dom"
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import MotivationJoy from "./components/MotivationJoy"
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
  <Router>
      <MotivationJoy />
</Router>,
  document.querySelector("#root"))