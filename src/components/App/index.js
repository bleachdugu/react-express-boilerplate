import React, { Component } from 'react'
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Parallax from 'Components/Parallax'
import { Birds } from 'Components/ThreeJs'
import Features from 'Containers/FeaturesContainer'

import './style.scss'

export default class App extends Component {
  render() {
    const {images} = this.props;
    return (
      <div>
        <h1>Boilerplate</h1>
        <p className="description">Express and Webpack Three.js Boilerplate App</p>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/">
                <Birds />
                <Parallax images={images}/>
              </Route>
              <Route path="/features">
                <Features />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
