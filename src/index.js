import ReactDOM from "react-dom"
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import MotivationJoy from "./components/MotivationJoy"
import 'bootstrap/dist/css/bootstrap.min.css';

console.log("process env", process.env)
ReactDOM.render(
  <Router>
    <MotivationJoy />
  </Router>,
  document.querySelector("#root"))